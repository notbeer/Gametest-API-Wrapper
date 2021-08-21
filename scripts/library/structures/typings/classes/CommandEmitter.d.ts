import { beforeChat } from "./minecraft/Events"; 

interface registerInformation {
    private?: boolean,
    cancelMessage?: boolean,
    name: string,
    aliases?: Array<string>,
    description?: string,
    usage?: string,
    example?: Array<String>
}
export interface CommandEmitter {
    /**
     * 
     * @param register - An object of information needed to register the custom command
     * @param callback - Code you want to execute when the command is executed
     */
    register(register: registerInformation, callback: (data: beforeChat, args: Array<String>) => void): this;
    getCommands(): Array<string>;
    /**
     * 
     * @param name - The command name you want to get information on
     */
    getCommandRegistration(name: string): registerInformation | null;
    /**
     * 
     * @param name - The command name to execute the callback
     * @param data - The data from chat event listener
     * @param args - Part of users message broken into an Array
     */
    emit(name: string, data: [beforeChat], args: Array<string>): () => void;
}