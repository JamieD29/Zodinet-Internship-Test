class Stack {
  constructor() {
    this.stack = [];
  }

  find(value) {
    for (let i = this.stack.length; i >= 0; i--) {
      if (this.stack[i] === value) {
        return  this.stack.length - i ;
      }
    }
    return -1;
  }

  push(value) {
    return this.stack.push(value);
  }

  pop() {
    if(this.stack.length=== 0){
        return "Underflow";
    }
    let popValue = "";
    let i = this.stack.length - 1;
    return (popValue += this.stack.splice(i, 1));
  }

  size() {
    return this.stack.length;
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  outPPutStack() {
    let item = "";
    for (let i = 0; i < this.stack.length; i++) {
      item += this.stack[i] + ", ";
    }
    return item;
  }
}

let stack = new Stack();
console.log("is Empty: ", stack.isEmpty());
stack.push(123);
stack.push(345);
stack.push(1612);
stack.push(2909);
setTimeout(() => {
  console.log("is Empty: ", stack.isEmpty());
}, 1000);
console.log("Stack:", stack.outPPutStack());
console.log("Size: ", stack.size());
console.log("Does the stack contain '345': ", stack.find(345));
console.log("Does the stack contain '123': ", stack.find(123));
console.log("Does the stack contain '999': ", stack.find(999));
setTimeout(() => {
  console.log("Pop: ", stack.pop());
  console.log("Pop: ", stack.pop());
  console.log("Stack after pop:", stack.outPPutStack());
}, 5000);
