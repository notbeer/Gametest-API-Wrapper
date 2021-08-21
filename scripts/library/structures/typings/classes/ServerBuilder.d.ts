import { Entity } from "./minecraft/Entity";

export interface ServerBuilder {
    /**
     * 
     * @param text Message you want to broadcast in chat
     * @param player Player you want to broadcast to
     */
    broadcast(text: String, player?: String): runCommandReturn
    /**
     * 
     * @param name Player name you are looking for
     * @example findPlayer('notbeer');
     */
    findPlayer(name: String): Boolean;
    getPlayers(): Array<String>;
    /**
     * 
     * @param x X position of the entity 
     * @param y Y position of the entity
     * @param z Z position of the entity 
     * @param dimension Dimesion of the entity
     * @param ignoreType Entity type to not look for
     * @example getEntityAtPos([0, 5, 0], { dimension: 'nether', ignoreType: ['minecraft:player']});
     */
    getEntityAtPos([x, y, z]: [Number, Number, Number], { dimension, ignoreType }?: { dimension: dimension, ignoreType: Array<String> }): getEntityAtPosReturn;
    /**
     * 
     * @param command The command you want to run
     * @example runCommand('say Hello World!');
     */
    runCommand(command: String): runCommandReturn;
    /**
     * 
     * @param commands Array of commands you want to run. Supports conditional, put '%' infront of your command to make it run ONLY when the command before it executed successfully
     * @example runCommands([
     * 'clear "notbeer" diamond 0 0',
     * '%say notbeer has a Diamond!'
     * ]);
     */
    runCommands(commands: Array<String>): { error: boolean };
}

type dimension = 'overworld' | 'nether' | 'the end';

interface getEntityAtPosReturn {
    list: Array<Entity> | null,
    error: Boolean
}
interface runCommandReturn {
    error: Boolean
    result: Object
}