const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
console.log(mySet.has(2));
console.log(mySet.has(4));
mySet.delete(1);
console.log(mySet);
mySet.add(4);
mySet.add(5);
mySet.add(6);
mySet.forEach((value) => console.log(value));
for (const value of mySet) {
  console.log(value);
}
mySet.clear();
console.log("Clearing my set");
console.log(mySet);

const myArray = [1, 2, 2, 3, 4, 4, 5];
console.log(myArray);

const mySet2 = new Set(myArray);
console.log(mySet2);
