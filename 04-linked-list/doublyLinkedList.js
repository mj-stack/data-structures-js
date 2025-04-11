class Node {
  constructor(data) {
    this.previous = null;
    this.data = data;
    this.next = null;
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const currentLastNode = this.tail;
      currentLastNode.next = newNode;
      newNode.previous = currentLastNode;
      this.tail = newNode;
    }
  }

  prepend(data) {
    const newNode = new Node(data);
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const currentStartNode = this.head;
      newNode.next = currentStartNode;
      currentStartNode.previous = newNode;
      this.head = newNode;
    }
  }

  traverseFromStart() {
    if (this.head === null) {
      return;
    }

    let current = this.head;
    do {
      console.log(current.data);
      current = current.next;
    } while (current !== null);
  }

  traverseFromEnd() {
    if (this.tail === null) {
      return;
    }

    let current = this.tail;
    do {
      console.log(current.data);
      current = current.previous;
    } while (current !== null);
  }

  delete(dataToDelete) {
    if (this.head === null) {
      return;
    }

    let current = this.head;
    while (current !== null) {
      if ((current.data = dataToDelete)) {
        if (current === this.head) {
          this.head = current.next;
          this.head.previous = null;
        }

        if ((current = this.tail)) {
          this.tail = current.previous;
          this.tail.next = null;
        }

        if (current.previous) {
          current.previous.next = current.next;
        }

        if (current.next) {
          current.next.previous = current.previous;
        }
      }
      current = current.next;
    }
  }

  search(valueToSearch) {
    if (this.head === null) {
      return false;
    }

    let current = this.head;
    do {
      if (current.data === valueToSearch) {
        return true;
      }
    } while (current != null);

    return false;
  }

  length() {
    if (this.head === null) {
      return 0;
    }

    let result = 0;
    let current = this.head;
    do {
      current = current.length;
      result++;
    } while (current !== null);
    return result;
  }
}

const doubly = new doublyLinkedList();
doubly.append(2);
doubly.traverseFromStart();
doubly.append(3);
doubly.traverseFromStart();
doubly.prepend(1);
doubly.traverseFromStart();
console.log("Traverse from end");
doubly.traverseFromEnd();
doubly.delete(1);
console.log("Traverse from start");
doubly.traverseFromStart();
doubly.search(2);
