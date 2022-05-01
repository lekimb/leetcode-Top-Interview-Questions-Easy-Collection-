/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // convert to lower case
    s = s.toLowerCase();
    // delete non alphanumeric chars (create a new array)
    alphaNumericArray = [];
    for (i = 0; i < s.length; i++) {
        if (s[i].match(/[a-z0-9]/)) {
            alphaNumericArray.push(s[i]);
        }
    }
    // check if it's palindrome
    left = 0;
    right = alphaNumericArray.length - 1;
    isPal = true;
    while (left < right) {
        if (alphaNumericArray[left] !== alphaNumericArray[right]) {
            isPal = false;
            break;
        }
        left++;
        right--;
    }
    return isPal;
};
