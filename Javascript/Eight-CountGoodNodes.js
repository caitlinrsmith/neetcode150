//  https://leetcode.com/problems/count-good-nodes-in-binary-tree/description/?envType=problem-list-v2&envId=plakya4j

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    // Helper function to count good nodes in the tree
    const countGoodNodes = (node, maxSoFar) => {
        // Base case: if the node is null, return 0
        if (node === null) return 0;

        // Determine if the current node is good
        let good = node.val >= maxSoFar ? 1 : 0;

        // Update maxSoFar to the maximum value seen so far in the path
        maxSoFar = Math.max(maxSoFar, node.val);

        // Recursively count good nodes in the left and right subtrees
        good += countGoodNodes(node.left, maxSoFar);
        good += countGoodNodes(node.right, maxSoFar);

        // Return the total number of good nodes found
        return good;
    };

    // Start the recursive count with the root node and its value as the initial maxSoFar
    return countGoodNodes(root, root.val);
};
