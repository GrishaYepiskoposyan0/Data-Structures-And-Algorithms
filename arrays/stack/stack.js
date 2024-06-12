class Stack {
    constructor() {
        this.stack = []
    }

    push(val){
        this.stack.push(val)
    }

    pop(){
        return this.stack.pop()
    }

    size(){
        return this.stack.length;
    }
}

const stack = new Stack();
stack.push(1)
stack.push(3)
stack.push(6)
console.log(stack.pop())
console.log(stack.size())