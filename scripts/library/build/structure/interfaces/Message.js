import { ServerBuild } from '../serverBuilder.js';
export class MessageBuilder {
    /**
     * Broadcast a message in chat
     * @param {string} text Message you want to broadcast in chat
     * @param {string} [player] Player you want to broadcast to
     * @returns {runCommandReturn}
     * @example ServerBuilder.broadcast('Hello World!');
     */
    broadcast(text, player) {
        return ServerBuild.runCommand(`tellraw ${player ? `"${player}"` : '@a'} {"rawtext":[{"text":${JSON.stringify(text)}}]}`);
    }
    ;
}
;
export const MessageBuild = new MessageBuilder();
