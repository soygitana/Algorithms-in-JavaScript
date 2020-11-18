class Node {
    constructor(value = null, left = null, right = null) {
        this.value = value;
        this.right = right;
        this.left = left;
    }

    toString() {
        return JSON.stringify(this);
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (this.root === null) {
            this.root = new Node(value);
        } else {
            let current = this.root;
            while (true) {
                if (value > current.value) {
                    if (current.right === null) {
                        current.right = new Node(value);
                        break;
                    } else {
                        current = current.right;
                    }
                } else if (value < current.value) {
                    if (current.left === null) {
                        current.left = new Node(value);
                        break;
                    } else {
                        current = current.left;
                    }
                }
            }
        }
    }

    find(value) {
        let traverse = (node) => {
            if (node == null || node.value === value) {
                return node;
            } else if (value < node.value) {
                traverse(node.left);
            } else {
                traverse(node.right);
            }
        };
        return traverse(this.root);
    }
}

var tree = new BinarySearchTree();
tree.insert(6);
tree.insert(2);
tree.insert(8);
tree.insert(0);

console.log(tree)