/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let intersec = [];
    for (i = 0; i < nums1.length; i++) {
        for (j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                intersec.push(nums2[j]);
                nums2.splice(j, 1); // Eliminar elemento coincidente del segundo array
                break;
            }
        }
    }
    return intersec;
};
