/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // convert number to string
    let s = x.toString();
    
    // check if negative
    let isNegative;
    if (s[0] === '-') {
        s = s.substring(1);
        isNegative = true;
    } else {
        isNegative = false;
    }
    
    // convert to char array
    let a = s.split('');
    
    // reverse
    let left = 0;
    let right = a.length - 1;
    while (left < right) {
        let temp = a[left];
        a[left] = a[right];
        a[right] = temp;
        left++;
        right--;
    }
    
    // convert to string
    s = a.join('');
    
    // add minus sign if negative
    if (isNegative) {
        s = '-'.concat(s);
    }
    
    // convert to integer
    let i = parseInt(s);
    if (i > Math.pow(2, 31) - 1 || i < Math.pow(-2, 31)) {
        return 0; // if out of signed 32-bit integer range, return 0
    } else {
        return i;
    }  
};
