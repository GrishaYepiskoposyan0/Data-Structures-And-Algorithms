class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class DoubleLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insert(val){
        let temp = new ListNode(val)
        if(!this.head) {
            this.head = temp;
            this.tail = temp;
            return;
        }
        temp.prev = this.tail;
        this.tail.next = temp;
        this.tail = this.tail.next;
    }

    print(){
        let curr = this.head
        let res = ''
        while(curr !== null){
            res += curr.val + ' -> ';
            curr = curr.next;
        }
        return res
    }
}

const doubleLinkedList = new DoubleLinkedList()
doubleLinkedList.insert(2)
doubleLinkedList.insert(6)
doubleLinkedList.insert(5)
console.log(doubleLinkedList.print())
