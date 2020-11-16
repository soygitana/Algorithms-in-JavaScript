// Reverse list

// 4 --> 3 --> 2 --> 1
// 4 <-- 3 <-- 2 <-- 1

class LinkedListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next || null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    prepend(value) {
        const newNode = new LinkedListNode(value, this.head);

        this.head = newNode;
        if (!this.tail) this.tail = newNode;
        return this;
    }

    reverse() {

if (this.head == null) return;

        let previous = this.head;
        let current = this.head.next;
        while (current != null) {
            let next = current.next
            current.next = previous
            previous = current
            current = next
        }

        this.tail = this.head
        this.tail.next = null
        this.head = previous

        return list
    }


}

let list = new LinkedList();
list.prepend(1);
list.prepend(2);
list.prepend(3);
list.prepend(4);

console.log(list.reverse());