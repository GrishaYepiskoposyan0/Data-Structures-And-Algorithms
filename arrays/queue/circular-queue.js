class CircularQueue {
    constructor(capacity) {
        this.queue = new Array(capacity).fill(null);
        this.capacity = capacity;
        this.size = 0;
        this.front = 0;
    }
    get rear(){
        return (this.front + this.size - 1) % this.capacity;
    }

    getFront () {
        if(this.isEmpty()) return null;
        return this.queue[this.front];
    }

    getRear(){
        if(this.isEmpty()) return null;
        return this.queue[this.rear];
    }

    enqueue(val) {
        if(this.isFull()) return;
        this.queue[this.rear] = val;
        this.size ++;
    }

    dequeue() {
        if(this.isEmpty()) return null;
        const res = this.queue[this.front];
        this.front = (this.front + 1) % this.capacity;
        this.size --;
        return res;
    }

    isEmpty() {
        return this.size === 0;
    }

    isFull(){
        return this.size === this.capacity
    }
}
const queue = new CircularQueue(5);
queue.enqueue(1);