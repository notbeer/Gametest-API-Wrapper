import eventBuilder from "./classes/eventBuilder.js";
const MCEvent = new eventBuilder();
import { World, Commands } from 'Minecraft';

World.events.beforeChat.subscribe(data => MCEvent.emit('beforeMessage', data));
World.events.chat.subscribe(data => MCEvent.emit('onMessage', data));
World.events.tick.subscribe(() => MCEvent.emit('everyTick', null));
World.events.addEffect.subscribe((data) => MCEvent.emit('effectAdded', data));
World.events.createEntity.subscribe((data) => MCEvent.emit('entityCreate', data));
World.events.changeWeather.subscribe((data) => MCEvent.emit('weatherChange', data));

let oldPlayer = [];
MCEvent.on('everyTick', () => {
    let currentPlayer = [];
    try {
        const data = Commands.run(`testfor @a`).statusMessage;
        currentPlayer = data.replace(/^Found\s/).replace(/^undefined/, '').split(', ');
    } catch(err) {};
    let playerJoined = currentPlayer.filter(current => !oldPlayer.some(old => current === old));
    let playerLeft = oldPlayer.filter(old => !currentPlayer.some(current => old === current));
    if(playerJoined[0]) MCEvent.emit('playerJoin', { name: playerJoined });
    if(playerLeft[0]) MCEvent.emit('playerLeft', { name: playerLeft });
    oldPlayer = currentPlayer;
});

export default MCEvent;