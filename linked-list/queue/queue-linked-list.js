class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    enqueue(val) {
        if(this.isFull()){
            console.log('Queue is already full!');
            return;
        }
        const newNode = new Node(val)
        this.size++;
        if(this.head === null){
            this.head = this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }

    dequeue(){
        if(this.isEmpty()){
            console.log('Queue is empty');
            return
        }
        this.size--;
        let result = this.head;
        this.head = this.head.next;
        return result;
    }

    peek(){
        if(this.isEmpty()){
            console.log('Queue is empty!')
            return
        }

        return this.head.val;
    }

    isEmpty(){
        return this.head === null;
    }

    isFull(){
        return this.size === this.capacity;
    }

    print(){
        let current = this.head;
        while(current){
            console.log(current.val)
            current = current.next;
        }
    }
}

const queue = new Queue(5);
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(3)
queue.enqueue(3)
queue.enqueue(3)
queue.print()
console.log(queue.dequeue());
queue.print()