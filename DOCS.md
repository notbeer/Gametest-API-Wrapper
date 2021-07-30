<br />
<p align="center">
  <a href="https://github.com/notbeer/MCBE-GameTest-FrameWork">
    <img src="https://camo.githubusercontent.com/2cfb14ae080080e092ff1e37841ba04f7ee1ae6ac19be3503f995bf2e90c9479/68747470733a2f2f736372756d6f72672d776562736974652d70726f642e73332e616d617a6f6e6177732e636f6d2f64727570616c2f696e6c696e652d696d616765732f323031382d30392f556e6465727374616e64696e67253230616e642532304170706c79696e67253230536372756d2e706e67" alt="Logo" width="80" height="80">
  </a>
  
  <h3 align="center"><u>Pack Documentation</u></h3>

  <p align="center">
    Documentation on the pack built in classes, methods and more!
    <br />
    <br />
    <a href="https://github.com/notbeer/MCBE-GameTest-FrameWork/issues">Report Bug</a>
    ·
    <a href="https://github.com/notbeer/MCBE-GameTest-FrameWork/issues">Request Feature</a>
  </p>
</p>

<details open="open">
  <summary><h2 style="display: inline-block">Documentation</h2></summary>
  <ol>
    <li>
      <a href="#handler">Handlers</a>
      <ul>
        <li>
          <a href="#event-listeners">Event Listener</a>
          <ul>
          <li><a href="#gametest-events">GameTest Events</a></li>
          <li><a href="#custom-events">Custom Built in Events</a></li>
          </ul>
      </ul>
      <ul>
        <li><a href="#custom-commands">Custom Commands</a></li>
      </ul>
    </li>
    <li>
      <a href="#utils">Custom Utils</a>
      <ul>
        <li><a href="#run-command">Run Command</a></li>
      </ul>
      <ul>
        <li><a href="#run-commands">Run Commands</a></li>
      </ul>
      <ul>
        <li><a href="#find-entity-at-pos">Find Entity At Position</a></li>
      </ul>
      <ul>
        <li><a href="#find-tag">Find Tag</a></li>
      </ul>
      <ul>
        <li><a href="#get-score">Get Score</a></li>
      </ul>
      <ul>
        <li><a href="#get-players">Get Players</a></li>
      </ul>
      <ul>
        <li><a href="#get-item-count">Get Item Count</a></li>
      </ul>
      <ul>
        <li><a href="#set-tick-timeout">Set Tick Timeout</a></li>
      </ul>
      <ul>
        <li><a href="#set-tick-interval">Set Tick Interval</a></li>
      </ul>
      <ul>
        <li><a href="#clear-tick-interval">Clear Tick Interval</a></li>
      </ul>
    </li>
    <li>
      <a href="#misc">Miscellaneous</a>
      <ul>
        <li><a href="#floating-leaderboard">Floating Leaderboard</a></li>
      </ul>
      <ul>
        <li><a href="#conditional-function">Conditional Function</a></li>
      </ul>
    </li>
  </ol>
</details>

<h1 align="center" id="handler"><u>Handlers</u></h1>

## Event Listeners
- Class `MCEvent`
- Methods
    - **on(event: string, callback: () => void): void** - `Fires the callback on event.`
    - **once(event: string, callback: () => void): void** - `Fires the callback only ONCE on event.`
    - **removeListener(event: string): void** - `Removes an event listener.`
    - **removeAllListener(): void** - `Removes all of the event listeners.`
    - **totalListener(): object[]** - `Gets total listener for events(s)`

<div id="gametest-events">

- Available working GameTest events
    - **beforeMessage** - `This event fires before a chat message is broadcast or delivered.`
    - **onMessage** - `This event is triggered after a chat message has been broadcast or sent to players.`
    - **everyTick** - `This event fires every tick - which is 20 times per second.`
    - **effectAdded** - `This event fires when an effect, like poisoning, is added to an entity.`
    - **entityCreate** - `This event fires when a new entity is created.`
    - **weatherChange** - `This event will be triggered when the weather changes within Minecraft.`
</div>

<div id="custom-events">

- Custom built in events
    - **playerJoin** - `This event fires when a player joins the game.`
      ## Properties
      - **name** - `string`
      
        *Returns the players name*
      
    - **playerLeft** - `This event fires when a player leaves the game.`

      ## Properties
      - **name** - `string`
      
        *Returns the players name*
</div>

**Example script**:
```javascript
import { Commands } from 'Minecraft';
import MCEvent from "./lib/eventHandler.js";

MCEvent.on('onMessage', data => {
    Commands.run(`say : You said: ${data.message}`);
});
```
Example script 2:
```javascript
import { Commands } from 'Minecraft';
import MCEvent from "./lib/eventHandler.js";

MCEvent.once('beforeMessage', data => {
    Commands.run(`say : This will only be sent once before your message is sent in chat :P`);
});
```
Make sure to import `MCEvent` from the path [`scripts/modules/minecraft/lib/eventHandler.js`](https://github.com/notbeer/MCBE-GameTest-FrameWork/tree/main/scripts/modules/minecraft/lib/eventHandler.js) correctly
**NOTE: The callback data returned on the events will have the same properties as mentioned in [`Microsoft GameTest Docs`](https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/minecraft).**

## Custom Commands
- Class `Command`
- Method
    - **register(registration: object, callback: () => void): void** - `Register your custom command`
    - **getCommandRegistration(name: string): string** - `Get registration information of a specific command`
    - **getCommands(): string[]** - `Get a list of all the registered commands`

Make sure to import `Command` from the path [`scripts/modules/minecraft/lib/commandHandler.js`](https://github.com/notbeer/MCBE-GameTest-FrameWork/tree/main/scripts/modules/minecraft/lib/commandHandler.js) correctly

Registration Information requirements: 
```Typescript
interface registrationInformationInterface {
    private?: boolean, //Optional - If true the command won't be displayed upon "help" command execution
    cancelMessage?: boolean, //Optional - If true players text won't be sent in chat when they execute the command
    ownerOnly?: boolean, //Optional - If set to true player requires the "OWNER" tag to execute the command
    name: string, //Required - The command name
    aliases?: string[], //Optional - More command names. This basically gives you the ability to execute the same command under multiple names
    description?: string, //Optional - Description on what the command does
    usage?: string, //Optional - Explain the parameters of the commands if there are any
    example?: string[] //Optional - Type in the parameter options of the commands if there are any
};
```
Example script 1 from [`scripts/modules/minecraft/commands/test/ping.js`](https://github.com/notbeer/MCBE-GameTest-FrameWork/tree/main/scripts/modules/minecraft/commands/test/ping.js):
```javascript
import Command from "../../lib/commandHandler.js";
import { runCommand } from "../../lib/utils/others.js";

const registerInformation = {
    private: false,
    cancelMessage: true,
    ownerOnly: false,
    name: 'ping',
    aliases: ['ping2'],
    description: 'This is a test command',
    example: ['ping', 'ping2']
};

Command.register(registerInformation, (chatmsg, args) => {
    runCommand(`say pong!`);
});
```
Example script 2:
```javascript
import Command from "../../lib/commandHandler.js";
import { runCommand } from "../../lib/utils/others.js";

const registerInformation = {
    cancelMessage: true,
    name: 'beep',
    aliases: ['beep2'],
    description: 'This is a second test command',
    example: ['beep', 'beep2']
};

Command.register(registerInformation, (chatmsg, args) => {
    runCommand(`say boop!`);
});
```
**NOTE: At last go to [`scripts/modules/minecraft/commands/import.js`](https://github.com/notbeer/MCBE-GameTest-FrameWork/tree/main/scripts/modules/minecraft/commands/import.js) and import your custom command file path! There are few command imported already, use them as an reference.**

<h1 align="center" id="utils"><a href="https://github.com/notbeer/MCBE-GameTest-FrameWork/tree/main/scripts/modules/minecraft/lib/utils/others.js"><u>Custom Utils</u></a></h1>
<p align="center">To use these utils import functions from <a href="https://github.com/notbeer/MCBE-GameTest-FrameWork/tree/main/scripts/modules/minecraft/lib/utils/others.js"><strong>scripts/modules/minecraft/lib/utils/others.js</strong></a></p>

## Functions
<div id="run-command">

- **runCommand(command: string): void** - `Run a single string command`
  ```javascript
  import { runCommand } from './lib/utils/others.js';

  runCommand(`say : This is executed using runCommand function`);
  ```
</div>

<div id="run-commands">

- **runCommands(commandArray: string[]): void** - `Run an array of commands`
  ```javascript
  import { runCommands } from './lib/utils/others.js';

  let commandArray = [
      'say Hello 1',
      'say Hello 2',
      'say Hello 3',
      'say Hello 4'
  ];
  runCommands(commandArray);
  ```
</div>

<div id="find-entity-at-pos">

- **findEntityAtPos([x, y, z]: Number[], { dimension }: { dimension?: 'overworld' | 'nether' | 'the end' | undefined }): object[]** - `Gets an array of object with the entity data`
  ```javascript
  import { Commands } from 'Minecraft';
  import { findEntityAtPos } from './lib/utils/others.js';

  const entityData = findEntityAtPos([0, 5, 0]);
  if(entityData.error) return Commands.run(`say : No enitity found at that positon`);

  Commands.run(`say : Entity Location: ${entityData.list[0].location.x}, ${entityData.list[0].location.y}, ${entityData.list[0].location.z}`);
  ```
</div>

<div id="find-tag">

- **findTag({ entityRequirements }: { entityRequirements?: string }, { searchTag }: { searchTag: string }): boolean** - `Look if a tag exists within a entity`
  ```javascript
  import { Commands } from 'Minecraft';
  import { findTag } from './lib/utils/others.js';

  const output = findTag({ entityRequirements: `[type=player]` }, { searchTag: 'OWNER' });

  Commands.run(`say : A player in the world ${output ? 'has ' : 'doesn\'t have '} the tag 'OWNER'`);
  ```
</div>

<div id="get-score">

- **getScore({ objective }: { objective: string }, { entityRequirements, minimum, maximum }: { entityRequirements?: string, minimum?: number, maximum?: number }): string** - `Get the score of an entity in a scoreboard objective`
  ```javascript
  import { Commands } from 'Minecraft';
  import { findScore } from './lib/utils/others.js';

  const output = findScore({ objective: 'money' }, { entityRequirements: '[type=player,name="notbeer]', minimum: 0 });
  
  Commands.run(`say : The player has ${output}`);
  ```
</div>

<div id="get-players">

- **getPlayers(): string[]** - `Get all the online players in the world`
  ```javascript
  import { Commands } from 'Minecraft';
  import { getPlayers } from './lib/utils/others.js';

  const allPlayers = getPlayers();
  allPlayers.forEach(player => {
    Commands.run(`say : ${player} is in the world!`);
  });
  
  ```
</div>

<div id="get-item-count">

- **getItemCount({ player, itemIdentifier, itemData }: { player: string, itemIdentifier: string, itemData: number }): number** - `Get a specific item count in a players inventory`
  ```javascript
  import { Commands } from 'Minecraft';
  import { getItemCount } from './lib/utils/others.js';

  const itemCount = getItemCount({ player: 'ColoringEmy86', itemIdentifier: 'minecraft:diamond', itemData: 0 });

  Commands.run(`say ColoringEmy86 has ${itemCount} diamonds in their inventory!`)
  
  ```
</div>

<div id="set-tick-timeout">

- **setTickTimeout(callback: () => void, tick?: number): void** - `This function is similar to built in js "setTimeout" function, which is not supported by Gametest API. Instead of milliseconds as delay, we will use ticks. 20 ticks = 1 second`
  ```javascript
  import { Commands } from 'Minecraft';
  import { setTickTimeout } from './lib/utils/others.js';

  setTickTimeout(() => {
    Commands.run(`say : This has been executed 1 minute after the function has been executed`);
  }, 1200);
  ```
</div>

<div id="set-tick-interval">

- **setTickInterval(callback: () => void, tick?: number): void** - `This function is similar to built in js "setInterval" function, which is not supported by Gametest API. Instead of milliseconds as delay, we will use ticks. 20 ticks = 1 second`
  ```javascript
  import { Commands } from 'Minecraft';
  import { setTickInterval } from './lib/utils/others.js';

  setTickInterval(() => {
    Commands.run(`say : This is being broadcasted every 1 second in game!`);
  }, 20);
  ```
</div>

<div id="clear-tick-interval">

- **clearTickInterval(name?: CallableFunction): void** - `Clears the tick interval`
  ```javascript
  import { Commands } from 'Minecraft';
  import { setTickInterval, clearTickInterval } from './lib/utils/others.js';

  let i = 0;
  const interval = setTickInterval(() => {
    if(i >= 3) return clearTickInterval(interval);
    Commands.run(`say : This will stop after broadcasting 3 times`);
    i++;
  }, 20);
  ```
</div>

<h1 align="center" id="misc"><a href="https://github.com/notbeer/MCBE-GameTest-FrameWork/tree/main/scripts/modules/minecraft/lib/utils/misc.js"><u>Miscellaneous</u></a></h1>
<p align="center">To use these miscs import functions from <a href="https://github.com/notbeer/MCBE-GameTest-FrameWork/tree/main/scripts/modules/minecraft/lib/utils/misc.js"><strong>scripts/modules/minecraft/lib/utils/misc.js</strong></a></p>

## Functions

<div id="floating-leaderboard">

- **writeLeaderboard([x, y, z]: number[], objective: string, { displayLength, leaderboardHeading, leaderboardLayout }: { displayLength?: number, leaderboardHeading?: string, leaderboardLayout?: string }, { compressScore, formatScore }: { compressScore?: boolean, formatScore?: boolean }): void** - `Display scores of players highest to lowest on a entity name`
  ```javascript
  import { setTickInterval } from './lib/utils/others.js';
  import { writeLeaderboard } from './lib/utils/misc.js';

    setTickInterval(() => {
      writeLeaderboard([0, 6, 0], 'money',
          {
              displayLength: 10,
              leaderboardHeading: 'Money Leaderboard\nTop players with the most Money\n§r\n',
              leaderboardLayout: '§e#$(RANK) §b$(GAMERTAG) §f- §a$§c$(SCORE)'
          },
          {
              compressScore: true
          }
      );
  });
  ```
</div>

<div id="conditional-function">

- **mcFunction(commands: string[]): object** - `Execute an array of commands, supports conditional`
  ```javascript
  import { mcFunction } from "./lib/utils/misc.js";

  const functionArray = [
    'clear @a diamond 0 1',
    '%say I was able to successfully clear a diamond from someone in this world!'
  ];
  mcFunction(functionArray);
  ```
</div>
