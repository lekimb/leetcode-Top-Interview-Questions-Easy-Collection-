/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;
    let mid = Math.floor(right / 2);
    
    while ( left <= mid && right >= mid ){
        let leftValue = s[left]; // temporary value
        s[left] = s[right];
        s[right] = leftValue;
        
        left++;
        right--;
    }    
};
