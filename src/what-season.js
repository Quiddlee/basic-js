const { NotImplementedError } = require('../extensions/index.js');
const { fake } = require('sinon');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

// const fakeDate = {
//     toString() {
//         return Date.prototype.toString.call(new Date());
//     },
//     [Symbol.toStringTag]: 'Date'
// };
//
// Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));

function getSeason(date) {
    if (!date) return 'Unable to determine the time of year!';
    if (!(date instanceof Date) || Object.values(date).length !== 0) throw new Error('Invalid date!');

    const month = date.getMonth();
    if (month === 11 || month === 0 || month === 1) return 'winter';
    if (month >= 2 && month < 5) return 'spring';
    if (month >= 5 && month < 8) return 'summer';
    if (month >= 8 && month < 11) return 'autumn';
}

// console.log(getSeason(fakeDate));

module.exports = {
    getSeason
};
