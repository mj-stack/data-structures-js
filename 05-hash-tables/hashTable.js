class HashTable {
  constructor(size = 50) {
    this.keyMap = new Array(50);
  }

  simpleHash(key, maxValues) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      let asciiCode = key[i].charCodeAt(0);
      total = total + asciiCode;
    }

    return total % maxValues;
  }

  set(key, value) {
    const hashCode = this.simpleHash(key, this.keyMap.length);
    if (!this.keyMap[hashCode]) {
      this.keyMap[hashCode] = [];
    }

    console.log("hashcode", hashCode);
    this.keyMap[hashCode].push([key, value]);
  }

  get(key) {
    const hashCode = this.simpleHash(key, this.keyMap.length);

    const result = this.keyMap[hashCode];
    for (let pair of result) {
      if (pair[0] === key) {
        return pair[1];
      }
    }

    return undefined;
  }
}

const hashTable = new HashTable();
hashTable.set("mukul", "joshi");
hashTable.set("lukum", "emjay");
console.log("value of mukul is", hashTable.get("mukul"));
console.log("value of lukum is", hashTable.get("lukum"));
