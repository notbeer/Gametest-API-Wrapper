import { Commands, World } from 'mojang-minecraft';
import { EventEmitter } from '../manager/EventEmitter.js';
export class ServerBuilder extends EventEmitter {
    /**
     * Force shuts down the server
     * @example ServerBuilder.close()
     */
    close() {
        const crash = () => {
            while (true) {
                crash();
            }
            ;
        };
        crash();
    }
    ;
    /**
     * Run a command in game
     * @param command The command you want to run
     * @returns {runCommandReturn}
     * @example ServerBuilder.runCommand('say Hello World!');
     */
    runCommand(command, dimension) {
        try {
            return { error: false, ...Commands.run(command, World.getDimension(dimension ?? 'overworld')) };
        }
        catch (error) {
            return { error: true };
        }
        ;
    }
    ;
    /**
     * Run an array of commands
     * @param {Array<string>} commands Put '%' before your commands. It will make it so it only executes if all the commands thta came before it executed successfully!
     * @returns {{ error: boolean }}
     * @example runCommands([
     * 'clear "notbeer" diamond 0 0',
     * '%say notbeer has a Diamond!'
     * ]);
     */
    runCommands(commands) {
        const conditionalRegex = /^%/;
        if (conditionalRegex.test(commands[0]))
            throw '[Server]: runCommands(): Error - First command in the Array CANNOT be Conditional';
        let error = false;
        commands.forEach(cmd => {
            if (error && conditionalRegex.test(cmd))
                return;
            error = this.runCommand(cmd.replace(conditionalRegex, '')).error;
        });
        return { error: error };
    }
    ;
}
;
export const ServerBuild = new ServerBuilder();
