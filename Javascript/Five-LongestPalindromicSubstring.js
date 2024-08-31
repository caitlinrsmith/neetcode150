// https://leetcode.com/problems/longest-palindromic-substring/description/?envType=problem-list-v2&envId=plakya4j

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // Initialize variables to track the start and end indices of the longest palindrome found
    let start = 0, end = 0;

    // Helper function to expand around the center and find the length of the palindrome
    const expandAroundCenter = (s, left, right) => {
        // Expand outwards as long as the characters on both sides are equal (palindromic)
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;  // Move left pointer one step to the left
            right++; // Move right pointer one step to the right
        }
        // Return the length of the palindrome found (right - left - 1)
        return right - left - 1;
    };

    // Loop through each character in the string
    for (let i = 0; i < s.length; i++) {
        // Check for the longest odd-length palindrome centered at s[i]
        let len1 = expandAroundCenter(s, i, i);
        // Check for the longest even-length palindrome centered between s[i] and s[i+1]
        let len2 = expandAroundCenter(s, i, i + 1);
        // Determine the maximum length between the two palindrome lengths found
        let len = Math.max(len1, len2);
        // If the current palindrome is longer than the previous longest, update start and end indices
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2); // Calculate new start index
            end = i + Math.floor(len / 2);         // Calculate new end index
        }
    }

    // Return the longest palindromic substring found using the updated start and end indices
    return s.substring(start, end + 1);
};
