import Queue from "./queue.js";

const queueInstance = new Queue();

queueInstance.enqueue(2);
const item = queueInstance.dequeue();
console.log("Dequeue Item", item);

queueInstance.enqueue(22);
queueInstance.enqueue(25);
const peekedItem = queueInstance.peek();
console.log(peekedItem);

console.log(queueInstance.isEmpty());
queueInstance.dequeue();
console.log(queueInstance.isEmpty());
queueInstance.dequeue();
console.log(queueInstance.isEmpty());

queueInstance.enqueue(25);
queueInstance.enqueue(50);
queueInstance.enqueue(75);
queueInstance.enqueue(100);
const totalItems = queueInstance.size();
console.log(totalItems);
