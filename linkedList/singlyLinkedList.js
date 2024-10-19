class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }

    this.size += 1;
  }

  printList() {
    const list = [];

    let curr = this.head;

    while (curr) {
      list.push(curr.val);
      curr = curr.next;
    }

    console.log(list.join(" -> "));
  }

  insertAt(val, pos) {
    if (pos > this.size) {
      throw new Error("invalid position");
    }

    const node = new Node(val);
    // if pos is 0 means adding new head

    if (pos == 0) {
      // node.next will be point at head
      node.next = this.head;
      // node will be new head
      this.head = node;
      this.size += 1;
      return;
    }

    let index = 0;
    let prevNode = null;
    let curr = this.head;

    while (index < pos) {
      // prev node will be index-1
      prevNode = curr;
      //curr will be next
      curr = curr.next;
      //increase index
      index++;
    }
    node.next = curr;
    prevNode.next = node;
    this.size += 1;
  }

  remove(val) {
    // if !val then we will pop from the list
    let curr = this.head;
    let index = 0;
    if (!val) {
      while (index < this.size - 2) {
        curr = curr.next;
        index++;
      }
      curr.next = null;
      this.size -= 1;
      return;
    }

    let prev = null;
    while (index < this.size && curr.val !== val) {
      prev = curr;
      curr = curr.next;
      index++;
    }
    // IF node is head
    if (val == this.head.val) {
      this.head = this.head.next;
    } else {
      prev.next = curr.next;
    }
    this.size -= 1;
  }
}

let list = new SinglyLinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.printList();
list.remove();
list.remove(1);
list.remove(3);

list.printList();
