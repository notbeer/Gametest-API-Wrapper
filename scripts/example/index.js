import './commands/import-commands.js';
//Event Example
/*
import { Server } from '../library/Minecraft.js';
import { displayRank } from '../library/miscellaneous/chatrank.js';
import { configuration } from '../library/build/configurations.js';

Server.on('ready', data => {
    Server.broadcast(`World has been loaded in ${data.loadTime} ticks!`);
});

//This is how you would do the chat ranks
Server.on('beforeMessage', data => {
    if(data.message.startsWith(configuration.prefix)) return;
    displayRank(data);
});
*/
//Leaderboard example
/*
import { writeLeaderboard } from '../library/miscellaneous/leaderboard.js';

writeLeaderboard([0, 5, 0], ['objective name'], 10,
    {
        heading: "Leaderboard heading", //This is your leaderboard heading
        layout: "§e#§f$(RANK) §e$(GAMERTAG) §f- §a$§c$(SCORE)" //Custom displaying layout
    },
    {
        compressScore: true //Compressing the score
    }
);
*/ 
