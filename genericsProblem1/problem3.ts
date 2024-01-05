// Generic Class for a Queue:
// Create a generic class Queue<T> that implements a basic queue. The class should have methods for enqueue, dequeue, and peek. Ensure that all elements in the queue have the same type.


class Queue<T> {
    private item: T[] = [];

     enqueue(element: T){
        this.item.push(element);
    }

     dequeue() {
        this.item.shift();
    }

     peek() {
      return this.item[0];
    }

    isEmpty() {
        return this.item.length === 0;
    }

    getQueue(): T[] {
        return this.item;
    }

    size() {
        return this.item.length;
    }
}

const NewQueue = new Queue<number>();
console.log("isEmpty :: ",NewQueue.isEmpty());
NewQueue.enqueue(33);
NewQueue.enqueue(55);
NewQueue.enqueue(100);

console.log("getQueue :: " ,NewQueue.getQueue());
console.log("peek :: ",NewQueue.peek());
console.log("size :: ",NewQueue.size());
console.log("isEmpty :: ",NewQueue.isEmpty());


NewQueue.dequeue();
NewQueue.dequeue();

console.log("getQueue :: ", NewQueue.getQueue());

