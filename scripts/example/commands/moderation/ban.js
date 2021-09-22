import { Server, Database, MS } from "../../../library/Minecraft.js";
export const db = new Database('bannedPlayers');
const findPlayerRegex = /(?<=^")([^"]+)(?=")/;
const timeFormatRegex = /^\d+\.?\d*\s?((years*?|yrs*?)|(weeks*?)|(days*?)|(hours*?|hrs*?)|(minutes*?|mins*?)|(seconds*?|secs*?)|(milliseconds*?|msecs*?|ms)|[smhdwy])(?!\S)(?=\s?)/;
const registerInformation = {
    //private: true, //Uncomment this and the command will not be shown to players when they type 'help' command
    cancelMessage: true,
    name: 'ban',
    description: 'Simple ban command...',
    usage: '"<player>" [ban length] [reason]',
    example: [
        'ban "notbeer" 30 minutes Using foul language',
        'ban "notbeer" 10 hours Bullying player',
        'ban "notbeer" 1 day Spamming chat',
        'ban "notbeer" 4 weeks Hacking'
    ]
};
Server.command.register(registerInformation, (chatmsg, args) => {
    if (!Server.player.hasTag('staff', chatmsg.sender.nameTag))
        return Server.broadcast("§cYou don't have the permission to execute this command!", chatmsg.sender.nameTag);
    if (!args.join(' ').match(findPlayerRegex))
        return Server.broadcast('§cType the player name in quotations for the first argument', chatmsg.sender.nameTag);
    const player = args.join(' ').match(findPlayerRegex)[0];
    const foundPlayer = Server.player.find(player);
    if (!foundPlayer)
        return Server.broadcast(`§cCouldn't find player §f"§a${player}§f" §conline`, chatmsg.sender.nameTag);
    if (foundPlayer && player === chatmsg.sender.nameTag)
        return Server.broadcast(`§cYou cannot ban yourself`, chatmsg.sender.nameTag);
    if (Server.player.hasTag('staff', player))
        return Server.broadcast('§cYou may not ban a staff member!', chatmsg.sender.nameTag);
    if (db.has(player))
        return Server.broadcast(`§cPlayer §f"§a${player}§f" §cis already banned...`, chatmsg.sender.nameTag);
    let restArgs = args.join(' ').match(new RegExp(`(?<=^"${player}"\\s).+`));
    if (!restArgs || !restArgs[0].match(timeFormatRegex))
        return Server.broadcast(`§c${restArgs ? 'Invalid' : 'Missing'} ban length argument`, chatmsg.sender.nameTag);
    const time = MS(restArgs[0].match(timeFormatRegex)[0]);
    const reason = restArgs[0].replace(timeFormatRegex, '').replace(/^\s/, '');
    const today = new Date();
    const banData = {
        bannedPlayer: player,
        date: `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`,
        length: time,
        unbanTime: today.getTime() + time,
        reason: reason,
        bannedBy: chatmsg.sender.nameTag
    };
    db.set(player, banData);
});
Server.on('tick', () => {
    const currentTime = new Date().getTime();
    const bannedPlayers = db.getCollection();
    if (!bannedPlayers)
        return;
    for (let key in bannedPlayers) {
        if (bannedPlayers.hasOwnProperty(key) && bannedPlayers[key]?.bannedPlayer) {
            if (bannedPlayers[key]?.unbanTime < currentTime)
                db.delete(key);
            else
                Server.runCommand(`kick "${bannedPlayers[key]?.bannedPlayer}" §r\n§cYou have been banned for §a${MS(bannedPlayers[key]?.length)}§c from this server at §b${bannedPlayers[key]?.date}${bannedPlayers[key]?.reason ? `\n§7Reason: §r${bannedPlayers[key]?.reason}` : ''}`);
        }
        ;
    }
    ;
});
