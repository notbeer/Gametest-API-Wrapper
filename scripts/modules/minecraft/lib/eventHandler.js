import { World } from 'Minecraft';

import eventBuilder from "./classes/eventBuilder.js";
const MCEvent = new eventBuilder();

import { getPlayers } from './utils/others.js';

World.events.beforeChat.subscribe(data => MCEvent.emit('beforeMessage', data));
World.events.chat.subscribe(data => MCEvent.emit('onMessage', data));
World.events.tick.subscribe(() => MCEvent.emit('everyTick', null));
World.events.addEffect.subscribe((data) => MCEvent.emit('effectAdded', data));
World.events.createEntity.subscribe((data) => MCEvent.emit('entityCreate', data));
World.events.changeWeather.subscribe((data) => MCEvent.emit('weatherChange', data));

let oldPlayer = [];
MCEvent.on('everyTick', () => {
    let currentPlayer = getPlayers();
    let playerJoined = currentPlayer.filter(current => !oldPlayer.some(old => current === old));
    let playerLeft = oldPlayer.filter(old => !currentPlayer.some(current => old === current));
    if(playerJoined[0]) for(let player of playerJoined) MCEvent.emit('playerJoin', { name: player });
    if(playerLeft[0]) for(let player of playerLeft) MCEvent.emit('playerLeft', { name: player });
    oldPlayer = currentPlayer;
});

export default MCEvent;