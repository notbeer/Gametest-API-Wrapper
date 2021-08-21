import Server from "../../server.js";

export default class CommandEmitter {
    constructor() {
        this.commands = [];
    };
    /**
     * @param {object} register - An object of information needed to register the custom command
     * @param {(...args) => void} callback - Code you want to execute when the command is executed
     */
    register(register, callback) {
        this.commands.push({ register, name: register.name, aliases: register.aliases ? register.aliases.map(v => v.toLowerCase()) : register.aliases, description: register.description, usage: register.usage, example: register.example, callback });
    };
    /**
     * @returns {string[]}
     */
    getCommands() {
        const commands = [];
        this.commands.forEach(element => {
            if(element.register.private) return;
            commands.push(element.name);
        });
        return commands;
    };
    /**
     * @param {string} name - The command name you want to get information on
     * @returns {object | null}
     */
    getCommandRegistration(name) {
        const command = this.commands.some(element => element.name.toLowerCase() === name || element.aliases && element.aliases.includes(name));
        if(!command) return;
        let register;
        this.commands.forEach(element => {
            if(element.register.private) return;
            const eachCommand = element.name.toLowerCase() === name || element.aliases && element.aliases.includes(name);
            if(!eachCommand) return;
            register = element.register;
        });
        return register;
    };
    /**
     * 
     * @param {string} name - The command name to execute the callback
     * @param {object} data - The data from chat event listener
     * @param {string[]} args - Part of users message broken into an Array
     * @returns {(...args) => void}
     */
    emit(name, data, args) {
        data.canceled = true;
        const command = this.commands.some(element => element.name.toLowerCase() === name || element.aliases && element.aliases.includes(name));
        if(!command) return Server.runCommand(`tellraw "${data.sender.nameTag}" {"rawtext":[{"text":"§c"},{"translate":"commands.generic.unknown", "with": ["§f${name}§c"]}]}`);
        this.commands.forEach(element => {
            const eachCommand = element.name.toLowerCase() === name || element.aliases && element.aliases.includes(name);
            if(!eachCommand) return;
            if(!element.register.cancelMessage) data.canceled = false;
            try {
                return element.callback(data, args);
            } catch(err) {
                Server.broadcast(`§c${err}`, data.sender.nameTag);
            };
        });
    };
};