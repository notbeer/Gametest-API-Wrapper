import { config } from '../index.js';

import MCEvent from "./eventHandler.js";
import commandBuilder from "./classes/commandBuilder.js";

const Command = new commandBuilder();

MCEvent.on('beforeMessage', data => {
    if(!data.message.startsWith(config.commandPrefix)) return;

    const args = data.message.slice(config.commandPrefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    Command.emit(commandName, data, args);
});

export default Command;