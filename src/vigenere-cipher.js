const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

class VigenereCipheringMachine {
    encrypt() {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    decrypt() {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }
}

// class VigenereCipheringMachine {
//     #abc = 'abcdefghijklmnopqrstuvwxyz';
//     #modulus = this.#abc.length;
//
//     #createKeyWord(str, key) {
//         let i = 0;
//         let keyWord = '';
//
//         while (keyWord.length < str.length) {
//             if (i === key.length) i = 0;
//             keyWord += key[i];
//             i++;
//         }
//
//         return keyWord;
//     }
//
//     encrypt(str, key) {
//         const keyMap = [];
//         const strMap = [];
//         const result = [];
//         let encoded = '';
//         let keyWord = this.#createKeyWord(str, key);
//
//         for (let i = 0; i < str.length; i++) {
//             keyMap.push(this.#abc.indexOf(keyWord[i]));
//
//             if (this.#abc.indexOf(str[i]) === -1) strMap.push(str[i]);
//             else strMap.push(this.#abc.indexOf(str[i]));
//
//             if (typeof strMap[i] === 'number') result.push((strMap[i] + keyMap[i]) % this.#modulus);
//             else result.push(strMap[i]);
//
//             if (typeof result[i] === 'number') encoded += this.#abc[result[i]];
//             else encoded += result[i];
//         }
//
//         return encoded.toUpperCase();
//     }
//
//     decrypt(str, key) {
//         const keyMap = [];
//         const strMap = [];
//         const result = [];
//         let decoded = '';
//         let keyWord = this.#createKeyWord(str, key);
//
//         for (let i = 0; i < str.length; i++) {
//             keyMap.push(this.#abc.indexOf(keyWord[i]));
//
//             if (this.#abc.indexOf(str[i]) === -1) strMap.push(str[i]);
//             else strMap.push(this.#abc.indexOf(str[i]));
//
//             if (typeof strMap[i] === 'number') {
//                 result.push((strMap[i] - keyMap[i]) % this.#modulus);
//                 if (result[i] < 0) while (result[i] < 0) result[i] += this.#modulus;
//             } else result.push((strMap[i]));
//
//             if (typeof result[i] === 'number') decoded += this.#abc[result[i]];
//             else decoded += result[i];
//         }
//
//         return decoded;
//     }
// }
//
// const directMachine = new VigenereCipheringMachine();
// console.log(directMachine.encrypt('attack at dawn!', 'alphonse'));
// console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));

module.exports = {
    VigenereCipheringMachine
};
