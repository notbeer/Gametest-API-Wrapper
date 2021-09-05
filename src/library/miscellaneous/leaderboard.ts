import { Entity } from '../build/classes/entityBuilder.js';
import { Player } from '../build/classes/playerBuilder.js';
import { compressNumber, formatNumber } from '../utils/formatter.js';

/**
 * Display a leaderboard on floating text of the top players on scoreboard(s). For this leaderboard to display highest ranking players, the players must join the game while this function is running.
 * @param {number} x The x position of your floating text entity
 * @param {number} y The y position of your floating text entity
 * @param {number} z The z position of your floating text entity
 * @param {Array<string>} objective The scoreboard objective you want to display the players from. Supports multiple objectives. All the scores from the objectives will be added together!
 * @param {number} displayLength Amount of players you would display in the leaderboard
 * @param {string} [leaderboardHeading] Text you want to display on top of the leaderboard
 * @param {string} [leaderboardLayout] The way players ranking, gamertag, and score will be displayed. Example: "§e#$(RANK) §7$(GAMERTAG) §r- §e$(SCORE)". The $(RANK) part will display the users rank in the scoreboard. $(GAMERTAG) will display that users GamerTag. And last of all $(SCORE) will display that users score in that scoreboard. It would look like this while being displayed, example: §e#1 §7TestUser1234 §r- §e$6969696
 * @param {boolean} [compressScore] This will display in text in thousands, millions and etc... For ex: "1400 -> "1.4k", "1000000" -> "1M", etc...
 * @param {boolean} [formatScore] Will format your score. For ex: "1400" -> "1,400", "1000000" -> "1,000,000", etc...
 * @example writeLeaderboard([0, 6, 0], 'money', { displayLength: 10, leaderboardHeading: 'Money Leaderboard\nTop players with the most Money\n§r\n', leaderboardLayout: '§e#$(RANK) §b$(GAMERTAG) §f- §a$§c$(SCORE)' }, { compressScore: true });
 */
export function writeLeaderboard([x, y, z]: [number, number, number], objective: Array<string>, displayLength: number, { leaderboardHeading, leaderboardLayout }: { leaderboardHeading?: string, leaderboardLayout?: string } = {}, { compressScore, formatScore }: { compressScore?: boolean, formatScore?: boolean } = {}): void {
    leaderboardHeading ? null : leaderboardHeading = `${objective[0].toUpperCase()} LEADERBOARD`;
    leaderboardLayout ? null : leaderboardLayout = '§e#$(RANK) §7$(GAMERTAG) §r- §e$(SCORE)';

    const getEntity = Entity.getAtPos([x, y, z], { ignoreType: ['minecraft:player'] });
    if(getEntity.error) return;
    const entityName = getEntity.list[0].nameTag.replace(/\n|§/g, '');
    let dataGamertag = entityName.match(/(?<=\$\(objective{gamertag: ).+?(?=, score: .*?}\))/g);
    let dataScore = entityName.match(/(?<=\$\(objective{gamertag: \D.*, score: ).+?(?=}\))/g);
    
    let leaderboard = [];
    if(dataGamertag && getEntity.list[0].nameTag) dataGamertag.map((gamertag: string, index: number) => {
        leaderboard.push({gamertag, score: dataScore[index].replace(/\D/g, '0')})
    });
    const onlinePlayers = Player.list();
    for(let i = 0; i < onlinePlayers.length; i++) {
        let score = 0;
        for(let j = 0; j < objective.length; j++)
            score += Entity.getScore(objective[j], `[type=player,name="${onlinePlayers[i]}"]`) || 0;
        const index = leaderboard.findIndex((obj => obj.gamertag === onlinePlayers[i]))
        if(index) leaderboard[index].score = score;
        else leaderboard.push({ gamertag: onlinePlayers[i], score });
    };
    leaderboard = [...new Map(leaderboard.map(item => [item['gamertag'], item])).values()];

    leaderboard.sort((a, b) => b.score - a.score);
    let leaderboardString = `${leaderboardHeading}\n§r`, saveData = '';
    for(let i = 0; i < displayLength && i < leaderboard.length; i++) {
        saveData.replace(new RegExp(`\\$\\(objective{gamertag: ${leaderboard[i].gamertag}, score: ${leaderboard[i].score}}\\)`, 'g'), '')
        leaderboardString += `${leaderboardLayout.replace(/\$\(RANK\)/g, `${i + 1}`).replace(/\$\(GAMERTAG\)/g, leaderboard[i].gamertag).replace(/\$\(SCORE\)/g, `${compressScore ? compressNumber(leaderboard[i].score) : formatScore ? formatNumber(leaderboard[i].score) : leaderboard[i].score}`)}§r\n`;
        saveData += `$(objective{gamertag: ${leaderboard[i].gamertag}, score: ${leaderboard[i].score}}) `;
    };
    saveData = saveData ? `§${saveData.replace(/\s*$/, '').split('').join('§')}` : '';
    getEntity.list[0].nameTag = `${leaderboardString}${saveData}`;
};
