/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeroes = 0;
    let i = 0;
    while(i < nums.length){
        if (nums[i] === 0) {
            // Extract element from nums and mantain index value
            nums.splice(i, 1);
            zeroes++;
        } else {
            i++;   
        }
    }
    // Push zeroes at the end
    for (j = 0; j < zeroes; j++) {
        nums.push(0);
    }
};
