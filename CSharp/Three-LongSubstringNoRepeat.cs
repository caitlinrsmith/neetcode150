// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/?envType=problem-list-v2&envId=plakya4j

public class Solution {
    public int LengthOfLongestSubstring(string s) {
        // Check if the input string is null or empty, return 0 as there's no substring possible
        if (string.IsNullOrEmpty(s)) return 0;

        // Variable to store the maximum length of substring found
        int maxLength = 0;
        // Pointer to keep track of the start of the current substring
        int start = 0;
        // Dictionary to store the most recent index of each character in the string
        Dictionary<char, int> charIndexMap = new Dictionary<char, int>();

        // Loop through each character in the string with 'end' as the pointer
        for (int end = 0; end < s.Length; end++) {
            // If the character has been seen before and is within the current substring
            if (charIndexMap.ContainsKey(s[end])) {
                // Move the start pointer to the right of the last seen index of this character
                start = Math.Max(start, charIndexMap[s[end]] + 1);
            }
            // Update the dictionary with the current index of the character
            charIndexMap[s[end]] = end;
            // Calculate the length of the current substring and update maxLength if it's the longest so far
            maxLength = Math.Max(maxLength, end - start + 1);
        }

        // Return the length of the longest substring without repeating characters
        return maxLength;
    }
}