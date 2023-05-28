import { ServerBuild } from "../build/structure/ServerBuilder.js";
import { MessageBuild } from "../build/structure/interfaces/Message.js";
export function displayRank(chatmsg) {
    const data = ServerBuild.runCommand(`tag "${chatmsg.sender.nameTag}" list`);
    const allRanks = data.statusMessage.match(/(?<=\$\(chatrank:).*?(?=\))/g);
    chatmsg.cancel = true;
    if (!allRanks)
        return MessageBuild.broadcast(`[§bMember§f] §7${chatmsg.sender.nameTag}: §f${chatmsg.message}`);
    MessageBuild.broadcast(`[${allRanks.join(', ').trim()}] §7${chatmsg.sender.nameTag}: §f${chatmsg.message}`);
}
;
