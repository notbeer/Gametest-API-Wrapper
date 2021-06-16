var commandInfo = { //This variable holds the command information for help command to display. Such as rhe description and usage
    description: 'Pong! This is a test-',
    usage: ['ping']
};
/**
 * @param {Object} chatmsg
 * @param {Array} args 
 * @param {Module} Minecraft
 */
function execute(chatmsg, args, Minecraft) {
    Minecraft.Commands.run('say pong!'); //Runs the command 'say' broadcasting 'pong!'
};

export { commandInfo, execute }; //Export all these so it can be later exported as a identifier from the file 'export.js'
