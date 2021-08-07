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
 * @function runCommands() - Run an Array of commands
 * @param {array} commands 
 */
function runCommands(commands) {
    for(const command of commands) runCommand(command);
};
/**
 * @function findEntityAtPos() - Find all the entities at a certain block position
 * @param {array} [xyz] - X, Y, Z position of the entity. Example: [0, 5, 0]
 * @param {string} dimension - The dimension where you want to search the entity. Options: 'overworld' | 'nether' | 'the end'
 * @returns property 'entity', which holds the array of entity found in that position. And property 'error' for error status.
 */
function findEntityAtPos([x, y, z], { dimension, entityIgnore } = {}) {
    try {
        const entity = Minecraft.World.getDimension(dimension ? dimension : 'overworld').getEntitiesAtBlockLocation(new Minecraft.BlockLocation(parseInt(x), parseInt(y), parseInt(z)));
        for(let i = 0; i < entity.length; i++)
            if(entityIgnore.includes(entity[i].id)) entity.splice(i, 1);
        return { list: entity, error: false };
    } catch (err) {
        return { list: null, error: true };
    };
};
/**
 * @function findTag() - Check if an entity has a certain tag
 * @param {string} searchTag - Tag you are seraching for. WARNING: Color Coding with § is ignored
 * @param {string} entityRequirements - Requirements for the entity. Same syntax as Minecraft commands. For example: [type=player,r=10]
 * @returns boolean
 */
function findTag({ entityRequirements } = {}, { searchTag }) {
    const data = runCommand(`tag @e${entityRequirements ? `[${entityRequirements.replace(/\]|\[/g, '')}]` : ''} list`).result;
    if(data.error) return false;
    const allTags = data.statusMessage.match(/(?<=: ).*$/)[0].split('§r, §a');
    for(const tag of allTags) if(tag.replace(/§./g, '').match(new RegExp(`^${searchTag.replace(/§./g, '')}$`))) return true;
};
/**
 * @function getScore() - Get score of a player from a specific scoreboard
 * @param {string} objective - The scoreboard objective of where you want to get the score 
 * @param {string} entityRequirements - Requirements for the entity. Same syntax as Minecraft commands. For example: [type=player,r=10]
 * @param {number} minimum - The minimum range you want to test for
 * @param {number} maximum - The maximum range you want to test for
 * @returns string
 */
function getScore({ objective }, { entityRequirements, minimum, maximum } = {}) {
    const data = runCommand(`scoreboard players test @e${entityRequirements ? `[${entityRequirements.replace(/\]|\[/g, '')}]` : ''} ${objective} ${minimum ? minimum : '*'} ${maximum ? maximum : '*'}`);
    if(data.error) return;
    return data.result.statusMessage.match(/\d+/)[0];
};
/**
 * @function getPlayers() - Get an array of online players in the world
 * @returns string[]
 */
function getPlayers() {
    let data = [];
    data = runCommand(`list`).result.players.split(', ');
    return data;
};

/**
 * @function getItemCount() - Get a specific item count in a players inventory
 * @param {string} player - The player you want to check 
 * @param {string} itemIdentifier - The item you want to check the count for
 * @param {number} itemData - The item data you want to check for
 * @returns number
 */
function getItemCount({ player, itemIdentifier, itemData }) {
    const data = runCommand(`clear "${player}" ${itemIdentifier} ${itemData} 0`);
    if(data.error) return '0';
    const itemCount = data.result.playerTest[0].match(/(?<=.*?\().+?(?=\))/)[0];
    return itemCount ? itemCount : '0';
};
/**
 * @function setTickTimeout() - Delay executing a function, ONCE
 * @param {function} Function - Pass in the function you want to execute
 * @param {number} Ticks - 1 tick is 0.05 seconds | 20 ticks in 1 second
 * @returns Function()
 */
const tickTimeouts = [];
function setTickTimeout(Function, Ticks) {
    const tickTimeout = { callback: Function, tick: Ticks };
    tickTimeouts.unshift(tickTimeout);
    return tickTimeout;
};
/**
 * @function setTickInterval() - Delay executing a functio, REPEATEDLY
 * @param {function} Function - Pass in the function you want to execute
 * @param {number} Ticks - 1 tick is 0.05 seconds | 20 ticks in 1 second
 * @returns Function()
 */
const tickIntervals = [];
function setTickInterval(Function, Ticks) {
    const tickInterval = { callback: Function, tick: Ticks };
    tickIntervals.unshift(tickInterval);
    return tickInterval;
};
/**
 * @function clearTickTimeout() - Clear Tick Timeouts
 * @param {function} timeout - Timeout function you want to clear
 */
function clearTickTimeout(timeout) {
    for(let i = 0; i < tickTimeouts.length; i++) if(tickTimeouts[i] == timeout) tickTimeouts.splice(i);
};
/**
 * @function clearTickInterval() - Clear Tick Intervals
 * @param {function} interval - Interval function you want to clear
 */
function clearTickInterval(interval) {
    for(let i = 0; i < tickIntervals.length; i++) if(tickIntervals[i] === interval) tickIntervals.splice(i);
};

let totalTick = 0;
Minecraft.World.events.tick.subscribe(() => {
    totalTick++;
    for(let i = 0; i < tickTimeouts.length; i++) {
        tickTimeouts[i].tick--;
        if(tickTimeouts[i].tick <= 0) {
            tickTimeouts[i].callback();
            tickTimeouts.splice(i);
        };
    };
    for(let i = 0; i < tickIntervals.length; i++) if(totalTick % tickIntervals[i].tick == 0) tickIntervals[i].callback();
});


export { runCommand, runCommands, findEntityAtPos, getScore, getPlayers, getItemCount, findTag, setTickTimeout, setTickInterval, clearTickTimeout, clearTickInterval };