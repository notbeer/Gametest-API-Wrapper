var commandInfo = {
    cancelMessage: true,
    description: 'Get your current location',
    usage: ['location']
};
/**
 * Explanation of the parameters that are being passed in the 'execute' function
 * @param {Object} chatmsg This is the object that is passed by the event listening for messages being sent in chat
 * @param {Array} args This collectes all the message that comes after the prefix and the command name in a array, which is split by an 'space'
 * @param {Module} Minecraft This is the module Minecraft, which holds all the important classes. More information at: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/minecraft
 */
function execute(chatmsg, args, Minecraft) {
    Minecraft.Commands.run(`tellraw "${chatmsg.sender.name}" {"rawtext":[{"text":"Your Current Position is: ${Math.trunc(chatmsg.sender.location.x)}, ${Math.trunc(chatmsg.sender.location.y)}, ${Math.trunc(chatmsg.sender.location.z)}"}]}`);
};

export { commandInfo, execute };
