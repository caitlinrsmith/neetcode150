// https://leetcode.com/problems/two-sum/?envType=problem-list-v2&envId=plakya4j

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numMap = new Map();  // Create a map to store the indices of the numbers
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];  // Calculate the complement of the current number
        
        if (numMap.has(complement)) {
            // If the complement exists in the map, return the indices
            return [numMap.get(complement), i];
        }
        
        // Otherwise, add the current number and its index to the map
        numMap.set(nums[i], i);
    }
    
    // If no solution is found, return an empty array (this line is not expected to be reached)
    return [];
};