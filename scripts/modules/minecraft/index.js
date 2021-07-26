export const config = {
    commandPrefix: '+'
};
import './lib/commandHandler.js';
import './misc.js';
import './commands/import.js';

//Eh well you can delete the stuff at the bottom whenever you want lol
//This will just execute once the world has loaded
import { setTickTimeout, runCommand } from './lib/utils/others.js';
const features = [
    '§f- §dSimple Command Handler and Custom Chat Commands - You can use AND make custom chat commands really easily with this pack.',
    '§f- §dCustom Ranks - You can set custom ranks in chat next to your name! So, when you type in chat your rank will be displayed next to your name. To test this feature out for yourself execute the command: §a/tag @s add $(ChatRank{Rank-Name: OWNER})§r',
    '§f- §dRainbow Text - Simply give yourself the tag \'rainbowText\' by executing the command §a/tag @s add rainbowText§d and then you type in chat your text should be all colorful!',
    '§f- §dFloating Leaderboard - You can display the highest ranked player in a scoreboard using a floating text entity. Check out the function parameter comments for §a\'writeLeaderboard\' §din the file §autils/misc.js §dfor more information on how to get it setup.',
    '§f- §d Useful Utils - I have also added a lot of useful utils. I will add more in the near future!'
];

setTickTimeout(() => {
    runCommand(`tellraw @a {"rawtext":[{"text":"§eGameTest FrameWork API Starter Pack§r\n§bCredit: §rThis pack was made by §anotbeer\n§9Discord: §fnotbeer#9204\n§aXbox Live: §fColoringEmy86\n\n§eFeatures: \n${features.join('\n')}"}]}`);
}, 100);

