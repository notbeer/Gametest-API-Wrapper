import { config } from "../../index.js";
import { Command, Server } from "../../../library/Minecraft.js";

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
    if(!args[0]) return Server.broadcast(`§bCustom Command prefix§f: §a${config.commandPrefix}\n§bType §a${config.commandPrefix}help §f[command name] §bfor more information on that command!\n§bCustom Command List: §l§c${cmdList.join(', ')}`, chatmsg.sender.nameTag);
    const cmdInfo = Command.getCommandRegistration(args[0]);
    if(!cmdInfo) return Server.broadcast("§cI couldn't find the command...", chatmsg.sender.nameTag);
    let string = `\n§eCommand§f: §a${config.commandPrefix}§l§c${cmdInfo.name}§r\n`;
    if(cmdInfo.aliases) string += `§eAliases§f: §c${cmdInfo.aliases.join('§r, ')}§r\n`;
    if(cmdInfo.description) string += `§eDescription§f: ${cmdInfo.description}\n`;
    if(cmdInfo.usage) string += `§eUsage§f: §a${config.commandPrefix}§f${cmdInfo.name} ${cmdInfo.usage}\n`;
    if(cmdInfo.example) string += `§eExample§f: §a${config.commandPrefix}§f${cmdInfo.example.join(`\n${config.commandPrefix}§f`)}`;
    return Server.broadcast(string, chatmsg.sender.nameTag);
});