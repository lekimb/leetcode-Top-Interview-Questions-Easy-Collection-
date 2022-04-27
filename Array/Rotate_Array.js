/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // nums = [1, 2, 3], k = 1 -> [3, 1, 2]
    // nums = [1, 2, 3], k = 2 -> [2, 3, 1]
    
    // Reducir k a las mínimas rotaciones posibles
    if (k >= nums.length) {
        k = k % nums.length;
    }
    // En vez de rotar, extraer los últimos k elementos
    const elems = nums.splice(-k);
    // Añadir elementos al inicio del array
    for (i = elems.length - 1; i >= 0; i--) {
        nums.unshift(elems[i]);
    }
    
};
