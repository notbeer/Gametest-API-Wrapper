/**
 * Turn text into colored text that supports MCBE
 * @param {string} text The text you want to format to rainbow colors.
 * @returns {string}
 * @example rainbowText('This is rainbow text!');
 */
function rainbowText(text: string): string {
    const rainbowCode = ['§4', '§c', '§6', '§e', '§g', '§2', '§a', '§b', '§3', '§9', '§5', '§d'];
    const letter = text.replace(/§./g, '').split('');
    let newMessage = '', rainbowIndex = 0;
    letter.forEach(letter => {
        if(letter !== ' ') {
            newMessage += `${rainbowCode[rainbowIndex]}${letter}`;
            rainbowIndex + 1 >= rainbowCode.length ? rainbowIndex = 0 : rainbowIndex++;
        } else newMessage += ' ';
    });
    return newMessage;
};
/**
 * This will display in text in thousands, millions and etc... For ex: "1400 -> "1.4k", "1000000" -> "1M", etc...
 * @param {number} number The number you want to convert
 * @returns {string}
 * @example metricNumbers(15000);
 */
function metricNumbers(value: number): number | string {
    const types = ["", "k", "M", "G", "T", "P", "E", "Z", "Y"];
    const selectType = Math.log10(value) / 3 | 0;
    if(selectType == 0) return value;
    let scaled = value / Math.pow(10, selectType * 3);
    return scaled.toFixed(1) + types[selectType];
};
/**
 * Will format your number. For ex: "1400" -> "1,400", "1000000" -> "1,000,000", etc...
 * @param {number} number The number you want to convert
 * @returns {string}
 * @example thousandsSeparator(15000);
 */
function thousandsSeparator(value: number): string {
    if(typeof value !== 'number') return;
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
/**
 * Convert string to binary
 * @param text 
 * @returns {string}
 */
function textToBinary(text: string): string {
    return text.split('').map((char) => {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
};
/**
 * Convert binary to string
 * @param binary 
 * @returns {string}
 */
function binaryToText(binary: string): string {
    return binary.split(' ').map((char) => {
        return String.fromCharCode(parseInt(char, 2));
    }).join('');
};

export { rainbowText, metricNumbers, thousandsSeparator, textToBinary, binaryToText };