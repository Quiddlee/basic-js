const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
    const sample = parseFloat(sampleActivity);
    if (
        !sampleActivity
        || typeof sampleActivity !== 'string'
        || sample <= 0
        || sample > MODERN_ACTIVITY
        || isNaN(sample)
    ) return false;
    return Math.ceil((Math.log(sample / MODERN_ACTIVITY)) / -(1.2096809 * 10 ** -4));
}

console.log(dateSample('1'));
// ln(15/8.0)1.22×10−4 yr−1=5.2×103 yr

module.exports = {
    dateSample
};
