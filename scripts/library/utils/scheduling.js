import * as Minecraft from 'Minecraft';

const tickTimeouts = [];
/**
 * Delay executing a function
 * @typedef
 * @param {String | Function} handler Function you want to execute
 * @param {Number=} timeout Time delay in ticks. 20 ticks is 1 second
 * @param {any[]=} args Function parameters for your handler
 * @returns {Number}
 */
function setTickTimeout(handler, timeout, ...args) {
    const tickTimeout = { callback: handler, tick: timeout, args };
    const index = tickTimeouts.push(tickTimeout) - 1;
    return index;
};

const tickIntervals = [];
/**
 * Delay executing a function, REPEATEDLY
 * @typedef
 * @param {String | Function} handler Function you want to execute
 * @param {Number=} timeout Time delay in ticks. 20 ticks is 1 second
 * @param {any[]=} args Function parameters for your handler
 * @returns {Number}
 */
function setTickInterval(handler, timeout, ...args) {
    const tickInterval = { callback: handler, tick: timeout, args };
    const index = tickIntervals.push(tickInterval) - 1;
    return index;
};

/**
 * Delete a clearTickTimeout
 * @typedef
 * @param {Number} handle Index you want to delete
 */
function clearTickTimeout(handle) {
    tickTimeouts.splice(handle, 1);
};

/**
 * Delete a clearTickInterval
 * @typedef
 * @param {Number} handle Index you want to delete
 */
 function clearTickInterval(handle) {
    tickIntervals.splice(handle, 1);
};

let totalTick = 0;
Minecraft.World.events.tick.subscribe(() => {
    totalTick++;
    for(let i = 0; i < tickTimeouts.length; i++) {
        tickTimeouts[i].tick--;
        if(tickTimeouts[i].tick <= 0) {
            tickTimeouts[i].callback(...tickTimeouts[i].args);
            tickTimeouts.splice(i, 1);
        };
    };
    for(let i = 0; i < tickIntervals.length; i++) if(totalTick % tickIntervals[i].tick == 0) tickIntervals[i].callback(...tickIntervals[i].args);
});

export { setTickTimeout, setTickInterval, clearTickTimeout, clearTickInterval };