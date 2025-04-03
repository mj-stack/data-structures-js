import Queue from "./queue.js";

const printerQueue = new Queue();

printerQueue.enqueue("Document 1");
printerQueue.enqueue("Document 2");
printerQueue.enqueue("Document 3");
console.log(printerQueue.size());
console.log(printerQueue.isEmpty());

while (!printerQueue.isEmpty()) {
  console.log("Printing", printerQueue.dequeue());
}
