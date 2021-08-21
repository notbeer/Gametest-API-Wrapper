import { World } from 'Minecraft';
import Server from '../../server.js';

import EventEmitter from './eventEmitter.js';
/**
 * @type {import('../../../typings/classes/EventEmitter').EventEmitter}
 */
const Event = new EventEmitter();

World.events.beforeChat.subscribe(data => Event.emit('beforeMessage', data));
World.events.chat.subscribe(data => Event.emit('message', data));
World.events.tick.subscribe(() => Event.emit('tick', null));
World.events.addEffect.subscribe(data => Event.emit('entityEffected', data));
World.events.createEntity.subscribe(data => Event.emit('entityCreate', data));
World.events.changeWeather.subscribe(data => Event.emit('weatherChange', data));

let oldPlayer = [];
World.events.createEntity.subscribe(data => {
    if(data.entity.id !== 'minecraft:player') return;
    let playerJoined = Server.getPlayers().filter(current => !oldPlayer.some(old => current === old));
    if(playerJoined.includes(data.entity.nameTag)) Event.emit('playerJoin', { name: data.entity.nameTag, ...data.entity });
});
World.events.tick.subscribe(() => {
    let currentPlayer = Server.getPlayers();
    let playerLeft = oldPlayer.filter(old => !currentPlayer.some(current => old === current));
    for(let player of playerLeft) Event.emit('playerLeave', { name: player });
    oldPlayer = currentPlayer;
});

export default Event;