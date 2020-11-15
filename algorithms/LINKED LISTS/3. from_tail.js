// From Tail
// Without keeping a counter, return the value in a linked list that is at a given step away from the end.

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

  remove(key) {
    let moveByOne = this.head;
    let moveByKey = this.head;

    while (key !== 0) {
      key--;
      moveByKey = moveByKey.next;
    }
    while (moveByOne.next && moveByKey.next) {
      moveByOne = moveByOne.next;
      moveByKey = moveByKey.next;

      if (moveByKey === this.tail) {
        moveByOne.next = moveByKey;
      }
    }
  }
}

let list = new LinkedList();
list.prepend(9);
list.prepend(7);
list.prepend(5);

console.log(list.remove(3));
