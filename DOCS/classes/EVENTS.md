<br />
<h2 align="center">Event Documentation</h2>
<p align="center">
    <a href="https://github.com/notbeer/MCBE-GameTest-FrameWork/issues">Report Bug</a>
    ·
    <a href="https://github.com/notbeer/MCBE-GameTest-FrameWork/issues">Request Feature</a>
</p>
<br />

# Events
- **beforeMessage** - `This event fires before a chat message is broadcast or delivered.`
- **message** - `This event is triggered after a chat message has been broadcast or sent to players.`
- **tick** - `This event fires every tick - which is 20 times per second.`
- **effectAdded** - `This event fires when an effect, like poisoning, is added to an entity.`
- **entityCreate** - `This event fires when a new entity is created.`
- **weatherChange** - `This event will be triggered when the weather changes within Minecraft.`
- **playerJoin** - `This event is triggered when a player joins the world.`
- **playerLeave** - `This event is triggered when a player leaves the world.`

<br /><br />

# Methods
<ul>
    <li><a href="#on">on</a></li>
    <li><a href="#once">once</a></li>
    <li><a href="#off">off</a></li>
    <li><a href="#removeAllListeners">removeAllListeners</a></li>
    <li><a href="#setMaxListeners">setMaxListeners</a></li>
</ul>

<br />
<div id="on">

- **on(eventName: string, listener: (...args: any[]) => void)** - `Listens for an event`
    ```javascript
    import { Event, Server } from '../library/Minecraft.js';
    
    function messageEvent(data) {
        Server.broadcast(JSON.stringify(data));
    };
    Event.on('message', messageEvent);
    ```
</div>

<div id="once">

- **once(eventName: string, listener: (...args: any[]) => void)** - `Listens for an event only ONCE`
    ```javascript
    import { Event, Server } from '../library/Minecraft.js';
    
    function messageEvent(data) {
        Server.broadcast(JSON.stringify(data));
    };
    Event.once('message', messageEvent);
    ```
</div>

<div id="off">

- **off(eventName: string, listener: (...args: any[]) => void)** - `Stops listening for an event`
    ```javascript
    import { Event, Server } from '../library/Minecraft.js';
    
    function messageEvent(data) {
        Server.broadcast(JSON.stringify(data));
    };
    
    Event.off('message', messageEvent);
    ```
</div>

<div id="removeAllListeners">

- **removeAllListeners(eventName?: string): void** - `Removes all the listener(s)`
    ```javascript
    import { Event } from '../library/Minecraft.js';
    
    Event.removeAllListeners('message');
    ```
</div>

<div id="setMaxListeners">

- **setMaxListeners(number: number): void** - `Increases or decreases the amount of events you can listen for. Default is 10`
    ```javascript
    import { Event } from '../library/Minecraft.js';
    
    Event.setMaxListeners(20);
    ```
</div>