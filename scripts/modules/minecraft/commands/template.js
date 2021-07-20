var commandInfo = { //This variable holds the command information for help command to display. Such as the description and usage
    cancelMessage: Boolean,
    description: String,
    usage: Array
};
/**
 * Explanation of the parameters that are being passed in the 'execute' function
 * @param {Object} chatmsg - This is the object that is passed by the event listening for messages being sent in chat
 * @param {Array} args - This collectes all the message that comes after the prefix and the command name in a array, which is split by an 'space'
 * @param {Module} Minecraft - This is the module Minecraft, which holds all the important classes. More information at: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/minecraft
 */
function execute(chatmsg, args, Minecraft) {
    //Code here
};

export { commandInfo, execute };
