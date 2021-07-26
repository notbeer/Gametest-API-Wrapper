import { World } from 'Minecraft';
import eventBuilder from "./classes/eventBuilder.js";
const MCEvent = new eventBuilder();

World.events.beforeChat.subscribe(data => MCEvent.emit('beforeMessage', data));
World.events.chat.subscribe(data => MCEvent.emit('onMessage', data));

World.events.tick.subscribe(() => MCEvent.emit('everyTick', null));
World.events.addEffect.subscribe((data) => MCEvent.emit('effectAdded', data));
World.events.createEntity.subscribe((data) => MCEvent.emit('entityCreate', data));
World.events.changeWeather.subscribe((data) => MCEvent.emit('weatherChange', data));

export default MCEvent;