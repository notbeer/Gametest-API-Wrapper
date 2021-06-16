import * as allCommands from '../export.js';
import { config } from './../../index.js';

var commandInfo = {
    cancelMessage: true,
    description: 'Get list of all the commands available or input an argument to get information about that specific command',
    usage: [
        'help',
        'help [command name]'
    ]
};
/**
 * @param {Object} chatmsg
 * @param {Array} args 
 * @param {Module} Minecraft
 */
function execute(chatmsg, args, Minecraft) {
    const prefix = config.commandPrefix;
    if(!args[0]) return Minecraft.Commands.run(`tellraw "${chatmsg.sender.name}" {"rawtext":[{"text":"I have added a Rainbow Text in chat and Custom Commands.\nTo give your text Rainbow Effect in chat give yourself the tag 'rainbowText' (/tag @s add rainbowText)\nCustom Command prefix is: §a${prefix}§f\nHere are all the custom commands available...\n§atictactoe, eval, help, location, ping\n\n§eThis pack was created by notbeer!\n§9Discord: §fnotbeer#9204\n§aXbox Live: §fColoringEmy86"}]}`);
    let cmdList = allCommands[args[0]];
    if(!cmdList) return Minecraft.Commands.run(`tellraw "${chatmsg.sender.name}" {"rawtext":[{"text":"§cThat's not a valid command!"}]}`);
    cmdList = cmdList.commandInfo;
    Minecraft.Commands.run(`tellraw "${chatmsg.sender.name}" {"rawtext":[{"text":"§eCommand: §a${prefix}§f${args[0]}\n§eDescription: §f${cmdList.description}\n§aUsage: \n§a${prefix}§f${cmdList.usage.join(`\n§a${prefix}§f`)}"}]}`);
};

export { commandInfo, execute };
