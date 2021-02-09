// Feel free to add any operation you know about stacks that is not included in this file or
// you can improve on the implemented ones.

class Stack{
    #leftBracket=["(","<","{","["]
    #rightBracket=[")",">","}","]"]


    // 1- Implement two stacks in one array. Support these operations:
    // push1() // to push in the first stack
    // push2() // to push in the second stack
    // pop1()
    // pop2()
    // isEmpty1()
    // isEmpty2()

//[5->4 -> 2->1]

    #items;
    #count=0
    #countOne=0
    #countTwo=0
    #stackTwo;
    #minStack=[]
    constructor(){
        this.#items=[]
        this.#stackTwo={first:[],second:[]}
    }


    push1(item){
        this.#stackTwo.first[this.#countOne++]=item
    }
    push2(item){
        this.#stackTwo.second[this.#countTwo++]=item
    }


        isEmpty1(){
            return this.#stackTwo.first.length===0
        }
        isEmpty2(){
            return this.#stackTwo.second.length===0
        }

        pop1(){
            const poped=this.#stackTwo.first[--this.#countOne]
            const copy=[]
            for (let i=0;i<this.#countOne;i++){
                copy[i]=this.#stackTwo.first[i]
            }
            this.#stackTwo.first=copy
            return poped
        }
        pop2(){
            const poped=this.#stackTwo.second[--this.#countTwo]
            const copy=[]
            for (let i=0;i<this.#countTwo;i++){
                copy[i]=this.#stackTwo.second[i]
            }
            this.#stackTwo.second=copy
            return poped
        }

    printDoubleStack(){
        console.log(this.#stackTwo)
    }

    push(item){
        if(this.#count===0)this.#minStack[this.#minStack.length]=item
        
        if(this.#minStack[this.#minStack.length-1]>item)this.#minStack[this.#minStack.length]=item
        
        this.#items[this.#count]=item
        this.#count++
    }

    min(){
        return this.#minStack[this.#minStack.length-1]
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
        let top=this.#items[--this.#count]
        if(top===this.#minStack[this.#minStack.length-1])this.#minStack.pop()
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
stack.push(45)
stack.push(490)
stack.push(70)
stack.push(10)
console.log(stack.min())
stack.pop()
console.log(stack.min())
stack.push(50)
stack.push(870)
stack.push(123)


 
  
 