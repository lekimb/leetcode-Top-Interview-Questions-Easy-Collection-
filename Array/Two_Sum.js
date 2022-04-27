/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let left = 0;
    let right = left + 1;
    
    while(right < nums.length && left < nums.length) {
        if (nums[left] + nums[right] === target) {
            break;
        } else {
            if (right < nums.length - 1) {
                right++;
            } else {
                left++;
                right = left + 1;
            }
        }
    }
    return [left, right];
};
