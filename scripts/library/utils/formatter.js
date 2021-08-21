/**
 * Turn text into colored text that supports MCBE
 * @param {String} text The text you want to format to rainbow colors.
 * @returns {String}
 */
function rainbowText(text) {
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
 * @param {Number} number The number you want to convert
 * @returns {String}
 */
function compressNumber(number){
    const types = ["", "k", "M", "G", "T", "P", "E", "Z", "Y"];
    const selectType = Math.log10(number) / 3 | 0;
    if(selectType == 0) return number;
    let scaled = number / Math.pow(10, selectType * 3);
    return scaled.toFixed(1) + types[selectType];
};
/**
 * Will format your number. For ex: "1400" -> "1,400", "1000000" -> "1,000,000", etc...
 * @param {Number} number 
 * @returns {String}
 */
function formatNumber(number) {
    if(typeof number !== 'number') return;
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
/**
 * Convert seconds, minutes, hours, days and week to milliseconds and vice versa
 * @param {String | Number} value string time support: second, minute, hour, day, week.
 * @param compact Return time string in a compact format
 * @returns {String | Number}
 */
function MS(value, { compact } = {}) {
    if(typeof value === 'string') return timeToMs(value);
    if(typeof value === 'number') return msToTime(value, compact ? true : false);
};
/**
 * 
 * @param {String} string Time to ms
 * @returns {Number}
 */
function timeToMs(string) {
    if(!/^-?\s?\d*\.?\d*?\s?((years*?|yrs*?)|(weeks*?)|(days*?)|(hours*?|hrs*?)|(minutes*?|mins*?)|(seconds*?|secs*?)|(milliseconds*?|msecs*?|ms)|[smhdwy])$/.test(string)) return;
    const number = parseFloat(string.replace(/[^-.0-9]+/g, ''));
    if(/\d+(?=\s?(milliseconds?|msecs?|ms))/.test(string)) return number;
    else if(/\d+(?=\s?s)/.test(string)) return number * 1000;
    else if(/\d+(?=\s?m)/.test(string)) return number * 60000;
    else if(/\d+(?=\s?h)/.test(string)) return number * 3.6e+6;
    else if(/\d+(?=\s?d)/.test(string)) return number * 8.64e+7;
    else if(/\d+(?=\s?w)/.test(string)) return number * 6.048e+8;
    else if(/\d+(?=\s?y)/.test(string)) return number * 3.154e+10;
};
/**
 * 
 * @param {Number} ms Ms to Time
 * @param {Boolean} compact Compact time format
 * @returns {String}
 */
function msToTime(ms, compact) {
    let absMs = Math.abs(ms);
    let seconds = absMs / 1000, minutes = absMs / 60000, hours = absMs / 3.6e+6, days = absMs / 8.64e+7, weeks = absMs / 6.048e+8;
    if(absMs < 1000) return compact ? `${absMs}ms` : plural(absMs, 'millisecond', ms);
    else if(seconds < 60) return compact ? `${seconds}s` : plural(seconds, 'second', ms);
    else if(minutes < 60) return compact ? `${minutes}m` : plural(minutes, 'minute', ms);
    else if(hours < 24) return compact ? `${hours}h` : plural(hours, 'hour', ms);
    else if(days < 7) return compact ? `${days}d` : plural(days, 'day', ms);
    else return compact ? `${weeks}w` : plural(weeks, 'week', ms);
};
function plural(number, type, ms) {
    let negative = false;
    if(Math.sign(ms) === -1) negative = true;
    if(number > 1) return `${negative ? '-' : ''}${number} ${type}s`;
    else return `${negative ? '-' : ''}${number} ${type}`
};

export { rainbowText, compressNumber, formatNumber, MS };