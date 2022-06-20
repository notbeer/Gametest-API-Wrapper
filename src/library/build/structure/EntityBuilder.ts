import { world, BlockLocation } from 'mojang-minecraft';
import { ServerBuild } from './serverBuilder.js';
import { dimension } from '../../@types/index';
import { getEntityAtPosReturn } from '../../@types/build/structure/EntityBuilder';

export class EntityBuilder {
    /**
     * Look for a tag on entitie(s)
     * @param {string} tag Tag you are seraching for (WARNING: Color Coding with § is ignored)
     * @param {string} [target] Requirements for the entity
     * @return {boolean}
     * @example EntityBuilder.hasTag("villager", '[type=villager]');
     */
    public hasTag(tag: string, target?: string): boolean {
        const allTags = this.getTags(target);
        if(!allTags) return false;
        for(const Tag of allTags) if(Tag.replace(/§./g, '').match(new RegExp(`^${tag.replace(/§./g, '')}$`))) return true;
        return false;
    };
    /**
     * Get entitie(s) at a position
     * @param {number} x X position of the entity 
     * @param {number} y Y position of the entity
     * @param {number} z Z position of the entity 
     * @param {dimension} [dimension] Dimesion of the entity
     * @param {Array<string>} [ignoreType] Entity type to not look for
     * @returns {Array<getEntityAtPosReturn>}
     * @example EntityBuilder.getEntityAtPos([0, 5, 0], { dimension: 'nether', ignoreType: ['minecraft:player']});
     */
    public getAtPos([x, y, z]: [number, number, number], { dimension, ignoreType }: { dimension?: dimension, ignoreType?: Array<string> } = {}): getEntityAtPosReturn {
        try {
            const entity = world.getDimension(dimension ? dimension : 'overworld').getEntitiesAtBlockLocation(new BlockLocation(x, y, z));
            for(let i = 0; i < entity.length; i++)
                if(ignoreType.includes(entity[i].id)) entity.splice(i, 1);
            return { list: entity, error: false };
        } catch (err) {
            return { list: null, error: true };
        };
    };
    /**
     * Get all the tag on entitie(s)
     * @param {string} [target] Requirements for the entity
     * @returns {Array<string> | null}
     * @example EntityBuilder.getTags('[type=villager,name="Bob"]');
     */
    public getTags(target?: string): Array<string> | null {
        const data = ServerBuild.runCommand(`tag @e${target ? `[${target.replace(/\]|\[/g, '')}]` : ''} list`);
        if(data.error) return;
        let tags = data.statusMessage.match(/(?<=: ).*$/);
        if(tags) return tags[0].split('§r, §a');
    };
    /**
     * Get score of an entity
     * @param {string} objective Objective name you want to search
     * @param {string} [target] Requirements for the entity
     * @param {number} [minimum] Minumum score you are looking for
     * @param {number} [maximum] Maximum score you are looking for
     * @returns {number | null}
     * @example EntityBuilder.getScore('Money', '[type=villager,name="Bob"]', { minimum: 0 });
     */
    public getScore(objective: string, target?: string, { minimum, maximum }: { minimum?: number, maximum?: number } = {}): number | null {
        const data = ServerBuild.runCommand(`scoreboard players test @e${target ? `[${target.replace(/\]|\[/g, '')}]` : ''} ${objective} ${minimum ? minimum : '*'} ${maximum ? maximum : '*'}`);
        if(data.error) return;
        return parseInt(data.statusMessage.match(/-?\d+/)[0]);
    };
};
export const EntityBuild = new EntityBuilder();