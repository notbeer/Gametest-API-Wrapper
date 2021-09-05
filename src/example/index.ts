import { Server } from "../library/Minecraft.js";
import './commands/import-commands.js';

Server.on('ready', data => {
    Server.broadcast(`Server has been loaded in ${data.loadTime} ticks`);
});