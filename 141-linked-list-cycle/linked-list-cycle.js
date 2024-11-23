/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let curr = head
    let slow = curr
    let fast = curr
    while(fast?.next && fast){
        slow = slow.next
        fast = fast.next.next
        if(fast==slow){
            return true
        }
    }
    return false
};