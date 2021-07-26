import { config } from "../../index.js";
import Command from "../../lib/commandHandler.js";
import { runCommand } from "../../lib/utils/others.js";

const registerInformation = {
    cancelMessage: true,
    name: 'help',
    description: 'Get list of all the commands available or input an argument to get information about that specific command',
    usage: 'help [command name]',
    example: [
        'help',
        'help ping'
    ]
};

Command.register(registerInformation, (chatmsg, args) => {
    const cmdList = Command.getCommands();
    if(!args[0]) return runCommand(`tellraw "${chatmsg.sender.name}" {"rawtext":[{"text":"§bCustom Command prefix§f: §a${config.commandPrefix}\n§bType §a${config.commandPrefix}help §f[command name] §bfor more information on that command!\n§bCustom Command List: §l§c${cmdList.join(', ')}"}]}`);
    const cmdInfo = Command.getCommandRegistration(args[0]);
    if(!cmdInfo) return runCommand(`tellraw "${chatmsg.sender.name}" {"rawtext":[{"text":"§cThat's not a valid command!"}]}`);
    return runCommand(`tellraw "${chatmsg.sender.name}" {"rawtext":[{"text":"${cmdInfo}"}]}`);
});