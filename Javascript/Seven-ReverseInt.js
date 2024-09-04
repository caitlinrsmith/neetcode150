//  https://leetcode.com/problems/reverse-integer/description/?envType=problem-list-v2&envId=plakya4j

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // Initialize rev to store the reversed number
    let rev = 0;

    // Loop through each digit of x
    while (x !== 0) {
        // Extract the last digit of x (pop)
        let pop = x % 10;
        // Remove the last digit from x, using bitwise OR to ensure the result is an integer
        x = (x / 10) | 0;
        
        // Check for potential overflow before updating rev
        // If rev > Math.floor(2147483647 / 10), multiplying rev by 10 will overflow
        // If rev == Math.floor(2147483647 / 10) and pop > 7, adding pop will overflow
        if (rev > Math.floor(2147483647 / 10) || (rev === Math.floor(2147483647 / 10) && pop > 7)) return 0;
        
        // Check for potential underflow before updating rev
        // If rev < Math.ceil(-2147483648 / 10), multiplying rev by 10 will underflow
        // If rev == Math.ceil(-2147483648 / 10) and pop < -8, adding pop will underflow
        if (rev < Math.ceil(-2147483648 / 10) || (rev === Math.ceil(-2147483648 / 10) && pop < -8)) return 0;
        
        // Update rev by multiplying it by 10 (shifting digits left) and adding pop
        rev = rev * 10 + pop;
    }

    // Return the reversed number
    return rev;
};
