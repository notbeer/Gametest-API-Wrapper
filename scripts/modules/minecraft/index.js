//Importing stuff that is used in this file
import * as Minecraft from 'Minecraft';
import * as allCommands from './commands/export.js';
import * as misc from './utils/misc.js';
import * as utils from './utils/others.js';

var config = { 
    commandPrefix: "+" //Our custom command prefix
};

Minecraft.World.events.beforeChat.subscribe(chatmsg => { //Event to listen for message being sent in chat
    if(!chatmsg.message.startsWith(config.commandPrefix)) return; //If message doesn't start with the prefix don't execute any of the stuff below

    const args = chatmsg.message.slice(config.commandPrefix.length).trim().split(/ +/); //args just splits the message by "space" so you can take different inputs of the user message
    const commandName = args.shift().toLowerCase(); //The first index of the array from variable "args" will be stored in commandName
    const command = allCommands[commandName]; //We look if "commandName" can be found inside "allCommands"
    
    if(!command || (command.commandInfo.ownerOnly && !utils.findTag({ entityRequirements: `[type=player,name="${chatmsg.sender.name}"]` }, { searchTag: 'OWNER'}))) return utils.runCommand(`tellraw "${chatmsg.sender.name}" {"rawtext":[{"text":"§c"},{"translate":"commands.generic.unknown", "with": ["§f${commandName}§c"]}]}`); //Throw error if command doesn't exist OR the command is avaiable to selected players and the player who executed the command isn't one of the selected

    if(command.commandInfo.cancelMessage) chatmsg.canceled = true; //This goes to the command file and looks if variable "commandInfo" has a propert "cancelMessage" set to true. If it does it will make sure the message the user sent in chat never actually gets displayed in chat
    
    try { //Try to execute the command file
        command.execute(chatmsg, args, Minecraft);
    } catch (error) {
        utils.runCommand(`say : §c${error}`);
    };
});

//I seperated these stuff to make stuff more organized
Minecraft.World.events.beforeChat.subscribe(chatmsg => { //Another chat listening event
    if(chatmsg.message.startsWith(config.commandPrefix)) return; //If they are trying to execute a custom command don't execute the stuff below
    if(utils.findTag({ entityRequirements: `[type=player,name="${chatmsg.sender.name}"]` }, { searchTag: 'rainbowText'})) chatmsg.message = misc.rainbowText(chatmsg.message); //Look for the tag 'rainbowText' on the player who executed the command, if they have the tag make their chat text to rainbow
    misc.displayRank(chatmsg); //This will check if they have a rank, if they do add a rank to their text in chat
});

//!This will execute a function inide it which will be "setTickInterval" only once when the server side is loaded
let tickExeOnce = 0;
Minecraft.World.events.tick.subscribe(() => { //Run stuff inside every world tick
    if(tickExeOnce >= 1) return;
    utils.runCommand(`tellraw @a {"rawtext":[{"text":"§eGameTest FrameWork API Starter Pack§r\n§bCredit: §rThis pack was made by §anotbeer\n§9Discord: §fnotbeer#9204\n§aXbox Live: §fColoringEmy86\n\n§dType §a${config.commandPrefix}help §dfor more information!"}]}`);
    //utils.setTickInterval(startupFunctions, 20);
    tickExeOnce++;
});

//An example on how you can create a leaderboard. Check out the function parameter comments for §a\'writeLeaderboard\' §din the file §autils/misc.js §dfor more information on how to get it setup.
/*
function startupFunctions() {
    misc.writeLeaderboard(
        { 
            floatingTextIdentifier: 'notbeer:floating_text',
            leaderboardEntity: 'Money Leaderboard',
            objective: 'money',
            displayLength: 10
        },
        {
            leaderboardHeading: 'Money Leaderboard\nTop players with the most Money\n§r\n',
            leaderboardLayout: '§e#$(RANK) §b$(GAMERTAG) §f- §a$§c$(SCORE)'
        },
        {
            compressScore: true
        }
    );
};
*/

export { config };
