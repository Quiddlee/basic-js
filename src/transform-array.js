const { NotImplementedError } = require('../extensions/index.js');
const { assert } = require('chai');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');

    const res = [ ...arr ];
    const controls = {
        '--discard-next': (i, arr) => {
            if (!arr[i + 1]) return arr.splice(i, 1);
            arr.splice(i, 2);
        },
        '--discard-prev': (i, arr) => {
            if (!arr[i - 1]) return arr.splice(i, 1);
            arr.splice(i - 1, 2);
        },
        '--double-next': (i, arr) => {
            if (!arr[i + 1]) return arr.splice(i, 1);
            arr[i] = arr[i + 1];
        },
        '--double-prev': (i, arr) => {
            if (!arr[i - 1]) return arr.splice(i, 1);
            arr[i] = arr[i - 1];
        },
    };

    res.forEach((ctrl, i, arr) => {
        if (ctrl in controls) controls[ctrl](i, arr);
    });

    return res.filter(e => !(e in controls));
}

module.exports = {
    transform
};
