import Command from "../../lib/commandHandler.js";
import { runCommand } from "../../lib/utils/others.js";

const registerInformation = {
    private: false,
    cancelMessage: true,
    ownerOnly: false,
    name: 'ping',
    aliases: ['Ping2'],
    description: 'This is a test command',
    example: ['ping']
};

Command.register(registerInformation, (chatmsg, args) => {
    runCommand(`say pong! [${chatmsg.message}]`);
});