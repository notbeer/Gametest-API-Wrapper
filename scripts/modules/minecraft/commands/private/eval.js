import { runCommand } from "../../utils/others.js";

var commandInfo = {
    ownerOnly: true,
    cancelMessage: true,
    description: 'To use this command give yourself tag "OWNER"',
    usage: [
        'eval <command>'
    ]
};
/**
 * Explanation of the parameters that are being passed in the 'execute' function
 * @param {Object} chatmsg - This is the object that is passed by the event listening for messages being sent in chat
 * @param {Array} args - This collectes all the message that comes after the prefix and the command name in a array, which is split by an 'space'
 * @param {Module} Minecraft - This is the module Minecraft, which holds all the important classes. More information at: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/minecraft
 */
function execute(chatmsg, args, Minecraft) {
    const command = args.join(' ');
    if(!command) return runCommand(`tellraw "${chatmsg.sender.name}" {"rawtext":[{"text":"§cPlease type a command to execute!"}]}`);
    const data = runCommand(`say : §a${JSON.stringify(runCommand(command))}`);
    if(data.error) return runCommand(`tellraw "${chatmsg.sender.name}" {"rawtext":[{"text":"§c${JSON.stringify(runCommand(command))}"}]}`);
};

export { commandInfo, execute };