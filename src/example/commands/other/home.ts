import { Server } from '../../../library/Minecraft.js';

const registerInformation = {
    cancelMessage: true,
    name: 'home',
    description: 'Use this command to list/set/remove/warp to home',
    usage: '<list | set | remove | warp> [home name]',
    example: [
        'home list',
        'home set <home name>',
        'home remove <home name>',
        'home warp <home name>'
    ]
};

Server.command.register(registerInformation, (chatmsg, args) => {
    const data = Server.runCommand(`tag "${chatmsg.sender.nameTag}" list`);
    const coordFormat = /(?<=[x-zX-Z]: )(-\d+|\d+)/g;
    const homeName = args.slice(1).join(' ').toLowerCase();
    const homeRegex = new RegExp(`\\$\\(Home{Home-Name: ${homeName}, X: (-\\d+|\\d+), Y: (-\\d+|\\d+), Z: (-\\d+|\\d+)(.*)}\\)`);

    const findHomeNames = /(?<=\$\(Home{Home-Name: ).+?(?=, X: (-\d+|\d+), Y: (-\d+|\d+), Z: (-\d+|\d+)}\))/g;
    const findXYZ = `${data.statusMessage.match(homeRegex)}`.match(coordFormat);

    let listOptions = ['list', 'all'];let setOptions = ['set', 'add'];let removeOptions = ['remove', 'unadd'];let warpOptions = ['warp', 'tp'];
    if(!args.length || listOptions.includes(args[0])) {
        const allHomes = data.statusMessage.match(findHomeNames);
        return Server.message.broadcast(`${allHomes ? `§bYou have total of §e${allHomes.length} §bhomes.\nHere are the list of homes: §a${allHomes.join('§r, §a')}` : '§cIt seems like you haven\'t set any home, yet-'}`, chatmsg.sender.nameTag);
    } else if(setOptions.includes(args[0])) {
        if(!args[1]) return Server.message.broadcast('§cPlease type a UNIQUE home name to set!', chatmsg.sender.nameTag);
        if(homeName.match(coordFormat)) return Server.message.broadcast('§cYou may not indentify your home name in a coordinate format!', chatmsg.sender.nameTag);
        if(data.statusMessage.match(homeRegex)) return Server.message.broadcast('§cYou already have a home set with that name!', chatmsg.sender.nameTag);

        Server.runCommand(`tag "${chatmsg.sender.nameTag}" add "$(Home{Home-Name: ${homeName}, X: ${Math.trunc(chatmsg.sender.location.x)}, Y: ${Math.trunc(chatmsg.sender.location.y)}, Z: ${Math.trunc(chatmsg.sender.location.z)}})"`);
        return Server.message.broadcast(`§bYou have set a home with the name §a${homeName} §bat§r: §a${Math.trunc(chatmsg.sender.location.x)}§r, §a${Math.trunc(chatmsg.sender.location.y)}§r, §a${Math.trunc(chatmsg.sender.location.z)}`, chatmsg.sender.nameTag);
    } else if(removeOptions.includes(args[0])) {
        if(!args[1]) return Server.message.broadcast('§cPlease type a home name to remove!', chatmsg.sender.nameTag);
        if(!data.statusMessage.match(homeRegex)) return Server.message.broadcast("§cYou don't have a home with that name!", chatmsg.sender.nameTag);
        else {
            Server.runCommand(`tag "${chatmsg.sender.nameTag}" remove "$(Home{Home-Name: ${homeName}, X: ${findXYZ[0]}, Y: ${findXYZ[1]}, Z: ${findXYZ[2]}})"`);
            return Server.message.broadcast(`§bSuccessfully removed home with the name §a${homeName} §bat §a${findXYZ[0]}§r, §a${findXYZ[1]}§r, §a${findXYZ[2]}`, chatmsg.sender.nameTag);
        };
    } else if(warpOptions.includes(args[0])) {
        if(!args[1]) return Server.message.broadcast('§cPlease type a home name to warp to!', chatmsg.sender.nameTag);
        if(!data.statusMessage.match(homeRegex)) return Server.message.broadcast("§cYou don't have a home with that name!", chatmsg.sender.nameTag);

        Server.runCommand(`execute "${chatmsg.sender.nameTag}" ~~~ tp @s ${findXYZ[0]} ${findXYZ[1]} ${findXYZ[2]}`);
        return Server.message.broadcast(`§bYou have been teleported to §a${findXYZ[0]}§r, §a${findXYZ[1]}§r, §a${findXYZ[2]}`, chatmsg.sender.nameTag);
    } else return Server.message.broadcast("§cThat's not a valid argument!", chatmsg.sender.nameTag);
});