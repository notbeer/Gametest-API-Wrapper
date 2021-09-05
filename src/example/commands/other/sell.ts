import { Server } from "../../../library/Minecraft.js";

const registerInformation = {
    cancelMessage: true,
    name: 'sell',
    description: 'Sell command',
    usage: '<everything | item name>',
    example: [
        'sell everything',
        'sell diamond'
    ]
};

Server.command.register(registerInformation, (chatmsg, args) => {
    Server.runCommands([
        'clear "ColoringEmy86" diamond 0 0',
        '%say beer has a Diamond!',
        'say idk'
    ]);
    const option = args.join(' ').toLowerCase();
    const sellableItems = [
        {
            displayName: '§8Coal', //Item display name in chat
            callName: ['coal'], //One of the things from the array a user must sent to sell this specific type item!
            item: 'minecraft:coal', //The item identifier
            price: 50 //The item sell price
        },
        {
            displayName: '§gGold Ingot',
            callName: ['gold', 'gold ingot'],
            item: 'minecraft:gold_ingot',
            price: 150
        },
        {
            displayName: '§7Iron Ingot',
            callName: ['iron', 'iron ingot'],
            item: 'minecraft:iron_ingot',
            price: 300
        },
        {
            displayName: '§bDiamond',
            callName: ['diamond'],
            item: 'minecraft:diamond',
            price: 400
        },
        {
            displayName: '§aEmerald',
            callName: ['emerald'],
            item: 'minecraft:emerald',
            price: 600
        },
        {
            displayName: '§dNetherite Ingot',
            callName: ['netherite', 'netherite ingot'],
            item: 'minecraft:netherite_ingot',
            price: 1000
        },
    ];

    function findItem(): string {
        let item: string;
        sellableItems.forEach(element => {
            if(element.callName.map(v => v.toLowerCase()).includes(option)) return item = element.item;
        });
        return item;
    };

    function sell(item?: string) {
        let sold = false;
        sellableItems.some(v => {
            if(item && v.item !== item) return;
            const itemCount = Server.player.getItemCount(item ? item : v.item, 0, chatmsg.sender.nameTag)[0]?.count || 0;
            if(itemCount !== 0) sold = true;
            Server.runCommands([
                `scoreboard players add "${chatmsg.sender.nameTag}" money ${v.price * itemCount}`,
                `%clear "${chatmsg.sender.nameTag}" ${v.item} 0 ${itemCount}`,
                `%tellraw "${chatmsg.sender.nameTag}" {"rawtext":[{"text":"§bYou have sold §ex${itemCount} ${v.displayName}§b for §a$${v.price * itemCount}"}]}`
            ]);
        });
        if(!sold) return Server.broadcast("§cYou don't have any sellable items in your inventory!", chatmsg.sender.nameTag);
    };

    const item = findItem();
    if(['everything', 'all', 'inventory'].includes(option)) sell();
    else if(item) sell(item);
    else Server.broadcast("§cPlease input an correct argument!", chatmsg.sender.nameTag);
});