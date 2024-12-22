class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insert(val) {
        if(!this.head){
            this.head = new ListNode(val);
            this.tail = this.head;
            return;
        }
        this.tail.next = new ListNode(val);
        this.tail = this.tail.next
    }

    print(){
        let curr = this.head
        let res = ''
        while(curr){
            res += curr.val + ' -> ';
            curr = curr.next;
        }
        return res
    }

    reverse(head) {
        let curr = head;
        let prev = null;
        let next;

        while(curr){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }

    reverseByRecursion(head){
        if(head === null || head.next === null){
            return head
        }
        const newHead = this.reverseByRecursion(head.next);

        head.next.next = head;
        head.next = null;

        return newHead
    }
}

const singleLinkedList = new SingleLinkedList()
singleLinkedList.insert(4)
singleLinkedList.insert(5)
singleLinkedList.insert(2)
console.log(singleLinkedList.reverseByRecursion(singleLinkedList.head))
console.log(singleLinkedList.reverse(singleLinkedList.head))
// console.log(singleLinkedList.print())