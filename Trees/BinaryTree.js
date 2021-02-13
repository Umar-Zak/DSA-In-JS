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

    find(value) {
        const previous = this.findNode(value)
        return previous.value === value ? true : false
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

}


const tree = new BinaryTree()

tree.insert(20)
tree.insert(10)
tree.insert(30)
tree.insert(6)
tree.insert(14)
tree.insert(3)
tree.insert(8)
tree.insert(24)
tree.insert(26)

console.log(tree.min())