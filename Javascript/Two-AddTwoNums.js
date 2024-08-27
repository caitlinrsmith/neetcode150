// https://leetcode.com/problems/add-two-numbers/description/?envType=problem-list-v2&envId=plakya4j

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0); // Create a dummy head node to help with the result linked list
    let current = dummyHead; // Initialize current node to the dummy head
    let carry = 0; // Initialize carry to 0
    
    while (l1 !== null || l2 !== null) {
        let x = (l1 !== null) ? l1.val : 0; // Get the value from l1, or 0 if l1 is null
        let y = (l2 !== null) ? l2.val : 0; // Get the value from l2, or 0 if l2 is null
        let sum = carry + x + y; // Calculate the sum including the carry
        carry = Math.floor(sum / 10); // Update the carry for the next iteration
        current.next = new ListNode(sum % 10); // Create a new node with the digit value and attach it to the result list
        current = current.next; // Move the current node to the next
        
        if (l1 !== null) l1 = l1.next; // Move to the next node in l1
        if (l2 !== null) l2 = l2.next; // Move to the next node in l2
    }
    
    if (carry > 0) {
        current.next = new ListNode(carry); // If there is a remaining carry, add a new node for it
    }
    
    return dummyHead.next; // Return the result linked list, starting from the node after the dummy head
};