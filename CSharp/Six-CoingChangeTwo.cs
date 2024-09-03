// https://leetcode.com/problems/coin-change-ii/?envType=problem-list-v2&envId=plakya4j

public class Solution {
    public int Change(int amount, int[] coins) {
        // Initialize a DP (Dynamic Programming) array where dp[i] represents
        // the number of ways to make up the amount i using the given coins.
        // The array size is (amount + 1) to include zero.
        int[] dp = new int[amount + 1];
        
        // There is exactly one way to make up the amount 0, which is by choosing no coins.
        dp[0] = 1;

        // Iterate over each coin in the coins array.
        foreach (var coin in coins) {
            // For each coin, update the DP array for all amounts from the coin's value up to the target amount.
            for (int i = coin; i <= amount; i++) {
                // Update dp[i] by adding the number of ways to make up the amount (i - coin).
                // This accounts for using the current coin to reach the amount i.
                dp[i] += dp[i - coin];
            }
        }

        // After processing all coins, dp[amount] will hold the total number of combinations
        // to make up the target amount. If it's still 0, it means it's not possible to form that amount.
        return dp[amount];
    }
}
