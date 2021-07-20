import * as Minecraft from 'Minecraft';

/**
 * @function runCommand() - Run a command in game with error handling
 * @param {string} command - The command you want to run
 * @returns Object w/ property result(string) & error(boolean)
 */
function runCommand(command) {
    try {
        return { result: Minecraft.Commands.run(command), error: false };
    } catch(err) {
        return { result: err, error: true };
    };
};
/**
 * @function findEntityAtPos() - Find all the entities at a certain block position
 * @param {string} dimension - The dimension where you want to search the entity. Options: 'overworld' | 'nether' | 'the end'
 * @param {array} [xyz] - X, Y, Z position of the entity. Example: [0, 5, 0]
 * @returns property 'entity', which holds the array of entity found in that position. And property 'error' for error status.
 */
function findEntityAtPos([x, y, z], { dimension } = {}) {
    try {
        const entity = Minecraft.World.getDimension(dimension ? dimension : 'overworld').getEntitiesAtBlockLocation(new Minecraft.BlockLocation(x, y, z));
        return { list: entity, error: false };
    } catch (err) {
        return { error: true };
    };
};
/**
 * @function findTag() - Check if an entity has a certain tag
 * @param {boolean} player - Set boolean true, if the entity you are checking the tag on is a player or else set false or don't pass anything
 * @param {string} entityName - This will be the entity or players name, where you will search the tag
 * @param {string} tag - Tag you are seraching for 
 * @returns boolean
 */
function findTag({ entityRequirements } = {}, { searchTag }) {
    try {
        const data = runCommand(`tag @e${entityRequirements ? `[${entityRequirements.replace(/\]|\[/g, '')}]` : ''} list`).result;
        const parsedData = data.statusMessage.replace(/(:(.§a))/g, ': ').replace(/(§r, §a)/g, ' ');
        const tagRegex = new RegExp(`:(.+)\\b${searchTag}\\b`, 'g');
        if(parsedData.match(tagRegex)) return true;
    } catch(err) {
        runCommand(`say An error has occured, while trying to parse the player tag data...\n§c${err}`)
    };
};
/**
 * @function setTickTimeout() - Delay executing a function, ONCE
 * @param {function} Function - Pass in the function you want to execute
 * @param {number} Ticks - 1 tick is 0.05 seconds | 20 ticks in 1 second
 * @returns Function()
 */
function setTickTimeout(Function, Ticks) {
    let msPassed = 0;
    const subscribed = Minecraft.World.events.tick.subscribe(() => {
        if(msPassed >= Ticks) {
            Minecraft.World.events.tick.unsubscribe(subscribed);
            return Function();
        };
        msPassed += 1;
    });
};
/**
 * @function setTickInterval() - Delay executing a functio, REPEATEDLY
 * @param {function} Function - Pass in the function you want to execute
 * @param {number} Ticks - 1 tick is 0.05 seconds | 20 ticks in 1 second
 * @returns Function()
 */
function setTickInterval(Function, Tick) {
    let msPassed = 0;
    Minecraft.World.events.tick.subscribe(() => {
        if(msPassed >= Tick) {
            msPassed = 0;
            return Function();
        };
        msPassed += 1;
    });
};

export { runCommand, findEntityAtPos, findTag, setTickTimeout, setTickInterval };