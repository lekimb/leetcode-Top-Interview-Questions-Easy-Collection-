/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let regex = /^(\s*)([+-]?)(\d+)/;
    let groups = regex.exec(s);
    let num;
    
    if ( groups === null ) {
        return 0;
    } else {
        if ( groups[2] === '-' ) {
            num = -groups[3];
        } else {
            num = groups[3];
        }
        if (num > ((2 ** 31) - 1)) num = (2 ** 31) - 1;
        if (num < (-(2 ** 31))) num = -(2 ** 31);
        
        return num;
    }     
};
