//  https://leetcode.com/problems/regular-expression-matching/description/?envType=problem-list-v2&envId=plakya4j

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const m = s.length, n = p.length;
    
    // Create a 2D DP table where dp[i][j] represents if s[0..i-1] matches p[0..j-1]
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
    
    // Base case: empty string matches empty pattern
    dp[0][0] = true;

    // Handle cases where '*' appears in the pattern at the beginning.
    // '*' can act as zero occurrences of the preceding character, so we set dp[0][j] 
    // to true if dp[0][j - 2] is true.
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2]; // '*' means zero occurrence of the previous element
        }
    }

    // Fill the DP table for the rest of the string and pattern
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            
            // Case 1: Characters match exactly or pattern contains '.'
            // If the current characters match, or pattern contains '.', we carry forward the result
            // from the previous state (dp[i-1][j-1]), since the rest of the string and pattern must match.
            if (p[j - 1] === s[i - 1] || p[j - 1] === '.') {
                dp[i][j] = dp[i - 1][j - 1]; // The rest of the string matches
            }
            
            // Case 2: The pattern contains a '*'
            // '*' means zero or more of the previous element.
            // We can first assume '*' matches zero occurrences (dp[i][j-2]).
            else if (p[j - 1] === '*') {
                // Case 2a: '*' matches zero occurrences of the preceding element.
                dp[i][j] = dp[i][j - 2]; // Ignore the preceding element and '*'

                // Case 2b: '*' matches one or more of the previous element.
                // If the previous character in the pattern matches the current character in the string
                // (p[j-2] === s[i-1]), or the previous character in the pattern is '.' (which can match anything),
                // we check if the string up to the previous character matches (dp[i-1][j]).
                if (p[j - 2] === s[i - 1] || p[j - 2] === '.') {
                    dp[i][j] = dp[i][j] || dp[i - 1][j]; // Check for one or more matches
                }
            }
        }
    }

    // The final answer is whether the entire string matches the entire pattern
    return dp[m][n];
};
