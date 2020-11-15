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
  
    circular() {
        let moveByOne = this.head;
        let moveByTwo = this.head;
        
        while (moveByTwo.next && moveByTwo.next.next) {
        moveByOne = moveByOne.next;
        moveByTwo = moveByTwo.next.next;
        
        if (moveByTwo === moveByOne) return true;
        }
        
        return false;
        }
 
  }
  
  let list = new LinkedList();
  list.prepend(9);
  list.prepend(7);
  list.prepend(5);
  // list.tail.next = list.head;   // CIRCULAR LIST
  
  console.log(list.circular())
  