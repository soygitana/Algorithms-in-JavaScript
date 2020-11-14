// Linked Lists in JavaScript

// Implementing a List Node
// As stated earlier, a list node contains two items: the data and the pointer to the next node.

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Implementing a Linked List
// Implementation of a linked list class with a constructor. If the head node is not passed, the head is initialised to null.

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
  }

  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head.data;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }
}

const list = new LinkedList();
list.insertFirst("a");
console.log(list);
list.removeFirst();
console.log(list.size()); // returns 0 after removing first element
