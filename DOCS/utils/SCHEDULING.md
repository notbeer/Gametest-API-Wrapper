<br />
<h2 align="center">Scheduling Documentation</h2>
<p align="center">
    <a href="https://github.com/notbeer/MCBE-GameTest-FrameWork/issues">Report Bug</a>
    ·
    <a href="https://github.com/notbeer/MCBE-GameTest-FrameWork/issues">Request Feature</a>
</p>
<br />
<ul>
    <li><a href="#setTickTimeout">setTickTimeout</a></li>
    <li><a href="#setTickInterval">setTickInterval</a></li>
    <li><a href="#clearTickTimeout">clearTickTimeout</a></li>
    <li><a href="#clearTickInterval">clearTickInterval</a></li>
</ul>

<br />
<div id="setTickTimeout">

- **setTickTimeout(handler: String | Function, timeout?: number, ...args?: any[]): Number** - `Delay executing a function`
    ```javascript
    import { setTickTimeout, Server } from '../library/Minecraft.js';
    
    function broadcast(message) {
        Server.broadcast(message)
    };
    setTickTimeout(broadcast, 20, 'This message is being broadcasted ONCE in 1 second!');
    ```
</div>

<div id="setTickInterval">

- **setTickInterval(handler: String | Function, timeout?: number, ...args?: any[]): Number** - `Delay executing a function, REPEATEDLY`
    ```javascript
    import { setTickInterval, Server } from '../library/Minecraft.js';
    
    function broadcast(message) {
        Server.broadcast(message)
    };
    setTickInterval(broadcast, 20, 'This message is being broadcasted every 1 second!');
    ```
</div>

<div id="clearTickTimeout">

- **clearTickTimeout(handle: Number): void** - `Deletes a timeout function`
    ```javascript
    import { clearTickTimeout, setTickTimeout, Server } from '../library/Minecraft.js';
    
    let timeout = setTickTimeout(() => {
        Server.broadcast('This message is being broadcasted ONCE in 1 second!')
    }, 20);
    clearTickTimeout(timeout);
    
    ```
</div>

<div id="clearTickInterval">

- **clearTickInterval(handle: Number): void** - `Deletes a interval function`
    ```javascript
    import { clearTickInterval, setTickInterval, Server } from '../library/Minecraft.js';
    
    let count = 0;
    let interval = setTickInterval(() => {
        Server.broadcast('This message will broadcast only 5 times in 5 seconds!');
        count++;
    }, 20);
    if(count >= 5) clearTickTimeout(timeout);
    
    ```
</div>