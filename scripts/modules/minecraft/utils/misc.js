import * as Minecraft from 'Minecraft';
import { compressNum } from './formatter.js';
import { runCommand } from './others.js';

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
    return runCommand(`tellraw @a {"rawtext":[{"text":"[${allRanks.join(', ').trim()}§r] <${chatmsg.sender.name}> ${chatmsg.message.replace(/"/g, '\\"')}"}]}`);
};

/**
 * @function writeLeaderboard() - Display a floating text of the top players on a scoreboard. For this leaderboard to display highest ranking players, the players must join the game while this function is running.
 * @param {string} floatingTextIdentifier - The identifier of your floating text. This entity will display your leaderboard
 * @param {string} leaderboardEntity - You will need a entity right where you want to summon the leaderboard. Pass down the name of your entity in this parameter
 * @param {string} objective - The scoreboard objective you want to display the players from
 * @param {number} displayLength - Amount of players you would display in the leaderboard
 * @param {string} leaderboardHeading - Text you want to display on top of the leaderboard
 * @param {string} leaderboardLayout - The way players ranking, gamertag, and score will be displayed. Example: "§e#$(RANK) §7$(GAMERTAG) §r- §e$(SCORE)". The $(RANK) part will display the users rank in the scoreboard. $(GAMERTAG) will display that users GamerTag. And last of all $(SCORE) will display that users score in that scoreboard. It would look like this while being displayed, example: §e#1 §7TestUser1234 §r- §e$6969696
 * @param {boolean} compressScore - This will display in text in thousands, millions and etc... For ex: "1400 -> "1.4k", "1000000" -> "1M", etc...
 * @param {boolean} formatScore - Will format your score. For ex: "1400" -> "1,400", "1000000" -> "1,000,000", etc...
 * @example writeLeaderboard({ floatingTextIdentifier: 'notbeer:floating_text', leaderboardEntity: 'Test Leaderboard', objective: 'money', displayLength: 10 }, { leaderboardHeading: 'Money Leaderboard\nTop players with the most Money\n§r\n', leaderboardLayout: '§e#$(RANK) §b$(GAMERTAG) §f- §a$§c$(SCORE)' }, { compressScore: true });
 */
function writeLeaderboard({ floatingTextIdentifier, leaderboardEntity, objective, displayLength }, { leaderboardHeading, leaderboardLayout } = {}, { compressScore, formatScore } = {}) {
    leaderboardHeading ? null : leaderboardHeading = `${objective.toUpperCase()} LEADERBOARD`;
    leaderboardLayout ? null : leaderboardLayout = '§e#$(RANK) §7$(GAMERTAG) §r- §e$(SCORE)';

    let dataGamertag, dataScore, leaderboard = [], onlineLeaderboard = [];
    try {
        const data = runCommand(`testfor @e[type=${floatingTextIdentifier}]`).result.statusMessage.replace(/\n|§/g, '');
        dataGamertag = data.match(new RegExp(`(?<=\\$\\(${objective}-objective{gamertag: ).+?(?=, score: (-\\d+|\\d+)}\\))`, 'g'));
        dataScore = data.match(new RegExp(`(?<=\\$\\(${objective}-objective{gamertag: \\D.*, score: ).+?(?=}\\))`, 'g'));
    } catch(err) {};
    
    if(dataGamertag) dataGamertag.map(function(gamertag, index) {
        leaderboard.push({ gamertag, score: dataScore[index] });
    });
    leaderboard = [...new Map(leaderboard.map(item => [item['gamertag'], item])).values()];

    Minecraft.World.getPlayers().forEach(player => {
        const data = runCommand(`scoreboard players add @a[name="${player.name}"] ${objective} 0`).result;
        const score = data.statusMessage.match(new RegExp(`(?<=Added (-\\d+|\\d+) to \\[${objective}\\] for ${player.name} \\(now ).+?(?=\\))`, 'g'));
        onlineLeaderboard.push({ gamertag: player.name, score });
    });

    for(let i = 0; i < onlineLeaderboard.length; i++) {
        const objIndex = leaderboard.findIndex(obj => obj.gamertag === onlineLeaderboard[i].gamertag);
        if(objIndex !== -1) leaderboard.splice(objIndex, 1);
        leaderboard.push(onlineLeaderboard[i]);
    };

    leaderboard.sort((a, b) => b.score - a.score);
    let leaderboardString = `${leaderboardHeading}\n§r`, saveData = '';
    for(let i = 0; i < displayLength && i < leaderboard.length; i++) {
        leaderboardString += `${leaderboardLayout.replace(/\$\(RANK\)/g, i + 1).replace(/\$\(GAMERTAG\)/g, leaderboard[i].gamertag).replace(/\$\(SCORE\)/g, compressScore ? compressNum(leaderboard[i].score) : formatScore ? leaderboard[i].score.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : leaderboard[i].score)}§r\n`;
        saveData += `$(${objective}-objective{gamertag: ${leaderboard[i].gamertag}, score: ${leaderboard[i].score}}) `;
    };
    saveData = saveData ? `§${saveData.replace(/\s*$/, '').split('').join('§')}` : '';

    runCommand(`execute @e[type=!player,name="${leaderboardEntity}"] ~~~ tp @e[type=${floatingTextIdentifier},dy=999999999] 999999999 999999999 999999999`);
    runCommand(`execute @e[type=!player,name="${leaderboardEntity}"] ~~~ summon ${floatingTextIdentifier} "${leaderboardString}${saveData}" ~~1~`)
};

export { rainbowText, displayRank, writeLeaderboard };