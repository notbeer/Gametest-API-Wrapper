<br />
<h2 align="center">Entity Documentation</h2>
<p align="center">
    <a href="https://github.com/notbeer/MCBE-GameTest-FrameWork/issues">Report Bug</a>
    ·
    <a href="https://github.com/notbeer/MCBE-GameTest-FrameWork/issues">Request Feature</a>
</p>
<br />
<ul>
    <li><a href="#findTag">findTag</a></li>
    <li><a href="#getTags">getTags</a></li>
    <li><a href="#getScore">getScore</a></li>
</ul>

<div id="findTag">

- **findTag(searchTag: string, target?: string): boolean** - `Search player with a specific tag in the game`
    ```javascript
    import { Entity, Server } from '../library/Minecraft.js';
    
    const player = findTag("Owner", '[type=player]');
    if(player) Server.broadcast('Someone in the world has the "Owner" tag!')
    ```
</div>

<div id="getTags">

- **getTags(target?: string): string[]** - `Get all the tags on the entity`
    ```javascript
    import { Entity, Server } from '../library/Minecraft.js';
    
    const allTags = getTags('[type=player]');
    Server.broadcast(`All the player in world has the tag(s): ${JSON.stringify(allTags)}`)
    ```
</div>

<div id="getScore">

- **getScore(objective: string, target?: string, { minimum, maximum }?: { minimum: number, maximum: number }): number | null** - `Get the score of an entity on a specific objective`
    ```javascript
    import { Entity, Server } from '../library/Minecraft.js';
    
    const score = getScore(money, '[type=player,name="notbeer"]');
    Server.broadcast(`notbeer has score ${score} in objective "money"`);
    ```
</div>