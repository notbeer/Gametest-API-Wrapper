var commandInfo = { //This variable holds the command information for help command to display. Such as rhe description and usage
    description: 'Pong! This is a test-',
    usage: ['ping']
};
/**
 * Explanation of the parameters that are being passed in the 'execute' function
 * @param {Object} chatmsg This is the object that is passed by the event listening for messages being sent in chat
 * @param {Array} args This collectes all the message that comes after the prefix and the command name in a array, which is split by an 'space'
 * @param {Module} Minecraft This is the module Minecraft, which holds all the important classes. More information at: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/minecraft
 */
function execute(chatmsg, args, Minecraft) {
    Minecraft.Commands.run('say pong!'); //Runs the command 'say' broadcasting 'pong!'
};

export { commandInfo, execute }; //Export all these so it can be later exported as a identifier from the file 'export.js'
