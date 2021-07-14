const rainbowCode = ['§4', '§c', '§6', '§e', '§g', '§2', '§a', '§b', '§3', '§9', '§5', '§d'];

export function rainbowText(text) {
    const letter = text.replace(/§./g, '').split('');
    let newMessage = '', rainbowIndex = 0;
    letter.forEach(letter => {
        if(letter !== ' ') {
            newMessage += `${rainbowCode[rainbowIndex]}${letter}`;
            rainbowIndex + 1 >= rainbowCode.length ? rainbowIndex = 0 : rainbowIndex++;
        } else newMessage += ' ';
    })
    return newMessage;
};
