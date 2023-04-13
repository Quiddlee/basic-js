const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth(arr, counter = 1) {
        arr = arr.filter(e => Array.isArray(e));
        if (!Array.isArray(arr[0])) return counter;
        arr = arr.flat();
        return this.calculateDepth(arr, ++counter);
    }
}

const depthCalc = new DepthCalculator();
console.log(depthCalc.calculateDepth([ [ [ [ [ [ [ [ [ [] ] ] ] ] ] ] ] ] ]));

module.exports = {
    DepthCalculator
};
