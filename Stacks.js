class Stack{
    #leftBracket=["(","<","{","["]
    #rightBracket=[")",">","}","]"]


    #items;
    #count=0
    constructor(){
        this.#items=[]
    }

    push(item){
        this.#items[this.#count]=item
        this.#count++
    }

    peek(){
        if(this.#count===0)throw new Error("Illegal Operation")
        return this.#items[this.#count-1]
    }

    isEmpty(){
        return this.#items.length===0
    }

    pop(){
        if(this.#count===0)throw new Error("Illegal Operation")
        let copy=[]
        let top=this.#items[this.#count-1]
        for (let i=0;i<=this.#count-2;i++){
            copy[i]=this.#items[i]
        }
        this.#items=copy
        this.#count--
        return top
    }

    print(){
         console.log(this.#items)
    }

     reverse(word){
         if(!word)throw new Error("Illegal argument")
        let letters=[...word]
        
        let reversed=""
    
        for (let i=letters.length-1;i>=0;i--)
            reversed+=letters[i]
    return reversed
    }
    

    isLeftBracket(char){
      return this.#leftBracket.includes(char)
    }


    isRightBracket(char){
        return  this.#rightBracket.includes(char)
    }

    bracketsMatch(left, right){
        return (left==="("&& right!==")")||(left==="<"&& right!==">")||(left==="{"&& right!=="}")||(left==="["&& right!=="]")
    }
    isBalanced(exp){
        let expression=[...exp]
        let stack=[]
        
        for (let i=0;i<expression.length;i++){
            if(this.isLeftBracket(expression[i])){
                stack[stack.length]=expression[i]
            }
             if(this.isRightBracket(expression[i])){
                 if(!stack.length)return false
               const top= stack.pop()
               if(this.bracketsMatch(top,expression[i]))return false
             }
              
        }
        return stack.length?false:true
    }
}



const stack=new Stack()
 stack.push(23)
 stack.push(50)
 stack.push(100)
 stack.push(40)
 stack.print()
  
 