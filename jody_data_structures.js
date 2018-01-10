// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;
//
// USE ES2015/ES6

class Queue {
  constructor() {
    this.data = []
  }
  
  add(record){
    this.data.unshift(record);
  }
  
  remove(){
    return this.data.pop();
  }
  //for weave problem
  peek() {
    return this.data[this.data.length-1]
  }
}

// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
  let woven = new Queue();
  
  while (sourceOne.peek() || sourceTwo.peek()){
    if (sourceOne.peek()){
      woven.add(sourceOne.remove());
    }
    
    if (sourceTwo.peek()) {
      woven.add(sourceTwo.remove());
    }
  }
  
  return woven;
  
}

// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
  constructor() {
    this.data = []
  }
  
  push(record){
    this.data.push(record);
  }
  
  pop(){
    return this.data.pop();
  }
  
  peek() {
    return this.data[this.data.length - 1]
  }
  
}

module.exports = Stack;
