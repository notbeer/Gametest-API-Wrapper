<br />
<h2 align="center">Miscellaneous Documentation</h2>
<p align="center">
    <a href="https://github.com/notbeer/MCBE-GameTest-FrameWork/issues">Report Bug</a>
    ·
    <a href="https://github.com/notbeer/MCBE-GameTest-FrameWork/issues">Request Feature</a>
</p>
<br />
<ul>
    <li><a href="#displayRank">displayRank</a></li>
    <li><a href="#writeLeaderboard">writeLeaderboard</a></li>
</ul>

<br />
<div id="displayRank">

- **displayRank(chatmsg: beforeChat): void** - `Attaches ranks next to player names in chat. Make sure to tag the player using the command "/tag "player" add "$(ChatRank{Rank-Name: The Rank})"`
    ```javascript
    import { displayRank, Event } from '../library/Minecraft.js';
    
    Event.on('beforeMessage', data => {
        displayRank(data); //Will display in chat: [The Rank] <Player Gamertag> The players message
    });
    ```
</div>

<div id="writeLeaderboard">

- **writeLeaderboard([x, y, z]: [number, number, number], objective: string[], displayLength: number, { leaderboardHeading, leaderboardLayout }?: { leaderboardHeading: string, leaderboardLayout: string }, { compressScore, formatScore }?: { compressScore: boolean, formatScore: boolean }): void** - `Gets one of the entities at x y z coordinates and displays the leaderboard on its name`
    ```javascript
    import { writeLeaderboard } from '../library/Minecraft.js';
    
    writeLeaderboard([0, 5, 0], ['money', 'money2'], 10 
        {
            leaderboardHeading: 'Top 10 players scores added in objective "money" and "money2"',
            leaderboardLayout: '§e#$(RANK) §b$(GAMERTAG) §f- §a$§c$(SCORE)'
        },
        {
            compressScore: true
        }
    );
    ```
</div>
