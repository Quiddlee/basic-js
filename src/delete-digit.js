const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    const arr = n.toString().split('');
    let highestNum = 0;

    for (let i = 0; i < arr.length; i++) {
        const currNum = +arr.filter((_, j) => j !== i).join('');
        if (currNum > highestNum) highestNum = currNum;
    }

    return highestNum;
}

console.log(deleteDigit(152));

module.exports = {
    deleteDigit
};
