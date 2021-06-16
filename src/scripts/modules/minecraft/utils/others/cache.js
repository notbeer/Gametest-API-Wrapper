import * as Minecraft from 'Minecraft';

export function findTagOnPlayer(chatmsg, tag) {
    try { //Just incase if it breaks somehow
        const data = Minecraft.Commands.run(`tag ${chatmsg.sender.name} list`); //Get the data that is being sent out after executing tag list command
        const parsedData = data.statusMessage.replace(/(:(.§a))/g, ': ').replace(/(§r, §a)/g, ' '); //Replace all color codes cuz it will mess up the tag detecting regex
        const tagRegex = new RegExp(`:(.+)\\b${tag}\\b`, 'g'); //Regex built to test if tags exists in the parsed data
        if(parsedData.match(tagRegex)) return true; //Check if the parsed data matches with regex if so send true
    } catch(error) { //catch error
        Minecraft.Commands.run(`tellraw "${chatmsg.sender.name}" {"rawtext":[{"text":"§a${chatmsg.sender.name}§f, An error has occured, while trying to parse the player tag data...\n§c${error}"}]}`)
    };
};