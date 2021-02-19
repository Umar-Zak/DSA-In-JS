class Nodes {
    value
    leftChild
    rightChild

    constructor(value) {
        this.value = value
    }

}


class BinaryTree {
    root

    insert(value) {
        const node = new Nodes(value)
        if (!this.root) return this.root = node

        let previous = this.root
        let current = this.root

        while (current) {
            previous = current
            if (current.value > value) current = current.leftChild

            else current = current.rightChild

        }

        if (previous.value > value) return previous.leftChild = node

        previous.rightChild = node
    }


    findNode(value) {
        let previous = this.root
        let current = this.root

        while (current) {
            if (current.value === value) return current
            previous = current
            if (current.value > value) current = current.leftChild

            else current = current.rightChild
        }
        return previous
    }

    // find(value) {
    //     const previous = this.findNode(value)
    //     return previous.value === value ? true : false
    // }

    fn(root,value){
        if(!root)return 0
        if(root.value===value)return 1

        if(!root.leftChild && !root.rightChild)return 0

        return (this.fn(root.leftChild,value)+this.fn(root.rightChild,value))>0?true:false
    }6

    find(value){
      return  this.fn(this.root,value)
    }

    traversePre(root) {
        if (!root) return

        console.log(root.value)
        this.traversePre(root.leftChild)
        this.traversePre(root.rightChild)
    }


    traversePreOrder() {
        this.traversePre(this.root)
    }

    traverseIn(root) {
        if (!root) return

        this.traverseIn(root.leftChild)
        console.log(root.value)
        this.traverseIn(root.rightChild)
    }

    traverseInOrder() {
        this.traverseIn(this.root)
    }

    traversePost(root) {
        if (!root) return

        this.traversePost(root.leftChild)
        this.traversePost(root.rightChild)
        console.log(root.value)
    }

    traversePostOrder() {
        this.traversePost(this.root)
    }


    ht(root) {
        if (!root) return -1

        if (!root.leftChild && !root.rightChild) return 0

        return 1 + Math.max(this.ht(root.leftChild), this.ht(root.rightChild))
    }

    height() {
        return this.ht(this.root)
    }

    mn(root) {
        if (!this.root) throw new Error("Illegal State")

        if (!root) return Number.MAX_VALUE

        if (!root.leftChild && !root.rightChild) return root.value

        const left = this.mn(root.leftChild)
        const right = this.mn(root.rightChild)

        return Math.min(Math.min(left, right), root.value)
    }

    min() {
        return this.mn(this.root)
        // if (!this.root) throw new Error("Illegal State")

        // let current = this.root
        // let last = this.root
        // while (current) {
        //     last = current
        //     current = current.leftChild
        // }

        // return last.value
    }


    equal(firstRoot,secondRoot){
        if((!firstRoot && secondRoot)||(firstRoot && !secondRoot))return false

        if(!firstRoot && !secondRoot)return true
        
        const root=firstRoot.value===secondRoot.value
        const left=this.equal(firstRoot.leftChild,secondRoot.leftChild)
        const right=this.equal(firstRoot.rightChild,secondRoot.rightChild)
        return root===left==right
    }

    isEqual(tree){
        return this.equal(this.root,tree)
    }

    isBinary(tree, min, max){

        if(!tree)return true

        if(tree.value < min-1 || tree.value > max)return false
 

        return this.isBinary(tree.leftChild, min, tree.value-1) && this.isBinary(tree.rightChild, tree.value+1, max)
        
    }

    isBal(root){
        if(!root)return true

        if(this.ht(root.leftChild)-this.ht(root.rightChild)>1 ||
         this.ht(root.leftChild)-this.ht(root.rightChild)< -1)return false


        return this.isBal(root.leftChild) && this.isBal(root.rightChild)

    }

    isBalanced(){
        return this.isBal(this.root)
    }

    isBinarySearchTree(){
      return  this.isBinary(this.root,Number.MIN_VALUE,Number.MAX_VALUE)
    }

    NodeFromDistance(root,kth,list){

        if(!root)return

        if(kth===0){
            list.push(root.value)
            return
        }

      
        this.NodeFromDistance(root.leftChild,kth-1,list)
        this.NodeFromDistance(root.rightChild,kth-1,list)
    }

    NodeFromKthDistance(distance){
        const list=[]
        this.NodeFromDistance(this.root,distance,list)
        return list
    }


    traverseLevelOrder(){
        for(let i=0;i<=this.height();i++){
            const list=this.NodeFromKthDistance(i)
            list.forEach((item)=>{
                console.log(item)
            })
        }
    }


    sz(root){
        if(!root)return 0
        const left=this.sz(root.leftChild)
        const right=this.sz(root.rightChild)
        return 1 + left + right
    }

    size(){
        return this.sz(this.root)
    }

    mx(root){
        if(!root)return Number.MIN_VALUE

        if(!root.leftChild && !root.rightChild)return root.value

        const left=this.mx(root.leftChild)
        const right=this.mx(root.rightChild)

        return Math.max(Math.max(left,right),root.value)
    }

    max(){
        return this.mx(this.root)
    }

    getAns(root,value,list){
        if(!root)return false

        if(root.value===value)return true

        if(this.getAns(root.leftChild,value,list)||this.getAns(root.rightChild,value,list)){
            list.push(root.value)
            return true
        }
    }


    getAncestors(value){
        const list=[]
        this.getAns(this.root,value,list)
        return list
    }

    swap(){
        const temp=this.root.leftChild
        this.root.leftChild=this.root.rightChild
        this.root.rightChild=temp
    }

}


const tree = new BinaryTree()
const tree2=new BinaryTree()

tree.insert(20)
tree.insert(10)
tree.insert(30)
// tree.insert(6)
// tree.insert(21)
// tree.insert(60)
// tree.insert(27)
// tree.insert(14)
// tree.insert(24)
// tree.insert(24)
// tree.insert(24)
// tree.insert(24)


// tree.swap()

 

 console.log(tree.isBalanced())