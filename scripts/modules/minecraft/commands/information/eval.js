var commandInfo = {
    ownerOnly: true,
    cancelMessage: true,
    description: 'Run a InGame command and get information about that command! To execute this command make sure your Gametag is in the variable config property ownerGamertags inside file index file. This command can be dangerous at the wrong hands!',
    usage: [
        'eval <command>'
    ]
};
/**
 * Explanation of the parameters that are being passed in the 'execute' function
 * @param {Object} chatmsg This is the object that is passed by the event listening for messages being sent in chat
 * @param {Array} args This collectes all the message that comes after the prefix and the command name in a array, which is split by an 'space'
 * @param {Module} Minecraft This is the module Minecraft, which holds all the important classes. More information at: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/minecraft
 */
function execute(chatmsg, args, Minecraft) {
    const command = args.join(' ');
    try {
        Minecraft.Commands.run(`say ${JSON.stringify(Minecraft.Commands.run(command))}`);
    } catch (error) {
        Minecraft.Commands.run(`tellraw "${chatmsg.sender.name}" {"rawtext":[{"text":"§a${JSON.stringify(Minecraft.Commands.run(command))}"}]}`);
    };
};

export { commandInfo, execute };