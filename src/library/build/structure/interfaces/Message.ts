import { ServerBuild } from '../serverBuilder.js';
import { runCommandReturn } from '../../../@types/build/structure/ServerBuilder';

export class MessageBuilder {
    /**
     * Broadcast a message in chat
     * @param {string} text Message you want to broadcast in chat
     * @param {string} [player] Player you want to broadcast to
     * @returns {runCommandReturn}
     * @example ServerBuilder.broadcast('Hello World!');
     */
    public broadcast(text: string, player?: string): runCommandReturn {
        return ServerBuild.runCommand(`tellraw ${player ? `"${player}"` : '@a'} {"rawtext":[{"text":${JSON.stringify(text)}}]}`);
    };
    /*
    public awaitMessages({ filter, time, max }: { filter: (...args: any[]) => boolean, time?: number, max?: number }) {
        ServerBuild.on('beforeMessage', data => {
            if(!filter(data)) return;
        });
    };
    */
};

export const MessageBuild = new MessageBuilder();