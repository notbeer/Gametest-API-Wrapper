import { config } from "../../index.js";
import { runCommand, findTag } from "../utils/others.js";

export default class commandBuilder {
    constructor() {
        this.commands = [];
    };
    /**
     * 
     * @param {Object} register - An object of information needed to register the custom command
     * @param {VoidFunction} callback - Code you want to execute when the command is executed
     */
    register(register, callback) {
        this.commands.push({ register, name: register.name, aliases: register.aliases ? register.aliases.map(v => v.toLowerCase()) : register.aliases, description: register.description, usage: register.usage, example: register.example, callback });
    };
    /**
     * 
     * @param {String} name - The command name you want to get information on
     * @returns String
     */
    getCommandRegistration(name) {
        const command = this.commands.some(element => element.name.toLowerCase() === name || element.aliases && element.aliases.includes(name));
        if(!command) return;
        let string = '';
        this.commands.forEach(element => {
            if(element.register.private) return;
            const eachCommand = element.name.toLowerCase() === name || element.aliases && element.aliases.includes(name);
            if(!eachCommand) return;
            string = `\n§eCommand§f: §a${config.commandPrefix}§l§c${element.name}§r\n`;
            if(element.aliases) string += `§eAliases§f: §c${element.aliases.join('§r, ')}§r\n`;
            if(element.description) string += `§eDescription§f: ${element.description}\n`;
            if(element.usage) string += `§eUsage§f: §a${config.commandPrefix}§f${element.name} ${element.usage}\n`;
            if(element.example) string += `§eExample§f: §a${config.commandPrefix}§f${element.example.join(`\n${config.commandPrefix}§f`)}`;
        });
        return string;
    };
    /**
     * 
     * @returns Array
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
     * 
     * @param {String} name - The command name to execute the callback
     * @param {Object} data - The data from chat event listener
     * @param {Array} args - Part of users message broken into an Array
     * @returns callback
     */
    emit(name, data, args) {
        data.canceled = true;
        const command = this.commands.some(element => element.name.toLowerCase() === name || element.aliases && element.aliases.includes(name));
        if(!command) return runCommand(`tellraw "${data.sender.name}" {"rawtext":[{"text":"§c"},{"translate":"commands.generic.unknown", "with": ["§f${name}§c"]}]}`);
        this.commands.forEach(element => {
            if(element.register.ownerOnly && !findTag({ entityRequirements: `[type=player,name="${data.sender.name}"]` }, { searchTag: 'OWNER' })) return;
            const eachCommand = element.name.toLowerCase() === name || element.aliases && element.aliases.includes(name);
            if(!eachCommand) return;
            if(!element.register.cancelMessage) data.canceled = false;
            return element.callback(data, args);
        });
    };
};