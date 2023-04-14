const { NotImplementedError } = require('../extensions/index.js');
const domain = require('domain');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    if (domains.length === 0) return {};
    const res = {};
    domains.push(domains[0].slice(domains[0].lastIndexOf('.') + 1));

    for (let i = 0; i < domains.length; i++) {
        for (let j = 0; j < domains.length - 1; j++) {
            if (domains[j].match(domains[i])) {
                const dom = `.${ domains[i].split('.').reverse().join('.') }`;
                res[dom] ? res[dom] += 1 : res[dom] = 1;
            }
        }
    }

    return res;
}

console.log(getDNSStats([ 'code.yandex.ru', 'music.yandex.ru', 'yandex.ru' ]));

module.exports = {
    getDNSStats
};
