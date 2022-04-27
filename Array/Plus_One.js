/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let lastIndex = digits.length - 1;
        
    while (lastIndex >= 0){
        if (digits[lastIndex] !== 9) {
            digits[lastIndex]++;
            break;
        } else {
            digits[lastIndex] = 0;
            lastIndex--;
        }
    }
    if (digits[0] === 0){
        digits.unshift(1);
    }
    return digits;
};
