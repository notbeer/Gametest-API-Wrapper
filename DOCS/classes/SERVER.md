<br />
<h2 align="center">Server Documentation</h2>
<p align="center">
    <a href="https://github.com/notbeer/MCBE-GameTest-FrameWork/issues">Report Bug</a>
    ·
    <a href="https://github.com/notbeer/MCBE-GameTest-FrameWork/issues">Request Feature</a>
</p>
<br />
<ul>
    <li><a href="#broadcast">broadcast</a></li>
    <li><a href="#findPlayer">findPlayer</a></li>
    <li><a href="#getPlayers">getPlayers</a></li>
    <li><a href="#getEntityAtPos">getEntityAtPos</a></li>
    <li><a href="#runCommand">runCommand</a></li>
    <li><a href="#runCommands">runCommands</a></li>
</ul>

<div id="broadcast">

- **broadcast(text: string, target?: string): { error: boolean, result: object }** - `Broadcasts a message in game chat`
    ```javascript
    import { Server } from '../library/Minecraft.js';
    
    Server.broadcast('Hello world!', '[name="notbeer"]');
    ```
</div>

<div id="findPlayer">

- **findPlayer(name: string): boolean** - `Searches for the player in the game`
    ```javascript
    import { Server } from '../library/Minecraft.js';
    
    const player = Server.findPlayer('notbeer');
    if(player) Server.broadcast('notbeer is in the game!');
    ```
</div>

<div id="getPlayers">

- **getPlayers(): string[]** - `Returns an array of online players in the game`
    ```javascript
    import { Server } from '../library/Minecraft.js';
    
    const players = Server.getPlayers();
    Server.broadcast(JSON.stringify(players));
    ```
</div>

<div id="getEntityAtPos">

- **getEntityAtPos([x, y, z]: [number, number, number], { dimension, ignoreType }?: { dimension: string, ignoreType: string[] }): getEntityAtPosReturn** - `Returns data on the entity`
    ```javascript
    import { Server } from '../library/Minecraft.js';
    
    const data = Server.getEntityAtPos([0, 5, 0], { dimension: 'the nether', ignoreType: ['minecraft:player'] })
    Server.broadcast(JSON.stringify(data));
    ```
</div>

<div id="runCommand">

- **runCommand(command: string): { error: boolean, result: object }** - `Runs a command in game`
    ```javascript
    import { Server } from '../library/Minecraft.js';
    
    Server.runCommand('say Hello World!');
    ```
</div>

<div id="runCommands">

- **runCommands(commands: string[]): { error: boolean }** - `Runs an array of command in game. Supports conditional`
    ```javascript
    import { Server } from '../library/Minecraft.js';
    
    Server.runCommands([
        'clear @a diamond 0 0',
        '%say Someone in the world has a diamond!' //Put '%' before your command to make it conditional. So, it only executes IF the command before it successfully executed!
    ]);
    ```
</div>