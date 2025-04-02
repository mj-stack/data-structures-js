export class Stack {
  #items = [];
  constructor() {}

  push(element) {
    this.#items.push(element);
  }

  pop() {
    if (this.#items.length === 0) {
      throw new Error("Nothing to POP");
    }
    return this.#items.pop();
  }

  peek() {
    if (this.#items.length === 0) {
      return null;
    }

    return this.#items[this.#items.length - 1];
  }

  isEmpty() {
    return this.#items.length === 0;
  }

  size() {
    return this.#items.length;
  }
}
