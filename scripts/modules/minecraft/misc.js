import MCEvent from "./lib/eventHandler.js";

import { findTag } from './lib/utils/others.js';
import { rainbowText, displayRank } from './lib/utils/misc.js';
import { config } from './index.js';

MCEvent.on('beforeMessage', data => {
    if(data.message.startsWith(config.commandPrefix)) return;
    if(findTag({ entityRequirements: `[type=player,name="${data.sender.name}"]` }, { searchTag: 'rainbowText'})) data.message = rainbowText(data.message);
    displayRank(data);
});

