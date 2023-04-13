const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *     STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS
 *
 *
 *
 *
 *
 *
 *
 */
function repeater(str, {
    repeatTimes = 1,
    separator = '+',
    addition,
    additionRepeatTimes = 1,
    additionSeparator = '|',
}) {
    addition = addition === undefined ? '' : addition + '';
    const res = [];

    for (let i = 0; i < repeatTimes; i++) {
        const additionalString = [ `${ str }${ addition }` ];
        let mainString = '';

        for (let j = 0; j < additionRepeatTimes - 1; j++) {
            additionalString.push(addition);
        }

        mainString += additionalString.join(additionSeparator);
        res.push(mainString);
    }

    return res.join(separator);
}

console.log(repeater(null, {
    repeatTimes: 3,
    separator: '??? ',
    addition: null,
    additionRepeatTimes: 3,
    additionSeparator: '!!!'
}));

// 'nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null'

module.exports = {
    repeater
};
