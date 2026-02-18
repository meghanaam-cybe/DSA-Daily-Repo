// 21. Merge Two Sorted Lists

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

 

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:

// Input: list1 = [], list2 = []
// Output: []

// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }


function merge(list1,list2){
    let dummy=new ListNode(0);
    let temp=dummy;
    while(list1!=null && list2!=null){
        if(list1.val<list2.val){
            temp.next=list1;
            list1=list1.next
        }else{
            temp.next=list2;
            list2=list2.next
        }
        temp=temp.next
    }
    if(list1!=null){
        temp.next=list1;
        // list1=list1.next
    }
    else {
        temp.next=list2;
        // list2=list2.next
    }
    return dummy.next
}
function createList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;

    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }

    return dummy.next;
}


function printList(head) {
    let result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}




let list1 = createList([1,2,4]), list2 = createList([1,3,4])
let mergedd=merge(list1,list2)
console.log(printList(mergedd))