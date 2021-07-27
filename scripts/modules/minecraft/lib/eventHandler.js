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
    playerJoined.forEach(player => MCEvent.emit('playerJoin', { name: player }));
    playerLeft.forEach(player => MCEvent.emit('playerLeft', { name: player }));
    oldPlayer = currentPlayer;
});

export default MCEvent;