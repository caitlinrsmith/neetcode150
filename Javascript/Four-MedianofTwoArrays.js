// https://leetcode.com/problems/median-of-two-sorted-arrays/description/?envType=problem-list-v2&envId=plakya4j

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // Ensure nums1 is the smaller array to minimize the search space
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];  // Swap nums1 and nums2
    }
    
    let m = nums1.length;  // Length of the smaller array
    let n = nums2.length;  // Length of the larger array
    let low = 0, high = m;  // Initialize binary search boundaries for nums1
    
    while (low <= high) {
        // Partition nums1 at the midpoint
        let partitionX = Math.floor((low + high) / 2);
        // Partition nums2 so that the left and right parts have equal or nearly equal length
        let partitionY = Math.floor((m + n + 1) / 2) - partitionX;

        // Determine the maximum element on the left side of partitionX
        let maxX = (partitionX === 0) ? -Infinity : nums1[partitionX - 1];
        // Determine the minimum element on the right side of partitionX
        let minX = (partitionX === m) ? Infinity : nums1[partitionX];

        // Determine the maximum element on the left side of partitionY
        let maxY = (partitionY === 0) ? -Infinity : nums2[partitionY - 1];
        // Determine the minimum element on the right side of partitionY
        let minY = (partitionY === n) ? Infinity : nums2[partitionY];

        // Check if the current partition is correct
        if (maxX <= minY && maxY <= minX) {
            // If the total number of elements is even
            if ((m + n) % 2 === 0) {
                // The median is the average of the two middle elements
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
                // If the total number of elements is odd, the median is the middle element
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            // If maxX is greater than minY, move the high boundary left
            high = partitionX - 1;
        } else {
            // If maxY is greater than minX, move the low boundary right
            low = partitionX + 1;
        }
    }

    // This line should never be reached if the input arrays are sorted
    throw new Error("Input arrays are not sorted");
};