var commandInfo = {
    ownerOnly: true,
    cancelMessage: true,
    description: 'Run a InGame command and get information about that command! To execute this command make sure your Gametag is in the variable config property ownerGamertags inside file index file. This command can be dangerous at the wrong hands!',
    usage: [
        'eval <command>'
    ]
};
/**
 * @param {Object} chatmsg
 * @param {Array} args 
 * @param {Module} Minecraft
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