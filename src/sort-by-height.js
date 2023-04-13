const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    const res = [ ...arr.filter(
        num => num !== -1
    ).sort(
        (prev, curr) => prev - curr)
    ];
    arr.forEach(
        (num, i) => num === -1 && res.splice(i, 0, -1));
    return res;
}

console.log(sortByHeight([ -1, 150, 190, 170, -1, -1, 160, 180 ]));

module.exports = {
    sortByHeight
};
