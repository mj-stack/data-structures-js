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

const mySet2 = [...new Set(myArray)];
console.log(mySet2);

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

const unionSet = new Set([...setA, ...setB]);
console.log(unionSet);

const setAAsArray = [...setA];
const intersection = setAAsArray.filter((x) => setB.has(x));
const intersectionSet = new Set(intersection);
console.log(intersectionSet);

const setAAsArrayD = [...setA];
const differenceArray = setAAsArray.filter((x) => !setB.has(x));
console.log(differenceArray);
const differenceSet = new Set(differenceArray);
console.log(differenceSet);
