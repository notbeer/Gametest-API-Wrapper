import Server from "./server.js";

class EntityBuilder {
    findTag(searchTag, target) {
        const allTags = this.getTags(target);
        if(!allTags[0]) return false;
        for(const tag of allTags) if(tag.replace(/§./g, '').match(new RegExp(`^${searchTag.replace(/§./g, '')}$`))) return true;
        return false;
    };
    getTags(target) {
        const data = Server.runCommand(`tag @e${target ? `[${target.replace(/\]|\[/g, '')}]` : ''} list`);
        if(data.error) return [];
        return data.result.statusMessage.match(/(?<=: ).*$/)[0].split('§r, §a');
    };
    getScore(objective, target, { minimum, maximum } = {}) {
        const data = Server.runCommand(`scoreboard players test @e${target ? `[${target.replace(/\]|\[/g, '')}]` : ''} ${objective} ${minimum ? minimum : '*'} ${maximum ? maximum : '*'}`);
        if(data.error) return;
        return parseInt(data.result.statusMessage.match(/-?\d+/)[0]);
    };
};

/**
 * @type {import('../typings/classes/Enitity').EntityBuilder}
 */
const Entity = new EntityBuilder();
export default Entity;
