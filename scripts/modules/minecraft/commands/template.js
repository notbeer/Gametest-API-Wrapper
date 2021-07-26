import Command from "./../lib/commandHandler.js"; //You must import this in every custom command file to register your command in game. Make sure your path is correct. It may change depending on the file-

const registerInformation = { //You must fill in these informations to register the command
    private: Boolean, //Optional - If true the command won't be displayed upon "help" command execution
    cancelMessage: Boolean, //Optional - If true players text won't be sent in chat when they execute the command
    ownerOnly: Boolean, //Optional - If set to true player requires the "OWNER" tag to execute the command
    name: String, //Required - The command name
    aliases: Array, //Optional - More command names. This basically gives you the ability to execute the same command under multiple names
    description: String, //Optional - Description on what the command does
    usage: String, //Optional - Type in the parameter options of the commands if there are any
    example: Array //Optional - Few examples on how to use the command
};

Command.register(registerInformation, (chatmsg, args) => {
    //Your code
});