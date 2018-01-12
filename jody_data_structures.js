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

// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {  
    this.s1 = new Stack();
    this.s2 = new Stack();
  }
  

  swap(stack1, stack2) {
    while (stack1.peek()) {
      stack2.push(stack1.pop());
    }
  }
  
  add(record){
      this.s1.push(record)
  }

  remove(){
      this.swap(this.s1,this.s2);
      const record = this.s2.pop();
      this.swap(this.s2,this.s1);
      return record;
  }
  
  peek() {
    this.swap(this.s1,this.s2);
    const record = this.s2.peek();
    this.swap(this.s2,this.s1);
    return record; 
  }
  
}

// --- Directions
// Implement classes Node and Linked Lists

class Node {
  
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
  
}

class LinkedList {
  constructor(){
    this.head = null;
  }
  
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  
  size(){
    let counter = 0
    let currentNode = this.head;
    
    while (currentNode) {
      counter++;
      currentNode = currentNode.next;
    }
    
    return counter;
  }
  
  getFirst(){
    return this.head;
    
  }
  
  getLast(){
    
    let currentNode = this.head;
    
    while (currentNode) {
      if (!currentNode.next) {
        return currentNode
      }
      currentNode = currentNode.next
    }
    
  }
  
  clear() {
    
    let node = this.head;
    while (node) {
      this.head = null;
      node = node.next;
    }
  }
  
  removeFirst() {
    this.head = this.head.next;
  }
  
  removeLast() {
    if (!this.head) {
      return
    }
    
    if (!this.head.next) {
      this.head = null;
      return;
    }
    
    let node = this.head
    while (node) {
      if (!node.next.next){
        node.next = null
        return;
      } else {
        node = node.next
      }
    }
  }
  
  insertLast(data) {
    
  }
      

  getAt(index){

    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      } 
      
      counter++;
      node = node.next;
    }
    
    return null;
    
  }
    
  
  removeAt(index) {
    if (!this.head){
      return
    }
    
    if (!this.head.next){
      this.head = null;
      return
    }
    
    if (index === 0) {
      this.head = this.head.next
      return
    }

    let previousNode = this.getAt(index-1)
    previousNode.next = this.getAt(index+1)
    
  }
  
  insertAt(data, index) {
    if (!this.head || !this.head.next || !this.getAt(index)) {
      this.insertLast(data);
      return;
    }
    
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    
    let previousNode = this.getAt(index-1);
    let nextNode = this.getAt(index);
    previousNode.next = new Node(data, nextNode);
    
  }
  
  
}
    
  
  
