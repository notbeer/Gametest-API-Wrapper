/**
 * @function compressNum() - This will display in text in thousands, millions and etc... For ex: "1400 -> "1.4k", "1000000" -> "1M", etc...
 * @param {number} number - The number you want to convert
 * @returns Converted number as string
 */
function compressNum(number){
    const types = ["", "k", "M", "G", "T", "P", "E", "Z", "Y"];
    const selectType = Math.log10(number) / 3 | 0;
    if(selectType == 0) return number;
    let scaled = number / Math.pow(10, selectType * 3);
    return scaled.toFixed(1) + types[selectType];
};

/**
 * @function newDateTime() - Get Date and Time
 * @returns Property 'date' and 'time'
 */
function newDateTime() {
    var today = new Date();
    return {
        date: `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`,
        time: `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
    };
};

export { compressNum, newDateTime };