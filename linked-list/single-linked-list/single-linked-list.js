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
}

const singleLinkedList = new SingleLinkedList()
singleLinkedList.insert(4)
singleLinkedList.insert(5)
singleLinkedList.insert(2)
console.log(singleLinkedList.print())