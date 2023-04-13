const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let res = '';
    let left = 0;
    let right = 1;
    let count = 1;

    while (left < str.length) {
        const initialChar = str[left];
        const nextChar = str[right];

        if (initialChar === nextChar) {
            count++;
        } else if (initialChar !== nextChar) {
            res += `${ count > 1 ? count : '' }${ initialChar }`;
            left = right;
            count = 1;
        }

        right++;
    }

    return res;
}

console.log(encodeLine('aabbbc'));

module.exports = {
    encodeLine
};
