let myName = "Mukul Joshi";
console.log(myName);

let myNamesArray = ["Mukul Joshi", "Ram", "Shyam "];
console.log(myNamesArray);

let mathScore = 90;
console.log(mathScore);

let mathScores = [90, 30, 95];
console.log(mathScores);

let firstStundent = { name: "Mukul", city: "Chandigarh", country: "India" };
console.log(firstStundent);

let students = [
  { name: "Mukul", city: "Chandigarh", country: "India" },
  { name: "Ram", city: "Mumbai", country: "India" },
];
console.log(students);

let arrayConstructor = new Array();
arrayConstructor[0] = 2;
arrayConstructor[1] = 4;
console.log(arrayConstructor);

let arrayConstructor2 = new Array("Ram", "Shyam");
console.log(arrayConstructor2);

let filledArray = new Array(5).fill(0);
console.log(filledArray);

let ofArray = Array.of("of", "Ram", "Shyam");
console.log(ofArray);

let fromArray = Array.from("Hello");
console.log(fromArray);

let sparseArray = [1, , , 4];
console.log(sparseArray);
sparseArray[1] = 18;
console.log(sparseArray);

let ofArrayPlus = ["plus", ...ofArray];
console.log(ofArrayPlus);

let dynamicArray = [12, "Mukul", { name: "Mukul" }];
console.log(dynamicArray);

console.log(dynamicArray[0]);
console.log(dynamicArray[2]);

let fruits = ["mango", "banana", "apple"];
// let fruit1 = fruits[0];
// let fruit2 = fruits[1];
// let fruit3 = fruits[2];
// console.log(fruit1, fruit2, fruit3);

let [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1, fruit2, fruit3);

for (let i = 0; i < fruits.length; i++) {
  console.log("for", fruits[i]);
}

for (const fruit of fruits) {
  console.log("for of", fruit);
}

fruits.forEach((fruit) => {
  console.log("forEach", fruit);
});

fruits.push("grapes");
console.log(fruits);

const fruitsLastElement = fruits.pop();
console.log("last element", fruitsLastElement);
console.log(fruits);

const fruitsFirstElement = fruits.shift();
console.log("first element", fruitsFirstElement);
console.log(fruits);

fruits.unshift("papaya");
console.log(fruits);

let nums = [0, 1, 2, 3, 4];
const squaredNums = nums.map((num) => num * num);
console.log("nums", nums);
console.log("Squared nums", squaredNums);

let twoDimensionalArray = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(twoDimensionalArray);
console.log(twoDimensionalArray[0][1]);

let threeDimensionalArray = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];
console.log(threeDimensionalArray);

// Practice problem

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let i = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    } else if (nums[i] > target) {
      return i;
    }
  }
  return i;
};
