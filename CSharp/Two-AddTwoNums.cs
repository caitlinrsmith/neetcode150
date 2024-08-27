// https://leetcode.com/problems/add-two-numbers/description/?envType=problem-list-v2&envId=plakya4j

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode AddTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummyHead = new ListNode(0); // Create a dummy head node
        ListNode current = dummyHead; // Pointer to construct the new linked list
        int carry = 0; // Initialize the carry to 0
        
        while (l1 != null || l2 != null) {
            int x = (l1 != null) ? l1.val : 0; // Get the value from l1 or 0 if null
            int y = (l2 != null) ? l2.val : 0; // Get the value from l2 or 0 if null
            int sum = carry + x + y; // Calculate the sum with the carry
            carry = sum / 10; // Update the carry
            current.next = new ListNode(sum % 10); // Create a new node with the sum's last digit
            current = current.next; // Move the pointer to the next node
            
            if (l1 != null) l1 = l1.next; // Move to the next node in l1
            if (l2 != null) l2 = l2.next; // Move to the next node in l2
        }
        
        if (carry > 0) {
            current.next = new ListNode(carry); // Add the remaining carry as a new node
        }
        
        return dummyHead.next; // Return the result linked list, skipping the dummy head
    }
}
