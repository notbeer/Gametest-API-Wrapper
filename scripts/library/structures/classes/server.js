import * as Minecraft from 'Minecraft';

class ServerBuilder {
    broadcast(text, player) {
        if(!text) throw 'broadcast(): Error - Missing text parameter';
        return this.runCommand(`tellraw ${player ? `"${player}"` : '@a'} {"rawtext":[{"text":${JSON.stringify(text)}}]}`);
    };
    findPlayer(name) {
        const players = this.getPlayers();
        if(players.includes(name)) return true;
        return false;
    };
    getPlayers() {
        let data = [];
        data = this.runCommand(`list`).players.split(', ');
        return data;
    };
    getEntityAtPos([x, y, z], { dimension, ignoreType } = {}) {
        try {
            const entity = Minecraft.World.getDimension(dimension ? dimension : 'overworld').getEntitiesAtBlockLocation(new Minecraft.BlockLocation(parseInt(x), parseInt(y), parseInt(z)));
            for(let i = 0; i < entity.length; i++)
                if(ignoreType.includes(entity[i].id)) entity.splice(i, 1);
            return { list: entity, error: false };
        } catch (err) {
            return { list: null, error: true };
        };
    };
    runCommand(command) {
        try {
            return { error: false, ...Minecraft.Commands.run(command) };
        } catch(error) {
            return { error: true };
        };
    };
    runCommands(commands) {
        const conditionalRegex = /^%/;
        if(conditionalRegex.test(commands[0])) throw 'First command in the Array CANNOT be Conditional';
        let success = true;
        for(let i = 0; i < commands.length; i++) {
            const data = this.runCommand(commands[i].replace(conditionalRegex, ''));
            if(data.error && conditionalRegex.test(commands[i + 1])) {
                i++;
                success = false;
            };
        };
        return { error: success };
    };
};

/**
 * @type {import('../typings/classes/ServerBuilder').ServerBuilder}
 */
const Server = new ServerBuilder();
export default Server;