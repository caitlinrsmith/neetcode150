public class Solution {
    public bool IsMatch(string s, string p) {
        int m = s.Length, n = p.Length;
        
        // Create a 2D DP table where dp[i, j] represents if s[0..i-1] matches p[0..j-1]
        bool[,] dp = new bool[m + 1, n + 1];

        // Base case: empty string matches empty pattern
        dp[0, 0] = true;

        // Handle patterns with '*' at the beginning
        // If a '*' can match zero occurrences, we can rely on the state two steps before
        for (int j = 1; j <= n; j++) {
            if (p[j - 1] == '*') {
                dp[0, j] = dp[0, j - 2]; // '*' means zero occurrence of the previous element
            }
        }

        // Fill the DP table
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {

                // Case 1: Characters match exactly or there's a '.'
                // '.' matches any character, so we just carry forward the previous match result
                if (p[j - 1] == s[i - 1] || p[j - 1] == '.') {
                    dp[i, j] = dp[i - 1, j - 1]; // Check if the rest of the string matches
                }

                // Case 2: The pattern contains a '*', which means zero or more of the previous character
                else if (p[j - 1] == '*') {
                    // First check if '*' matches zero occurrences of the previous character
                    dp[i, j] = dp[i, j - 2]; // Ignore the preceding element and '*'

                    // If the preceding element in the pattern matches the current char in the string, 
                    // or it's a '.', '*' can match one or more of the previous element.
                    if (p[j - 2] == s[i - 1] || p[j - 2] == '.') {
                        dp[i, j] = dp[i, j] || dp[i - 1, j]; // Match one more character
                    }
                }
            }
        }

        // The final answer is whether the entire string matches the entire pattern
        return dp[m, n];
    }
}
