import { compressNum } from './formatter.js';
import { runCommand, findEntityAtPos, getScore, getPlayers } from './others.js';

/**
 * @function rainbowText() - Turn text into colored text that supports MCBE
 * @param {string} text - The text you want to format to rainbow colors.
 * @returns rainbow colored text in MCBE format
 */
function rainbowText(text) {
    const rainbowCode = ['§4', '§c', '§6', '§e', '§g', '§2', '§a', '§b', '§3', '§9', '§5', '§d'];
    const letter = text.replace(/§./g, '').split('');
    let newMessage = '', rainbowIndex = 0;
    letter.forEach(letter => {
        if(letter !== ' ') {
            newMessage += `${rainbowCode[rainbowIndex]}${letter}`;
            rainbowIndex + 1 >= rainbowCode.length ? rainbowIndex = 0 : rainbowIndex++;
        } else newMessage += ' ';
    });
    return newMessage;
};

/**
 * @function displayRank() - Display users rank in chat depending on their tag. For example user tag: /tag @s add "$(ChatRank{Rank-Name: OWNER})"'
 * @param {object} chatmsg - Object that is passed down after a chat event is fired. Make it has the property 'message'
 * @returns user message. Chat output would be: [OWNER] <USERNAME> The users message
 */
function displayRank(chatmsg) {
    const data = runCommand(`tag ${chatmsg.sender.name} list`).result;
    const allRanks = data.statusMessage.match(/(?<=\$\(ChatRank{Rank-Name: ).+?(?=}\))/g);
    if(!allRanks) return;
    chatmsg.canceled = true;
    return runCommand(`tellraw @a {"rawtext":[{"text":${JSON.stringify(`[${allRanks.join(', ').trim()}§r] <${chatmsg.sender.name}> ${chatmsg.message}`)}}]}`);
};

/**
 * @function writeLeaderboard() - Display a floating text of the top players on a scoreboard. For this leaderboard to display highest ranking players, the players must join the game while this function is running.
 * @param {number} [xyz] - The position where your entity is at. This entities name will change to the leaderboard. Make sure there are no other entities on the same position
 * @param {string} objective - The scoreboard objective you want to display the players from
 * @param {number} displayLength - Amount of players you would display in the leaderboard
 * @param {string} leaderboardHeading - Text you want to display on top of the leaderboard
 * @param {string} leaderboardLayout - The way players ranking, gamertag, and score will be displayed. Example: "§e#$(RANK) §7$(GAMERTAG) §r- §e$(SCORE)". The $(RANK) part will display the users rank in the scoreboard. $(GAMERTAG) will display that users GamerTag. And last of all $(SCORE) will display that users score in that scoreboard. It would look like this while being displayed, example: §e#1 §7TestUser1234 §r- §e$6969696
 * @param {boolean} compressScore - This will display in text in thousands, millions and etc... For ex: "1400 -> "1.4k", "1000000" -> "1M", etc...
 * @param {boolean} formatScore - Will format your score. For ex: "1400" -> "1,400", "1000000" -> "1,000,000", etc...
 * @example writeLeaderboard([0, 6, 0], 'money', { displayLength: 10, leaderboardHeading: 'Money Leaderboard\nTop players with the most Money\n§r\n', leaderboardLayout: '§e#$(RANK) §b$(GAMERTAG) §f- §a$§c$(SCORE)' }, { compressScore: true });
 */
function writeLeaderboard([x, y, z], objective, { displayLength, leaderboardHeading, leaderboardLayout } = {}, { compressScore, formatScore } = {}) {
    leaderboardHeading ? null : leaderboardHeading = `${objective.toUpperCase()} LEADERBOARD`;
    leaderboardLayout ? null : leaderboardLayout = '§e#$(RANK) §7$(GAMERTAG) §r- §e$(SCORE)';

    const getEntity = findEntityAtPos([x, y, z]);
    if(getEntity.error) return;
    const entityName = getEntity.list[0].nameTag.replace(/\n|§/g, '');
    let dataGamertag = entityName.match(new RegExp(`(?<=\\$\\(${objective}-objective{gamertag: ).+?(?=, score: (-\\d+|\\d+)}\\))`, 'g'));
    let dataScore = entityName.match(new RegExp(`(?<=\\$\\(${objective}-objective{gamertag: \\D.*, score: ).+?(?=}\\))`, 'g'));
    
    let leaderboard = [], onlineLeaderboard = [];
    if(dataGamertag && getEntity.list[0].nameTag) dataGamertag.map(function(gamertag, index) {
        leaderboard.push({ gamertag, score: dataScore[index] });
    });
    leaderboard = [...new Map(leaderboard.map(item => [item['gamertag'], item])).values()];

    getPlayers().forEach(player => {
        const data = getScore({ objective }, { entityRequirements: `[type=player,name="${player}"]`});
        if(data) onlineLeaderboard.push({ gamertag: player, score: data[0] });
    });

    for(let i = 0; i < onlineLeaderboard.length; i++) {
        const objIndex = leaderboard.findIndex(obj => obj.gamertag === onlineLeaderboard[i].gamertag);
        if(objIndex !== -1) leaderboard.splice(objIndex, 1);
        leaderboard.push(onlineLeaderboard[i]);
    };

    leaderboard.sort((a, b) => b.score - a.score);
    let leaderboardString = `${leaderboardHeading}\n§r`, saveData = '';
    for(let i = 0; i < displayLength && i < leaderboard.length; i++) {
        saveData.replace(new RegExp(`\\$\\(${objective}-objective{gamertag: ${leaderboard[i].gamertag}, score: ${leaderboard[i].score}}\\)`, 'g'), '')
        leaderboardString += `${leaderboardLayout.replace(/\$\(RANK\)/g, i + 1).replace(/\$\(GAMERTAG\)/g, leaderboard[i].gamertag).replace(/\$\(SCORE\)/g, compressScore ? compressNum(leaderboard[i].score) : formatScore ? leaderboard[i].score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : leaderboard[i].score)}§r\n`;
        saveData += `$(${objective}-objective{gamertag: ${leaderboard[i].gamertag}, score: ${leaderboard[i].score}}) `;
    };
    saveData = saveData ? `§${saveData.replace(/\s*$/, '').split('').join('§')}` : '';

    getEntity.list[0].nameTag = `${leaderboardString}${saveData}`;
};

/**
 * @function mcFunction() - Ability to make a command conditional! Put a '%' before your command. This will make it so the command would only execute only IF the command before it executed successfully!
 * @param {array} cmdArray - Array of command you want to execute 
 * @returns object
 */
function mcFunction(cmdArray) {
    const conditionalRegex = /^%/;
    if(conditionalRegex.test(cmdArray[0])) return runCommand(`say : §cFirst command in the Array §lCANNOT§r§c be Conditional`);
    let success = true;
    for(let i = 0; i < cmdArray.length; i++) {
        const data = runCommand(cmdArray[i].replace(conditionalRegex, ''));
        if(data.error && conditionalRegex.test(cmdArray[i + 1])) {
            i++;
            success = false;
        };
    };
    return { error: success };
};

export { rainbowText, displayRank, writeLeaderboard, mcFunction };
