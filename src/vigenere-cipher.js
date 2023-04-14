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
    #abc = 'abcdefghijklmnopqrstuvwxyz';
    #modulus = this.#abc.length;
    #direct;

    constructor(isDirect = true) {
        this.#direct = isDirect;
    }

    #createKeyWord(str, key) {
        let i = 0;
        let keyWord = '';

        while (keyWord.length < str.length) {
            if (i === key.length) i = 0;
            keyWord += key[i];
            i++;
        }

        return keyWord;
    }

    #saveSpaces(str) {
        const spaces = new Set();
        for (let i = 0; i < str.length; i++) if (str[i] === ' ') spaces.add(i);
        return spaces;
    }

    #insertSpaces(spaces, resArr) {
        spaces.forEach(i => resArr.splice(i, 0, ' '));
    }

    #correctArguments(str, key) {
        str = str.replaceAll(' ', '').toLowerCase();
        key = key.toLowerCase();

        return [ str, key ];
    }

    #validateArguments(str, key) {
        if (!str || !key) throw new Error('Incorrect arguments!');
    }

    #isNumber = value => typeof value === 'number';
    #indexInAlphabet = value => this.#abc.indexOf(value);

    encrypt(str, key) {
        this.#validateArguments(str, key);

        const spacesIds = this.#saveSpaces(str);
        [ str, key ] = this.#correctArguments(str, key);

        const keyMap = [];
        const strMap = [];
        const result = [];
        const encoded = [];
        let keyWord = this.#createKeyWord(str, key);

        for (let i = 0, leng = str.length; i < leng; i++) {
            keyMap.push(this.#indexInAlphabet(keyWord[i]));

            if (this.#indexInAlphabet(str[i]) === -1) strMap.push(str[i]);
            else strMap.push(this.#indexInAlphabet(str[i]));

            if (this.#isNumber(strMap[i])) result.push((strMap[i] + keyMap[i]) % this.#modulus);
            else result.push(strMap[i]);

            if (this.#isNumber(result[i])) encoded.push(this.#abc[result[i]]);
            else encoded.push(result[i]);
        }

        this.#insertSpaces(spacesIds, encoded);
        !this.#direct && encoded.reverse();
        return encoded.join('').toUpperCase();
    }

    decrypt(str, key) {
        this.#validateArguments(str, key);

        const spacesIds = this.#saveSpaces(str);
        [ str, key ] = this.#correctArguments(str, key);

        const keyMap = [];
        const strMap = [];
        const result = [];
        const decoded = [];
        let keyWord = this.#createKeyWord(str, key);

        for (let i = 0, leng = str.length; i < leng; i++) {
            keyMap.push(this.#indexInAlphabet(keyWord[i]));

            if (this.#indexInAlphabet(str[i]) === -1) strMap.push(str[i]);
            else strMap.push(this.#indexInAlphabet(str[i]));

            if (this.#isNumber(strMap[i])) {
                result.push((strMap[i] - keyMap[i]) % this.#modulus);
                if (result[i] < 0) while (result[i] < 0) result[i] += this.#modulus;
            } else result.push((strMap[i]));

            if (this.#isNumber(result[i])) decoded.push(this.#abc[result[i]]);
            else decoded.push(result[i]);
        }

        this.#insertSpaces(spacesIds, decoded);
        !this.#direct && decoded.reverse();
        return decoded.join('').toUpperCase();
    }
}

const directMachine = new VigenereCipheringMachine(false);
console.log(directMachine.encrypt('attack at dawn!', 'alphonse'));
console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));

module.exports = {
    VigenereCipheringMachine
};
