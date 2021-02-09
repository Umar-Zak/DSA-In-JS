
class ArrayQueue{

    #list
    #front=0
    #end=0
    
    constructor(){
        this.#list=[]
    }

    enqueue(item){
        this.#list[this.#end++]=item
    }

    dequeue(){
        if(this.#list.length===this.#front)throw new Error("Illegal Operation")
        const first=this.#list[this.#front]
        this.#list[this.#front]=0
        this.#front++
        return first
    }

    peek(){
        if(this.#list.length===this.#front)throw new Error("Illegal Operation")
        return this.#list[this.#front]
        
    }

    isEmpty(){
        return this.#list.length===0
    }
}




//Implementing a queue using circular arrays

class CircularArrayQueue{
#length;
#front=0;
#rear=0;
#count=0
#items
constructor(length){
    if(!length)throw new Error("Illegl Operation")
    this.#length=length
    this.#items=[]
}

enqueue(item){
    if(this.#count===this.#length)throw new Error("Index out of bounce")
    this.#items[this.#rear]=item
    this.#rear=(this.#rear+1)%this.#length
    this.#count++

}

dequeue(){
    if(this.#count===0)return
    const first=this.#items[this.#front]
    this.#items[this.#front]=0
    this.#front=(this.#front+1)%this.#length
    this.#count--
    return first
}

print(){
    console.log(this.#items)
}

}

//Implementing queues using stacks


class StackQueue{
    #queue
    #copy
    #front=0
    #rear=0

    constructor(){
        this.#queue=[]
        this.#copy=[]
    }

    enqueue(item){
        this.#queue[this.#rear++]=item
        this.#copy=[]
        for (let i=this.#rear-1;i>=this.#front;i--){
            this.#copy[this.#copy.length++]=this.#queue[i]
           
        }
       
    }

    dequeue(){
        const length=this.#copy.length
        if(length===0)return
        const front=this.#copy[length-1]
        this.#front++
        this.#copy.length=length-1
        return front
      
    }

}





//Implementing priority queues

class PriorityQueue{

    #items;
    #count=0
    constructor(){
        this.#items=[]
    }

    print(){
        console.log(this.#items)
    }

    enqueue(item){
        let i=0
        for( i=this.#count-1;i>=0;i--){
            if(this.#items[i]>item){
                this.#items[i+1]=this.#items[i]
            }

            else break
            
        }
        this.#items[i+1]=item
        this.#count++
    }

    dequeue(){
        return this.#items[--this.#count]
    }
}

   
const queue=new PriorityQueue()

queue.enqueue(5)
queue.enqueue(4)
queue.enqueue(10)
queue.enqueue(2)
queue.enqueue(1)
queue.enqueue(0)
queue.enqueue(0)

console.log(queue.dequeue())
queue.enqueue(4)
console.log(queue.dequeue())
queue.print()