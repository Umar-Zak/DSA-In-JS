class AVLNode{
    value
    leftChild
    rightChild
    height=0

    constructor(value){
        this.value=value
    }
}


class AVLTree{
    root


    height(root){
        // if(!root)return -1

        // if(!root.leftChild && !root.rightChild)return 0

        // return 1 + Math.max(this.height(root.leftChild),this.height(root.rightChild))
    return root ? root.height: -1
    }

    ins(root,value){
        if(!this.root)return this.root=new AVLNode(value)
        

        if(root.value> value){
            if(!root.leftChild){
                root.leftChild=new AVLNode(value)
            }
           else this.ins(root.leftChild,value)
          
        }
         
         else{
             if(!root.rightChild){   
                 root.rightChild=new AVLNode(value)
             }
             else  this.ins(root.rightChild,value)
         }

         
         root.height=1+ Math.max(this.height(root.leftChild),this.height(root.rightChild))
          
         
        return this.balanceTree(root)
        
        
    }

    balanceTree(root){
        if(this.isLeftHeavy(root)){

            if(this.balanceFactor(root.leftChild) < 0)
                root.leftChild=this.rotateLeft(root.leftChild)
            
           return this.rotateRight(root)
          }

          if(this.isRightHeavy(root)){
            if(this.balanceFactor(this.rightChild)>0)
               root.rightChild= this.rotateRight(root.rightChild)
           return this.rotateLeft(root)
             
           
            
        }
        return root
    }

    rotateRight(root){
        const newRoot=root.leftChild
        root.leftChild=newRoot.rightChild
        newRoot.rightChild=root

        this.setHeight(root)
        this.setHeight(newRoot)
        return newRoot
    }


    rotateLeft(root){
        const newRoot=root.rightChild
        root.rightChild=newRoot.leftChild
        newRoot.leftChild=root
        
       this.setHeight(root)
       this.setHeight(newRoot)

        return newRoot
    }

    setHeight(root){
        root.height= 1+ Math.max(this.height(root.leftChild),this.height(root.rightChild))
    }

    balanceFactor(root){
        return root? this.height(root.leftChild)-this.height(root.rightChild): 0
    }

    isLeftHeavy(root){
        return this.height(root.leftChild)-this.height(root.rightChild)>1
    }

    isRightHeavy(root){
        return this.height(root.leftChild)-this.height(root.rightChild)< -1
    }

    insert(value){
     this.root= this.ins(this.root,value)
    }

    get(){
        return this.root
    }
}


const avltree=new AVLTree()
avltree.insert(30)
avltree.insert(20)
avltree.insert(10)
// avltree.insert(22)
// avltree.insert(21)
// avltree.insert(50)

// avltree.insert(70)
// avltree.insert(40)
// avltree.insert(60)
// avltree.insert(59)
// console.log(avltree.get())
console.log(true && false)