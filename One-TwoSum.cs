// https://leetcode.com/problems/two-sum/description/?envType=problem-list-v2&envId=plakya4j

public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        Dictionary<int, int> numMap = new Dictionary<int, int>();  // Create a dictionary to store the indices of the numbers
        
        for (int i = 0; i < nums.Length; i++) {
            int complement = target - nums[i];  // Calculate the complement of the current number
            
            if (numMap.ContainsKey(complement)) {
                // If the complement exists in the dictionary, return the indices
                return new int[] { numMap[complement], i };
            }
            
            // Otherwise, add the current number and its index to the dictionary
            numMap[nums[i]] = i;
        }
        
        // If no solution is found, return an empty array (this line is not expected to be reached)
        return new int[0];
    }
}