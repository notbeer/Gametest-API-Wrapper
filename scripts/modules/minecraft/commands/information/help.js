import * as allCommands from '../export.js';
import { config } from './../../index.js';
import { runCommand } from '../../utils/others.js';

var commandInfo = {
    cancelMessage: true,
    description: 'Get list of all the commands available or input an argument to get information about that specific command',
    usage: [
        'help',
        'help [command name]'
    ]
};
/**
 * Explanation of the parameters that are being passed in the 'execute' function
 * @param {Object} chatmsg - This is the object that is passed by the event listening for messages being sent in chat
 * @param {Array} args - This collectes all the message that comes after the prefix and the command name in a array, which is split by an 'space'
 * @param {Module} Minecraft - This is the module Minecraft, which holds all the important classes. More information at: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/minecraft
 */
function execute(chatmsg, args, Minecraft) {
    const prefix = config.commandPrefix;
    const helpCmdList = ['help', 'eval', 'home'];
    const features = [
        '§f- §dSimple Command Handler and Custom Chat Commands - You can use AND make custom chat commands really easily with this pack.',
        '§f- §dCustom Ranks - You can set custom ranks in chat next to your name! So, when you type in chat your rank will be displayed next to your name. To test this feature out for yourself execute the command: §a/tag @s add $(ChatRank{Rank-Name: OWNER})§r',
        '§f- §dRainbow Text - Simply give yourself the tag \'rainbowText\' by executing the command §a/tag @s add rainbowText§d and then you type in chat your text should be all colorful!',
        '§f- §dFloating Leaderboard - You can display the highest ranked player in a scoreboard using a floating text entity. Check out the function parameter comments for §a\'writeLeaderboard\' §din the file §autils/misc.js §dfor more information on how to get it setup.',
        '§f- §d Useful Utils - I have also added a lot of useful utils. I will add more in the near future!'
    ];

    if(!args[0]) return runCommand(`tellraw "${chatmsg.sender.name}" {"rawtext":[{"text":"§eGameTest FrameWork API Starter Pack§r\n§bCredit: §rThis pack was made by §anotbeer\n§9Discord: §fnotbeer#9204\n§aXbox Live: §fColoringEmy86\n\n§eFeatures: \n${features.join('\n')}\n\n§bCustom Command prefix§f: §a${prefix}\n§bCustom Command List: §l§c${helpCmdList.join(', ')}"}]}`);
    
    let cmdList = allCommands[args[0]];
    if(!cmdList) return runCommand(`tellraw "${chatmsg.sender.name}" {"rawtext":[{"text":"§cThat's not a valid command!"}]}`);
    
    cmdList = cmdList.commandInfo;
    let infoArr = []
    if(cmdList.description) infoArr.push(`§eDescription: §f${cmdList.description}`);
    if(cmdList.usage.length) infoArr.push(`§eUsage: \n§f${cmdList.usage.join('\n')}`);

    runCommand(`tellraw "${chatmsg.sender.name}" {"rawtext":[{"text":"§eCommand: §a${prefix}§f${args[0]}\n${infoArr.join('\n')}"}]}`);
};

export { commandInfo, execute };