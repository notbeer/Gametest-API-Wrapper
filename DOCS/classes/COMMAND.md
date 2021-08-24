<br />
<h2 align="center">Command Documentation</h2>
<p align="center">
    <a href="https://github.com/notbeer/MCBE-GameTest-FrameWork/issues">Report Bug</a>
    ·
    <a href="https://github.com/notbeer/MCBE-GameTest-FrameWork/issues">Request Feature</a>
</p>
<br />
<ul>
    <li><a href="#register">register</a></li>
    <li><a href="#getCommands">getCommands</a></li>
    <li><a href="#getCommandRegistration">getCommandRegistration</a></li>
</ul>

<br />
<p>Make sure to Import your command file in <a href="https://github.com/notbeer/Framework-Wrapper/blob/main/scripts/minecraft/commands/import-command.js">import-command.js</a> file</p>
<p>Register Information requirements:</p>

```typescript
interface registrationInformation {
    private?: boolean, //Optional - If true the command won't be displayed upon "help" command execution
    cancelMessage?: boolean, //Optional - If true players text won't be sent in chat when they execute the command
    name: string, //Required - The command name
    aliases?: Array<string>, //Optional - More command names. This basically gives you the ability to execute the same command under multiple names
    description?: string, //Optional - Description on what the command does
    usage?: string, //Optional - Explain the parameters of the commands if there are any
    example?: Array<string> //Optional - Type in the parameter options of the commands if there are any
};
```

<div id="register">

- **register(register: registerInformation, callback: (data: beforeChat, args: string[]) => void): void** - `Registers the command`
    ```javascript
    import { Command, Server } from '../library/Minecraft.js';
    
    const registerInformation = {
        private: false,
        cancelMessage: true,
        name: 'ping',
        aliases: ['Ping2'],
        description: 'This is a test command',
        example: ['ping']
    };

    Command.register(registerInformation, (data, args) => {
        Server.broadcast('Pong!');
    });
    ```
</div>

<div id="getCommands">

- **getCommands(): string[]** - `Get an array of registered commands`
    ```javascript
    import { Command } from '../library/Minecraft.js';
    
    Command.getCommands(); //Returns an array of all registered commands
    ```
</div>

<div id="getCommandRegistration">

- **getCommandRegistration(): registerInformation | null** - `Get the registration information the command was registered with`
    ```javascript
    import { Command } from '../library/Minecraft.js';
    
    Command.getCommandRegistration('ping'); //Returns the 'ping' commands registration information
    ```
</div>
