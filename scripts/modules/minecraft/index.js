import * as Minecraft from 'Minecraft'; //Import Module Minecraft from the game
import * as allCommands from './commands/export.js'; //Import all the commands 
import { rainbowText } from './utils/misc/rainbowText.js'; //Import the function for giving text rainbow effect

var config = {
    commandPrefix: "+" //Prefix used to execute the custom commands
};

Minecraft.World.events.beforeChat.subscribe(chatmsg => { //Event to listen for message being sent in chat
    if(!chatmsg.message.startsWith(config.commandPrefix)) return; //If message doesn't start with the prefix don't execute any of the stuff below
    const args = chatmsg.message.slice(config.commandPrefix.length).trim().split(/ +/); //args just splits the message by "space" so you can take different inputs of the user message
    const commandName = args.shift().toLowerCase();//The first index of the array from variable "args" will be stored in commandName
    const command = allCommands[commandName]; //We look if "commandName" can be found inside "allCommands"

    if(!command) return Minecraft.Commands.run(`tellraw "${chatmsg.sender.name}" {"rawtext":[{"text":"§c"},{"translate":"commands.generic.unknown", "with": ["§f${commandName}§c"]}]}`); //If command doesn't exist we return the default error the game throws when a non existant command was typed in chat-

    if(command.commandInfo.cancelMessage) chatmsg.canceled = true; //This goes to the command file and looks if variable "commandInfo" has a propert "cancelMessage" set to true. If it does it will make sure the message the user sent in chat never actually gets displayed in chat
    if(command.commandInfo.ownerOnly && !findTagOnPlayer(chatmsg, 'OWNER')) return Minecraft.Commands.run(`tellraw "${chatmsg.sender.name}" {"rawtext":[{"text":"§c"},{"translate":"commands.generic.unknown", "with": ["§f${commandName}§c"]}]}`); //This goes to the command file and looks if variable "commandInfo" has a propert "ownerOnly" set to true. If it is it check if the user who sent the message has tag 'OWNER' it lets them execute the command. This system is used for command 'eval' as an example-
    
    try {
        command.execute(chatmsg, args, Minecraft); //Now try to execute the command file
    } catch (error) {
        Minecraft.Commands.run(`tellraw "${chatmsg.sender.name}" {"rawtext":[{"text":"§a${chatmsg.sender.name}§f, An error has occured, while executing the command...\n§c${error}"}]}`); //This will throw an error in the game chat if it enocounters an error...
    };
});

//I seperated these stuff to make stuff more organized
Minecraft.World.events.beforeChat.subscribe(chatmsg => { //Another chat listening event
    if(chatmsg.message.startsWith(config.commandPrefix)) return; //If they are trying to execute a custom command don't execute the stuff below
    rainbowText(chatmsg); //This is the rainbow function it will only execute if the user has the tag 'rainbowText'. You can give yourself the tag by typing in chat "/tag @s add rainbowText"
});

export { config }; //Export the config variable so other files have access to the prefix and other property from the variable
