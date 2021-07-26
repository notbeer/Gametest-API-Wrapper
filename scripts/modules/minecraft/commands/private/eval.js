import Command from "../../lib/commandHandler.js";
import { runCommand } from "../../lib/utils/others.js";

const registerInformation = {
    private: true,
    cancelMessage: true,
    ownerOnly: true,
    name: 'eval',
    aliases: ['execute'],
    description: 'Execute a command in game and get the data!',
    usage: 'eval <command>',
    example: ['eval say hi']
};

Command.register(registerInformation, (chatmsg, args) => {
    const command = args.join(' ');
    if(!command) return runCommand(`tellraw "${chatmsg.sender.name}" {"rawtext":[{"text":"§cPlease type a command to execute!"}]}`);
    const data = runCommand(`say : §a${JSON.stringify(runCommand(command))}`);
    if(data.error) return runCommand(`tellraw "${chatmsg.sender.name}" {"rawtext":[{"text":"§c${JSON.stringify(runCommand(command))}"}]}`);
});