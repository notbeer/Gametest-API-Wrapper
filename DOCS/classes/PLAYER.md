<br />
<h2 align="center">Player Documentation</h2>
<p align="center">
    <a href="https://github.com/notbeer/MCBE-GameTest-FrameWork/issues">Report Bug</a>
    ·
    <a href="https://github.com/notbeer/MCBE-GameTest-FrameWork/issues">Request Feature</a>
</p>
<br />
<ul>
    <li><a href="#getItemCount">getItemCount</a></li>
</ul>

<div id="getItemCount">

- **getItemCount(itemIdentifier: string, itemData: number, player?: string): { player: string, count: number }[] | null** - `Get an item count in players inventory`
    ```javascript
    import { Player, Server } from '../library/Minecraft.js';
    
    const count = getItemCount('minecraft:diamond', '0', 'notbeer');
    if(count) Server.broadcast(`notbeer has ${count[0]} diamonds in their inventory!`);
    ```
</div>