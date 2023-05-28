import { clearTickInterval, clearTickTimeout, setTickInterval, setTickTimeout } from "./utils/scheduling.js";
export { clearTickInterval, clearTickTimeout, setTickInterval, setTickTimeout };
import { rainbowText, metricNumbers, thousandsSeparator } from "./utils/formatter.js";
export { rainbowText, metricNumbers, thousandsSeparator };
import { MS } from './utils/ms.js';
export { MS };
import Database from "./build/manager/Database.js";
export { Database };
import { world, system, WatchdogTerminateReason } from "@minecraft/server";
import { ServerBuilder } from "./build/structure/ServerBuilder.js";
import { EntityBuild } from "./build/structure/EntityBuilder.js";
import { PlayerBuild } from "./build/structure/PlayerBuilder.js";
import { CommandBuild } from "./build/structure/CommandBuilder.js";
import { MessageBuild } from "./build/structure/interfaces/Message.js";
let sv;
// prevent watchdog from crashing
system.events.beforeWatchdogTerminate.subscribe((ev) => {
    if (WatchdogTerminateReason.hang == ev.terminateReason && !sv.shutdown)
        ev.cancel = true;
});
class ServerBuild extends ServerBuilder {
    constructor() {
        super();
        this.entity = EntityBuild;
        this.player = PlayerBuild;
        this.command = CommandBuild;
        this.message = MessageBuild;
        this._buildEvent();
    }
    ;
    /**
     * @private
     */
    _buildEvent() {
        world.events.beforeChat.subscribe(data => {
            const date = new Date();
            /**
             * Emit to 'beforeMessage' event listener
             */
            this.emit('beforeMessage', data);
            /**
             * This is for the command builder and a emitter
             */
            if (!data.message.startsWith(CommandBuild.prefix))
                return;
            const args = data.message.slice(CommandBuild.prefix.length).trim().split(/\s+/);
            const command = args.shift().toLowerCase();
            const getCommand = CommandBuild.getAllRegistation().some(element => element.name === command || element.aliases && element.aliases.includes(command));
            if (!getCommand) {
                data.cancel = true;
                return this.runCommand(`tellraw "${data.sender.nameTag}" {"rawtext":[{"text":"§c"},{"translate":"commands.generic.unknown", "with": ["§f${command}§c"]}]}`);
            }
            ;
            CommandBuild.getAllRegistation().forEach(element => {
                if (!data.message.startsWith(CommandBuild.prefix) || element.name !== command)
                    return;
                /**
                 * Registration callback
                 */
                if (element?.cancelMessage)
                    data.cancel = true;
                try {
                    element.callback(data, args);
                }
                catch (error) {
                    this.runCommand(`tellraw "${data.sender.nameTag}" {"rawtext":[{"text":${JSON.stringify(`§c${error}`)}}]}`);
                }
                ;
                /**
                 * Emit to 'customCommand' event listener
                 */
                this.emit('customCommand', {
                    registration: element,
                    data,
                    createdAt: date,
                    createdTimestamp: date.getTime()
                });
            });
        });
        /**
         * Emit to 'beforeExplosion' event listener
         */
        world.events.beforeExplosion.subscribe(data => this.emit('beforeExplosion', data));
        /**
         * Emit to 'beforePistonActivate' event listener
         */
        world.events.beforePistonActivate.subscribe(data => this.emit('beforePistonActivate', data));
        /**
         * Emit to 'blockExplode' event listener
         */
        world.events.blockExplode.subscribe(data => this.emit('blockExplode', data));
        /**
         * Emit to 'beforeExplosion' event listener
         */
        world.events.explosion.subscribe(data => this.emit('explosion', data));
        /**
         * Emit to 'beforeExplosion' event listener
         */
        world.events.pistonActivate.subscribe(data => this.emit('pistonActivate', data));
        /**
         * Emit to 'messageCreate' event listener
         */
        world.events.chat.subscribe(data => this.emit('messageCreate', data));
        /**
         * Emit to 'entityEffected' event listener
         */
        world.events.effectAdd.subscribe(data => this.emit('entityEffected', data));
        /**
         * Emit to 'weatherChange' event listener
         */
        world.events.weatherChange.subscribe(data => this.emit('weatherChange', data));
        let oldPlayer = [];
        world.events.entitySpawn.subscribe(data => {
            /**
             * Emit to 'entityCreate' event listener
             */
            this.emit('entityCreate', data.entity);
            if (data.entity.id !== 'minecraft:player')
                return;
            let playerJoined = PlayerBuild.list().filter(current => !oldPlayer.some(old => current === old));
            /**
             * Emit to 'playerJoin' event listener
             */
            if (playerJoined.includes(data.entity.nameTag))
                this.emit('playerJoin', data.entity);
        });
        let worldLoaded = false, tickCount = 0, lastTick = Date.now();
        system.run(() => {
            /**
             * Emit to 'tick' event listener
             */
            let currTick = Date.now();
            this.emit('tick', { currentTick: system.currentTick, deltaTime: currTick - lastTick });
            lastTick = currTick;
            let currentPlayer = PlayerBuild.list();
            let playerLeft = oldPlayer.filter(old => !currentPlayer.some(current => old === current));
            /**
             * Emit to 'playerLeave' event listener
             */
            for (let player of playerLeft)
                this.emit('playerLeave', { name: player });
            oldPlayer = currentPlayer;
            tickCount++;
            if (!this.runCommand('testfor @a').error && !worldLoaded) {
                /**
                 * Emit to 'ready' event listener
                 */
                this.emit('ready', { loadTime: tickCount });
                worldLoaded = true;
            }
            ;
        });
    }
    ;
}
;
export const Server = sv = new ServerBuild();
