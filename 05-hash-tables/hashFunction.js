function simpleHash(key, maxValues) {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    let asciiCode = key[i].charCodeAt(0);
    total = total + asciiCode;
  }

  return total % maxValues;
}

console.log(simpleHash("mukul", 50));
console.log(simpleHash("abcdef", 50));
console.log(simpleHash("ashish", 50));
