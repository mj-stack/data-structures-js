class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtEnd(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  traverse() {
    if (this.head === null) {
      return;
    }

    let current = this.head;
    console.log(current.data);

    while (current.next !== null) {
      current = current.next;
      console.log(current.data);
    }
  }

  deleteByValue(dataToDelete) {
    if (this.head === null) {
      return;
    }

    let current = this.head;
    if (current.data === dataToDelete) {
      this.head = current.next;
      return;
    }
  }
}

const linkedList = new LinkedList();
linkedList.insertAtEnd(2);
linkedList.insertAtEnd(3);
linkedList.insertAtEnd(4);
linkedList.deleteByValue(3);
linkedList.traverse();

export default Node;
