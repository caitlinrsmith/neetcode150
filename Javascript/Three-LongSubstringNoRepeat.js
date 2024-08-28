// // https://leetcode.com/problems/longest-substring-without-repeating-characters/description/?envType=problem-list-v2&envId=plakya4j


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // Edge case: if the string is empty, return 0 as there's no substring possible
    if (s.length === 0) return 0;

    let maxLength = 0;  // Variable to store the maximum length of the substring found
    let start = 0;  // Pointer to keep track of the start of the current substring
    let charIndexMap = new Map();  // Map to store the most recent index of each character in the string

    // Loop through each character in the string with 'end' as the pointer
    for (let end = 0; end < s.length; end++) {
        // If the character has been seen before and is within the current substring
        if (charIndexMap.has(s[end])) {
            // Move the start pointer to the right of the last seen index of this character
            start = Math.max(start, charIndexMap.get(s[end]) + 1);
        }
        // Update the map with the current index of the character
        charIndexMap.set(s[end], end);
        // Calculate the length of the current substring and update maxLength if it's the longest so far
        maxLength = Math.max(maxLength, end - start + 1);
    }

    // Return the length of the longest substring without repeating characters
    return maxLength;
};