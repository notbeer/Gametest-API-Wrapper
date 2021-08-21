import Server from './server.js';

class PlayerBuilder {
    getItemCount(itemIdentifier, itemData, player) {
        let itemCount = [];
        const data = Server.runCommand(`clear ${player ? `"${player}"` : '@a'} ${itemIdentifier} ${itemData ? itemData : '0'} 0`);
        if(data.error) return itemCount;
        data.result.playerTest.forEach(element => {
            const count = element.match(/(?<=.*?\().+?(?=\))/)[0];
            const player = element.match(/^.*(?= \(\d+\))/)[0];
            itemCount.push({ player, count });
        });
        return itemCount ? itemCount : [];
    };
};

/**
 * @type {import('../typings/classes/PlayerBuilder').PlayerBuilder}
 */
const Player = new PlayerBuilder();
export default Player;