const { NotImplementedError } = require('../extensions/index.js');

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
    throw new NotImplementedError('Not implemented');

    // const res = {};
    // const splited = [];
    //
    // domains.forEach(domain => {
    //     splited.push(domain.split('.'));
    //     splited.sort();
    // });

    // for (let i = 0; i < splited.length; i++) {
    //     if (domains.find(e => {
    //         console.log(e, splited[i].join('.'));
    //         return e === splited[i].join('.');
    //     })) {
    //         const str = `.${ splited[i].reverse().join('.') }`;
    //         res[str] = res[str] ? res[str]++ : res[str] = 1;
    //     }
    // }

    // console.log(domains);
    // let i = 0;
    // const str = [];
    // for (const dom of domains) {
    //     str.push(dom.split('.').reverse()[i]);
    //     console.log(dom.split('.').reverse());
    //     console.log(dom.split('.').reverse()[i]);
    //     domains.forEach(elem => {
    //         if (elem.includes(str.join('.'))) {
    //             const str = `.${ splited[i].reverse().join('.') }`;
    //             res[str] = res[str] ? res[str] + 1 : res[str] = 1;
    //         }
    //     });
    //
    //     i++;
    // }
    //
    // return res;
}

module.exports = {
    getDNSStats
};
