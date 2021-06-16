import { findTagOnPlayer } from '../others/cache.js';

export function rainbowText(chatmsg) {
    if(!findTagOnPlayer(chatmsg, 'rainbowText')) return; //This is how we check if the player has tag 'rainbowText'
    const msgArray = chatmsg.message.split(' ');
    const rainbowCode = ['§4', '§c', '§6', '§e', '§g', '§2', '§a', '§b', '§3', '§9', '§5', '§d'];
    let newMessage = '';
    let rainbowIndex = 0;
    function generateRainbowText(text) {
        text = text.replace(/§./g, '');
        for(let i = 0; i < text.length; i++) {
            newMessage += `${rainbowCode[rainbowIndex]}${text[i]}`;
            rainbowIndex + 1 >= rainbowCode.length ? rainbowIndex = 0 : rainbowIndex++;
        };
        return newMessage = `${newMessage} `;
    };
    for(let i = 0; i < msgArray.length; i++) generateRainbowText(msgArray[i]);
    return chatmsg.message = newMessage; //This will basically edit the players message with rainbow text and display the rainbow text in chat
};