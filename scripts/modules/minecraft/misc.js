import MCEvent from "./lib/eventHandler.js";

import { findTag } from './lib/utils/others.js';
import { rainbowText, displayRank } from './lib/utils/misc.js';
import { config } from './index.js';

MCEvent.on('beforeMessage', data => {
    if(data.message.startsWith(config.commandPrefix)) return;
    if(findTag({ entityRequirements: `[type=player,name="${data.sender.name}"]` }, { searchTag: 'rainbowText'})) data.message = rainbowText(data.message);
    displayRank(data);
});

//Leaderboard stuff below change parameters of the function, if needed-
//Also make sure to uncomment the code below for it to work-
/*
import { setTickInterval } from './lib/utils/others.js';
import { writeLeaderboard } from './lib/utils/misc.js';

setTickInterval(() => {
    writeLeaderboard([0, 6, 0], 'money',
        {
            displayLength: 10,
            leaderboardHeading: 'Money Leaderboard\nTop players with the most Money\n§r\n',
            leaderboardLayout: '§e#$(RANK) §b$(GAMERTAG) §f- §a$§c$(SCORE)'
        },
        {
            compressScore: true
        }
    );
}, 100); //Stuff inside will execute every 5 seconds
*/
