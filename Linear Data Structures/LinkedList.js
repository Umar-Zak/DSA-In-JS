class Nodes{
    // This class is named Nodes to prevent naming conflicts with the internal Node class


    value
    next
    constructor(value){
        this.value=value
    }

}

class LinkedList{

    #first
    #last
    #count=0
    addLast(value){
        const node=new Nodes(value)
        if(!this.#first){
            this.#first=this.#last=node
        }
        else{
            this.#last.next=node
            this.#last=node
        }
        this.#count++
    }



    addFirst(value){
        const node=new Nodes(value)
        this.#count++
        if(!this.#first)return this.#first=this.#last=node

        node.next=this.#first
        this.#first=node
    }

    print(){
        console.log(this.#first,this.#last)
    } 

    removeFirst(){
        if(!this.#first)throw new Error("Illegal Operation")

        this.#count--
        if(this.#first===this.#last)return this.#first=this.#last=null

        const next=this.#first.next
        this.#first.next=null
        this.#first=next
    }

    findElement(element){
        let current=this.#first
        while(current){
            if(current.next===element)return current
            current=current.next
        }
    }

    removeLast(){
        if(!this.#first)throw new Error("Illegal operation")

        this.#count--
        if(this.#first===this.#last)return this.#first=this.#last=null

        const node=this.findElement(this.#last)
        node.next=null
        this.#last=node
    }


    size(){
        return this.#count
    }


    isEmpty(){
        return this.#first?false:true
    }


    findKthFromEnd(position){
        if(this.isEmpty())throw new Error("Illegal Operation")

        if(position<=0 || position>this.size())throw new Error("Illegal Argument")

        let begin=this.#first
        let end=this.#first

        for (let i=0; i<position-1;i++){
            end=end.next
        }

        while(end.next){
            begin=begin.next
            end=end.next
        }
        return begin.value
    }

    reverse(){
        if(!this.#first||this.#first===this.#last)return
        // [2->4->7->6]
        let current=this.#first.next
        let previous=this.#first
        while(current){
            let next=current.next
            current.next=previous
            previous=current
            current=next
        }
        this.#last=this.#first
        this.#last.next=null
        this.#first=previous
        
    }
    

    findMidNode(){
        const size=this.size()
        let flag=0
        let mid=this.#first
        if(size%2!==0){
            flag=((size-1)/2)
            for(let i=0; i<flag; i++)
            mid=mid.next
        }
else{
    //To be implemented: When a linked list has even number of nodes
}

        
        
        return mid.value
    }

}

const list=new LinkedList()
 list.addFirst(6)
 list.addFirst(60)
 list.addFirst(30)
 list.addFirst(10)
 list.addFirst(90)
 console.log(list.findMidNode())