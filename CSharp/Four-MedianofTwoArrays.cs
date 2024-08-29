// https://leetcode.com/problems/median-of-two-sorted-arrays/description/?envType=problem-list-v2&envId=plakya4j

public class Solution {
    public double FindMedianSortedArrays(int[] nums1, int[] nums2) {
        // Ensure nums1 is the smaller array to reduce the binary search space
        if (nums1.Length > nums2.Length) {
            return FindMedianSortedArrays(nums2, nums1);
        }
        
        // Lengths of the two arrays
        int m = nums1.Length;
        int n = nums2.Length;
        // Initialize low and high pointers for binary search on nums1
        int low = 0, high = m;

        // Binary search loop
        while (low <= high) {
            // Partition nums1 by finding the middle index
            int partitionX = (low + high) / 2;
            // Partition nums2 such that the left and right parts have equal lengths
            int partitionY = (m + n + 1) / 2 - partitionX;

            // Determine max value on the left side of nums1 or negative infinity if partitionX is 0
            int maxX = (partitionX == 0) ? int.MinValue : nums1[partitionX - 1];
            // Determine min value on the right side of nums1 or positive infinity if partitionX is m
            int minX = (partitionX == m) ? int.MaxValue : nums1[partitionX];

            // Determine max value on the left side of nums2 or negative infinity if partitionY is 0
            int maxY = (partitionY == 0) ? int.MinValue : nums2[partitionY - 1];
            // Determine min value on the right side of nums2 or positive infinity if partitionY is n
            int minY = (partitionY == n) ? int.MaxValue : nums2[partitionY];

            // Check if the partitions are correct
            if (maxX <= minY && maxY <= minX) {
                // If the total number of elements is even, return the average of the middle values
                if ((m + n) % 2 == 0) {
                    return (double)(Math.Max(maxX, maxY) + Math.Min(minX, minY)) / 2;
                } else {
                    // If odd, return the max of the left side
                    return (double)Math.Max(maxX, maxY);
                }
            } else if (maxX > minY) {
                // If maxX is greater than minY, move the high pointer left
                high = partitionX - 1;
            } else {
                // If maxY is greater than minX, move the low pointer right
                low = partitionX + 1;
            }
        }

        // If the input arrays are not sorted, throw an exception (this should not happen in correct input)
        throw new ArgumentException("Input arrays are not sorted.");
    }
}
