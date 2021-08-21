import { World } from 'Minecraft';
import { config } from '../../../../../minecraft/index.js';

import CommandEmitter from "./commandEmitter.js";
/**
 * @type {import('../../../typings/classes/CommandEmitter').CommandEmitter}
 */
const Command = new CommandEmitter();

World.events.beforeChat.subscribe(data => {
    if(!data.message.startsWith(config.commandPrefix)) return;

    const args = data.message.slice(config.commandPrefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    Command.emit(commandName, data, args);
});

export default Command;