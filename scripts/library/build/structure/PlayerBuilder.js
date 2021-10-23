import { World, BlockLocation } from 'mojang-minecraft';
import { ServerBuild } from './serverBuilder.js';
export class PlayerBuilder {
    /**
     * Get list of players in game
     * @returns {Array<string>}
     * @example PlayerBuilder.list();
     */
    list() {
        let data = [];
        data = ServerBuild.runCommand(`list`).players.split(', ');
        return data;
    }
    ;
    /**
     * Look if player is in the game
     * @param {string} player Player you are looking for
     * @returns {boolean}
     * @example PlayerBuilder.has('notbeer');
     */
    has(player) {
        const players = this.list();
        return players.includes(player);
    }
    ;
    /**
     * Fetch an online players data
     * @param player
     * @returns {Player}
     */
    fetch(player) {
        for (const p of World.getPlayers())
            if (player && p.name === player)
                return p;
    }
    ;
    /**
     * Get tags player(s) has
     * @param {string} [player] Requirements for the entity
     * @returns {Array<string>}
     * @example PlayerBuilder.getTags('notbeer');
     */
    getTags(player) {
        const data = ServerBuild.runCommand(`tag "${player}" list`);
        if (data.error)
            return;
        let tags = data.statusMessage.match(/(?<=: ).*$/);
        if (tags)
            return tags[0].split('§r, §a');
    }
    ;
    /**
     * Look for a tag on player(s)
     * @param {string} tag Tag you are seraching for (WARNING: Color Coding with § is ignored)
     * @param {string} [player] Requirements for the entity
     * @returns {boolean}
     * @example PlayerBuilder.hasTag("Owner", 'notbeer');
     */
    hasTag(tag, player) {
        const allTags = this.getTags(player);
        if (!allTags)
            return false;
        for (const Tag of allTags)
            if (Tag.replace(/§./g, '').match(new RegExp(`^${tag.replace(/§./g, '')}$`)))
                return true;
        return false;
    }
    ;
    /**
     * Get players(s) at a position
     * @param {number} x X position of the entity
     * @param {number} y Y position of the entity
     * @param {number} z Z position of the entity
     * @param {dimension} [dimension] Dimesion of the entity
     * @returns {getPlayerAtPosReturn}
     * @example PlayerBuilder.getEntityAtPos([0, 5, 0], { dimension: 'nether' ]});
     */
    getAtPos([x, y, z], { dimension } = {}) {
        try {
            const entity = World.getDimension(dimension ? dimension : 'overworld').getEntitiesAtBlockLocation(new BlockLocation(x, y, z));
            for (let i = 0; i < entity.length; i++)
                if (entity[i].id !== 'minecraft:player')
                    entity.splice(i, 1);
            return { list: entity, error: false };
        }
        catch (err) {
            return { list: null, error: true };
        }
        ;
    }
    ;
    /**
     * Get the amount on a specific items player(s) has
     * @param {string} itemIdentifier Item you are looking for
     * @param {number} [itemData] Item data you are looking for
     * @param {string} [player] Player you are searching
     * @returns {Array<getItemCountReturn>}
     * @example PlayerBuilder.getItemCount('minecraft:diamond', '0', 'notbeer');
     */
    getItemCount(itemIdentifier, itemData, player) {
        let itemCount = [];
        const data = ServerBuild.runCommand(`clear "${player}" ${itemIdentifier} ${itemData ? itemData : '0'} 0`);
        if (data.error)
            return itemCount;
        data.playerTest.forEach(element => {
            const count = parseInt(element.match(/(?<=.*?\().+?(?=\))/)[0]);
            const player = element.match(/^.*(?= \(\d+\))/)[0];
            itemCount.push({ player, count });
        });
        return itemCount ? itemCount : [];
    }
    ;
    /**
     * Get players score on a specific objective
     * @param {string} objective Objective name you want to search
     * @param {string} player Requirements for the entity
     * @param {number} [minimum] Minumum score you are looking for
     * @param {number} [maximum] Maximum score you are looking for
     * @returns {number}
     * @example PlayerBuilder.getScore('Money', 'notbeer', { minimum: 0 });
     */
    getScore(objective, player, { minimum, maximum } = {}) {
        const data = ServerBuild.runCommand(`scoreboard players test "${player}" ${objective} ${minimum ? minimum : '*'} ${maximum ? maximum : '*'}`);
        if (data.error)
            return;
        return parseInt(data.statusMessage.match(/-?\d+/)[0]);
    }
    ;
}
;
export const PlayerBuild = new PlayerBuilder();
