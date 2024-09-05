//  https://leetcode.com/problems/count-good-nodes-in-binary-tree/description/?envType=problem-list-v2&envId=plakya4j

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    public int GoodNodes(TreeNode root) {
        // Start the recursive function with the root node and its value as the initial maxSoFar
        return CountGoodNodes(root, root.val);
    }
    
    // Helper method to count good nodes in the binary tree
    private int CountGoodNodes(TreeNode node, int maxSoFar) {
        // Base case: if the node is null, return 0 since there are no nodes to check
        if (node == null) return 0;

        // Check if the current node is a "good" node
        // A node is considered "good" if its value is greater than or equal to maxSoFar
        int good = node.val >= maxSoFar ? 1 : 0;

        // Update maxSoFar to be the maximum value encountered so far in the path
        maxSoFar = Math.Max(maxSoFar, node.val);

        // Recursively count good nodes in the left subtree
        good += CountGoodNodes(node.left, maxSoFar);
        
        // Recursively count good nodes in the right subtree
        good += CountGoodNodes(node.right, maxSoFar);

        // Return the total number of good nodes in the current subtree
        return good;
    }
}
