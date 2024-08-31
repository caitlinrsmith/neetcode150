// // https://leetcode.com/problems/longest-palindromic-substring/description/?envType=problem-list-v2&envId=plakya4j

public class Solution {
    public string LongestPalindrome(string s) {
        // Check if the input string is null or empty. If it is, return an empty string as there's no palindrome to find.
        if (s == null || s.Length < 1) return "";

        // Initialize variables to track the starting and ending indices of the longest palindrome found.
        int start = 0, end = 0;

        // Iterate through each character in the string, treating each as a potential center of a palindrome.
        for (int i = 0; i < s.Length; i++) {
            // Check for the longest odd-length palindrome centered at s[i].
            int len1 = ExpandAroundCenter(s, i, i);
            // Check for the longest even-length palindrome centered between s[i] and s[i+1].
            int len2 = ExpandAroundCenter(s, i, i + 1);
            // Determine the maximum length between the two palindrome lengths found.
            int len = Math.Max(len1, len2);
            // If the current palindrome is longer than the previously recorded one, update the start and end indices.
            if (len > end - start) {
                start = i - (len - 1) / 2;  // Calculate new start index based on the palindrome length.
                end = i + len / 2;          // Calculate new end index based on the palindrome length.
            }
        }

        // Extract and return the longest palindromic substring using the start and end indices.
        return s.Substring(start, end - start + 1);
    }

    // Helper method to expand around a given center and find the length of the palindrome.
    private int ExpandAroundCenter(string s, int left, int right) {
        // Expand outwards as long as the characters on both sides are equal and within the bounds of the string.
        while (left >= 0 && right < s.Length && s[left] == s[right]) {
            left--;  // Move the left pointer one step to the left.
            right++; // Move the right pointer one step to the right.
        }
        // Return the length of the palindrome found. The formula subtracts 1 because we move one step too far on both sides in the last iteration.
        return right - left - 1;
    }
}

