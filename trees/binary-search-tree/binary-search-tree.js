class Node {
    constructor(data) {
        this.data = data;
        this.left = null
        this.right = null
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data){
        if(!this.root){
            this.root = new Node(data);
            return this;
        }
        let current = this.root;
        const newNode = new Node(data);
        while(true){
            if(data === current.data) return this;
            if(data > current.data){
                if(!current.right){
                    current.right = newNode;
                    return this
                }
                current = current.right;
            } else {
                if(!current.left){
                    current.left = newNode;
                    return this
                }
                current = current.left;
            }
        }
    }

    remove(data, root = this.root){
        if(!root) return null;
        if(data > root.data){
            root.right = this.remove(data, root.right)
        } else if(data < root.data){
            root.left = this.remove(data, root.left);
        } else {
            if(!root.left && !root.right){
                return null;
            }

            if(!root.left){
                return root.right
            }
            if(!root.right){
                return root.left;
            }

            let minValue = this.findMin(root.right);
            root.data = minValue;
            root.right = this.remove(minValue,root.right)

        }
        return root;
    }

    search(data){
        let current = this.root;
        while(current) {
            if(data === current.data){
                return current;
            }
            if(data < current.data){
                current = current.left;
            } else {
                current = current.right
            }
        }
        return null;
    }

    findMin(root = this.root){
        if(!root) return null;
        while (root.left){
            root = root.left;
        }
        return root.data;
    }

    preOrderTraversal(root = this.root, result = []) {
        if (root) {
            result.push(root.data);
            this.preOrderTraversal(root.left, result);
            this.preOrderTraversal(root.right, result);
        }
        return result;
    }

    postOrderTraversal(root = this.root, result = []) {
        if (root) {
            this.postOrderTraversal(root.left, result);
            this.postOrderTraversal(root.right, result);
            result.push(root.data);
        }
        return result;
    }

    findMax(root = this.root){
        if(!root) return null;
        while(root.right){
            root = root.right;
        }
        return root.data;
    }
}

const bst = new BinarySearchTree();
bst.insert(8)
bst.insert(3)
bst.insert(10)
bst.insert(14)
bst.insert(14)
bst.insert(1)
bst.insert(6)
bst.insert(9)

console.log(bst.preOrderTraversal())

bst.remove(8);
console.log(bst.postOrderTraversal())