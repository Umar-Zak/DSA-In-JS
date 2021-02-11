 

 function findFirstNonRepeatedChar(word){
     const characters=[...word]
     const length=characters.length
     const map={}

     for(let i=0;i<length;i++){
         count=map[characters[i]]?map[characters[i]]:0
         map[characters[i]]=count+1
     }
     for (let i=0;i<length;i++){
         if(map[characters[i]]===1)return characters[i]
     }
     return null
 }


 function findFirstRepeatedChar(word){
    const characters=[...word]
    const length=characters.length
    const map={}

    for(let i=0;i<length;i++){
        count=map[characters[i]]?map[characters[i]]:0
        map[characters[i]]=count+1
    }
    
    for (let i=0;i<length;i++){
        if(map[characters[i]]>1)return characters[i]
    }
    
    return null
    
}

//nodes
//LinedList


class Nodes{
    value
    key
    next

    constructor(key,value){
        this.key=key
        this.value=value
    }


}

class LinkedList{
    first
    last

    checkAvailability(node){
        let current=this.first
            while(current){
                if(current.key===node.key){
                    current.value=node.value
                    return
                }
                current=current.next
            }
    }

    addLast(key,value){
        const node=new Nodes(key,value);
        if(!this.first) this.first=this.last=node

        else{
            this.checkAvailability(node)
            this.last.next=node
            this.last=node
        }
    }

    get(key){
        let current=this.first
        while(current){
            if(current.key===key)return current.value
            current=current.next
        }
        return null
    }

    
}


class HashMap{

    #items

    constructor(){
        this.#items=[]
    }

      hash(id){
        return id % 5
    }

  getBucket(index){
return this.#items[index]
}

    put(key, value){
        const index=this.hash(key)
        let bucket=this.getBucket(index)
         if(!bucket){
             bucket=new LinkedList()
             bucket.addLast(key,value)
             this.#items[index]=bucket
         }
         else{
              bucket=this.#items[index]
              bucket.addLast(key,value)
         }
    }
    
    get(key){
        const index=this.hash(key)
        return this.#items[index].get(key)
    }

}




 
 
 