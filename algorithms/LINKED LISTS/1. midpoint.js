// Midpoint
// Without keeping a counter, return the middle value of a linked list.

// traverse down the list two times, one of which is two times faster.
// when the faster one reaches the end, the slower one stops at the middle.
// this algorithm has linear time and constant space.

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

  getMiddle() {
    var a = this.head;
    var b = this.head;

    while (b != this.tail && b.next != this.tail) {
      b = b.next.next;
      a = a.next;
    }

    if (b == this.tail) {
     return a.value
    } else {
     return `${a.value} and ${a.next.value}`
    }
  }
}

let list = new LinkedList();
list.prepend(9);
list.prepend(7);
list.prepend(5);
list.prepend(4);
list.prepend(3);

console.log(list.getMiddle())
