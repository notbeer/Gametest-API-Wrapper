import { Command, Server, Entity, Database } from "../../../library/Minecraft.js";

const db = new Database('bannedPlayers');

const findPlayerRegex = /(?<=^")([^"]+)(?=")/;

const registerInformation = {
    //private: true, //Uncomment this and the command will not be shown to players when they type 'help' command
    cancelMessage: true,
    name: 'unban',
    description: 'Unban an banned player',
    usage: '"<player>"'
};

Command.register(registerInformation, (chatmsg, args) => {
    if(!Entity.findTag('staff', `[type=player,name="${chatmsg.sender.nameTag}"]`)) return Server.broadcast("§cYou don't have the permission to execute this command!", chatmsg.sender.nameTag);
    
    if(!args.join(' ').match(findPlayerRegex)) return Server.broadcast('§cError: Type the player name in quotations for the first argument', chatmsg.sender.nameTag);
    const player = args.join(' ').match(/(?<=^")([^"]+)(?=")/)[0];
    if(player === chatmsg.sender.nameTag) return Server.broadcast(`§cError: You are not even banned...`, chatmsg.sender.nameTag);
    if(!db.hasKey(player) || !db.getKey(player)?.bannedPlayer) return Server.broadcast(`§cError: No player with the name §f"§a${player}§f" §cis banned`, chatmsg.sender.nameTag);

    db.extractKey(player);
    return Server.broadcast(`§a${player} §rhas been unbanned`, chatmsg.sender.nameTag);
});