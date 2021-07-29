import Command from "../../lib/commandHandler.js";
import { mcFunction } from "../../lib/utils/misc.js";
import { getItemCount, runCommand } from "../../lib/utils/others.js";

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

Command.register(registerInformation, (chatmsg, args) => {
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

    function findItem() {
        let item;
        sellableItems.forEach(element => {
            if(element.callName.map(v => v.toLowerCase()).includes(option)) return item = element.item;
        });
        return item;
    };

    function sell(item) {
        let sold = false;
        sellableItems.some(v => {
            if(item && v.item !== item) return;
            const itemCount = getItemCount({ player: chatmsg.sender.name, itemIdentifier: item ? item : v.item, itemData: 0 });
            mcFunction([
                `scoreboard players add "${chatmsg.sender.name}" money ${v.price * itemCount}`,
                `%clear "${chatmsg.sender.name}" ${v.item} 0 ${itemCount}`,
                `%tellraw "${chatmsg.sender.name}" {"rawtext":[{"text":"§bYou have sold §ex${itemCount} ${v.displayName}§b for §a$${v.price * itemCount}"}]}`
            ]);
            if(itemCount !== '0') sold = true;
        });
        if(!sold) return runCommand(`tellraw "${chatmsg.sender.name}" {"rawtext":[{"text":"§cYou don't have any sellable items in your inventory!"}]}`);
    };

    const item = findItem();
    if(['everything', 'all', 'inventory'].includes(option)) return sell();
    else if(item) sell(item);
    else return runCommand(`tellraw "${chatmsg.sender.name}" {"rawtext":[{"text":"§cPlease input an correct argument!"}]}`);
});