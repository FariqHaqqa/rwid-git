/**
 * @param {string} first //undefined
 * @param {string} middle // undefined
 * @param {string} last // undefined
 */
function generateFullName(first, middle, last){
    return `${first} ${middle} ${last}`;

}

console.info(`Your name is ${generateFullName ("Fariq", "Muhammad")}`);