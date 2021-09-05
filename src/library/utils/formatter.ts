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
 * @example compressNumber(15000);
 */
function compressNumber(value: number): number | string {
    const types = ["", "k", "M", "G", "T", "P", "E", "Z", "Y"];
    const selectType = Math.log10(value) / 3 | 0;
    if(selectType == 0) return value;
    let scaled = value / Math.pow(10, selectType * 3);
    return scaled.toFixed(1) + types[selectType];
};
/**
 * Will format your number. For ex: "1400" -> "1,400", "1000000" -> "1,000,000", etc...
 * @param {number} number 
 * @returns {string}
 * @example formatNumber(15000);
 */
function formatNumber(value: number): string {
    if(typeof value !== 'number') return;
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
/**
 * Convert seconds, minutes, hours, days and week to milliseconds and vice versa
 * @param {string | number} value string time support: second, minute, hour, day, week.
 * @param {boolean} [compact] Return time string in a compact format
 * @returns {string | number | undefined}
 * @example MS('2 days')  //Output: 172800000
 *  MS('1d')      //Output: 86400000
 *  MS('10h')     //Output: 36000000
 *  MS('2.5 hrs') //Output: 9000000
 *  MS('2h')      //Output: 7200000
 *  MS('1m')      //Output: 60000
 *  MS('5s')      //Output: 5000
 *  MS('1y')      //Output: 31557600000
 *  MS('100')     //Output: 100
 *  MS('-3 days') //Output: -259200000
 *  MS('-1h')     //Output: -3600000
 *  MS('-200')    //Output: -200
 *
 *  //Convert from Milliseconds
 *
 *  MS(86400000, { compact: true });  //Output: 1d
 *  MS(86400000);                     //Output: 1 day
 *  MS(172800000, { compact: true }); //Output: 2d
 *  MS(172800000);                    //Output: 2 days
 */
function MS(value: string | number, { compact }: { compact?: boolean } = {}): any {
    if(typeof value === 'string') return timeToMs(value);
    if(typeof value === 'number') return msToTime(value, compact ? true : false);
};
/**
 * 
 * @param {string} string Time to ms
 * @returns {number}
 */
function timeToMs(value: string): number {
    if(!/^-?\s?\d*\.?\d*?\s?((years*?|yrs*?)|(weeks*?)|(days*?)|(hours*?|hrs*?)|(minutes*?|mins*?)|(seconds*?|secs*?)|(milliseconds*?|msecs*?|ms)|[smhdwy])$/.test(value)) return;
    const number = parseFloat(value.replace(/[^-.0-9]+/g, ''));
    if(/\d+(?=\s?(milliseconds?|msecs?|ms))/.test(value)) return number;
    else if(/\d+(?=\s?s)/.test(value)) return number * 1000;
    else if(/\d+(?=\s?m)/.test(value)) return number * 60000;
    else if(/\d+(?=\s?h)/.test(value)) return number * 3.6e+6;
    else if(/\d+(?=\s?d)/.test(value)) return number * 8.64e+7;
    else if(/\d+(?=\s?w)/.test(value)) return number * 6.048e+8;
    else if(/\d+(?=\s?y)/.test(value)) return number * 3.154e+10;
};
/**
 * 
 * @param {number} ms Ms to Time
 * @param {boolean} [compact] Compact time format
 * @returns {string}
 */
function msToTime(ms: number, compact?: boolean): string {
    let negative = Math.sign(ms) === -1, absMs = Math.abs(ms);
    let seconds = absMs / 1000, minutes = absMs / 60000, hours = absMs / 3.6e+6, days = absMs / 8.64e+7, weeks = absMs / 6.048e+8;
    if(absMs < 1000) return plural('ms', 'millisecond', negative, absMs, compact);
    else if(seconds < 60) return plural('s', 'second', negative, seconds, compact);
    else if(minutes < 60) return plural('m', 'minute', negative, minutes, compact);
    else if(hours < 24) return plural('h', 'hour', negative, hours, compact);
    else if(days < 7) return plural('d', 'day', negative, days, compact);
    else return plural('w', 'week', negative, weeks, compact);
};
function plural(shortType: string, type: string, negative: boolean, number: number, compact: boolean): string {
    number = Math.round(number);
    let origNumb = `${negative ? '-' : ''}${number}`;
    if(compact) return `${origNumb}${shortType}`;
    if(number > 1) return `${origNumb} ${type}s`;
    else return `${origNumb} ${type}`;
};

export { rainbowText, compressNumber, formatNumber, MS };