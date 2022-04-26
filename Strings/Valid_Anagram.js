/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) {
        return false;
    } 
    // Sort strings
    let s_sorted = Array.from(s).sort();
    let t_sorted = Array.from(t).sort();
    
    // Compare both arrays
    let isAnagram = true;
    for (i = 0; i < s_sorted.length; i++) {
        if (s_sorted[i] != t_sorted[i]) {
            isAnagram = false;
        }
    }
    return isAnagram;
};
