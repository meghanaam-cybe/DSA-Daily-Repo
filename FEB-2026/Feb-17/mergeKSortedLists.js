// 23. Merge k Sorted Lists

// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted linked list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []
 

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

function merging(lists){
    while(lists.length>1){
        let merged=[];
        for(let i=0;i<lists.length;i+=2){
            let l1=lists[i];
            let l2=i+1<lists.length?lists[i+1]:null;
            merged.push(merge(l1,l2))
        }
        lists=merged
    }
    return lists[0]
}

let lists = [
    createList([1,4,5]),
    createList([1,3,4]),
    createList([2,6])
];

let mergedd=merging(lists)
console.log(printList(mergedd))