import { Server } from "../../../library/Minecraft.js";
import { db } from "./ban.js";
const findPlayerRegex = /(?<=^")([^"]+)(?=")/;
const registerInformation = {
    //private: true, //Uncomment this and the command will not be shown to players when they type 'help' command
    cancelMessage: true,
    name: 'unban',
    description: 'Unban an banned player',
    usage: '"<player>"'
};
Server.command.register(registerInformation, (chatmsg, args) => {
    if (!Server.player.hasTag('staff', chatmsg.sender.nameTag))
        return Server.broadcast("§cYou don't have the permission to execute this command!", chatmsg.sender.nameTag);
    if (!args.join(' ').match(findPlayerRegex))
        return Server.broadcast('§cError: Type the player name in quotations for the first argument', chatmsg.sender.nameTag);
    const player = args.join(' ').match(/(?<=^")([^"]+)(?=")/)[0];
    if (player === chatmsg.sender.nameTag)
        return Server.broadcast(`§cError: You are not even banned...`, chatmsg.sender.nameTag);
    if (!db.has(player))
        return Server.broadcast(`§cError: No player with the name §f"§a${player}§f" §cis banned`, chatmsg.sender.nameTag);
    db.delete(player);
    return Server.broadcast(`§a${player} §rhas been unbanned`, chatmsg.sender.nameTag);
});
