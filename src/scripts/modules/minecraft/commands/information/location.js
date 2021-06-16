var commandInfo = {
    cancelMessage: true,
    description: 'Get your current location',
    usage: ['location']
};
/**
 * @param {Object} chatmsg
 * @param {Array} args 
 * @param {Module} Minecraft
 */
function execute(chatmsg, args, Minecraft) {
    Minecraft.Commands.run(`tellraw "${chatmsg.sender.name}" {"rawtext":[{"text":"Your Current Position is: ${Math.trunc(chatmsg.sender.location.x)}, ${Math.trunc(chatmsg.sender.location.y)}, ${Math.trunc(chatmsg.sender.location.z)}"}]}`);
};

export { commandInfo, execute };
