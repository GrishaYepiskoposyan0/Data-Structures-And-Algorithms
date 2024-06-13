class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertEnd(val){
        const newNode = new ListNode(val)
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.size++;
            return;
        }
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode
        this.size++
    }

    insertFront(val){
        const newNode = new ListNode(val)
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.size++;
            return;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode
        this.size++
    }

    insertAtIndex(index, val){
        if(index < 0 || this.size <= index){
            return;
        }
        if(!this.head){
            this.insertFront(val)
        } else if(index === this.size - 1){
            console.log(index, this.size - 1)
            this.insertEnd(val)
        } else {
            let curr = this.head;
            let i = 0;
            while(i !== index){
                curr = curr.next;
                i++;
            }

            const newNode = new ListNode(val);
            newNode.next = curr;
            newNode.prev = curr.prev;
            curr.prev.next = newNode;
            curr.prev = newNode;
            this.size++;
        }
    }

    deleteAtIndex(index){
        if(index < 0 || this.size <= index){
            return;
        }
        if(index === 0){
            if(this.size === 1){
                this.head = null;
                this.tail = null
            } else {
                this.head = this.head.next;
                this.head.prev = null
            }
        } else if(index === this.size -1){
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            let curr = this.head;
            let i = 0;
            while(i !== index){
                curr = curr.next;
                i++;
            }

            curr.next.prev = curr.prev;
            curr.prev.next = curr.next;
        }
        this.size--;
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
doubleLinkedList.insertEnd(2)
doubleLinkedList.insertEnd(6)
doubleLinkedList.insertFront(7)
doubleLinkedList.insertEnd(5)
doubleLinkedList.insertAtIndex(2, 8)
doubleLinkedList.deleteAtIndex(1)
console.log(doubleLinkedList.print())
