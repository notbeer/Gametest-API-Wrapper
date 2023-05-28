import { world } from '@minecraft/server';
import { EventEmitter } from '../manager/EventEmitter.js';
import { dimension } from '../../@types/index';
import { runCommandReturn } from '../../@types/build/structure/ServerBuilder';

export class ServerBuilder extends EventEmitter {
    shutdown: boolean = false;
    /**
     * Force shuts down the server
     * @example ServerBuilder.close()
     */
    public close(): void {
        this.shutdown = true;
        const crash = () => {
            while(true) {
                crash();
            };
        };
        crash();
    };
    /**
     * Run a command in game
     * @param command The command you want to run
     * @returns {runCommandReturn}
     * @example ServerBuilder.runCommand('say Hello World!');
     */
    public runCommand(command: string, dimension?: dimension): runCommandReturn {
        try {
            return { error: false, ...world.getDimension(dimension ?? 'overworld').runCommand(command) };
        } catch(error) {
            return { error: true };
        };
    };
    /**
     * Run an array of commands
     * @param {Array<string>} commands Put '%' before your commands. It will make it so it only executes if all the commands thta came before it executed successfully!
     * @returns {{ error: boolean }}
     * @example runCommands([
     * 'clear "notbeer" diamond 0 0',
     * '%say notbeer has a Diamond!'
     * ]);
     */
    public runCommands(commands: Array<string>): { error: boolean } {
        const conditionalRegex = /^%/;
        if(conditionalRegex.test(commands[0])) throw '[Server]: runCommands(): Error - First command in the Array CANNOT be Conditional';
        let error = false;
        commands.forEach(cmd => {
            if(error && conditionalRegex.test(cmd)) return;
            error = this.runCommand(cmd.replace(conditionalRegex, '')).error;
        });
        return { error: error };
    };
};
export const ServerBuild = new ServerBuilder();