/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let right = 1;
    while (right < nums.length) { 
        if (nums[0] === nums[right]) {
            nums.splice(right, 1); // Extract nums[right]
            nums.splice(0, 1); // Extract nums[0]
            right = 1; // Reset right pointer
        } else {
            right++;
        }
    }
    return nums[0];
};
