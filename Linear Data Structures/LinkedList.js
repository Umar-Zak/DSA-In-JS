class Nodes {
    // This class is named Nodes to prevent naming conflicts with the internal Node class


    value
    next
    constructor(value) {
        this.value = value ? value : 0
    }

}

class LinkedList {

    #first
    #last
    #count = 0
    addLast(value) {
        const node = new Nodes(value)
        if (!this.#first) {
            this.#first = this.#last = node
        }
        else {
            this.#last.next = node
            this.#last = node
        }
        this.#count++
    }

    getList() {
        return this.#first
    }

    addFirst(value) {
        const node = new Nodes(value)
        this.#count++
        if (!this.#first) return this.#first = this.#last = node

        node.next = this.#first
        this.#first = node
    }

    print() {
        console.log(this.#first, this.#last)
    }

    removeFirst() {
        if (!this.#first) throw new Error("Illegal Operation")

        this.#count--
        if (this.#first === this.#last) return this.#first = this.#last = null

        const next = this.#first.next
        this.#first.next = null
        this.#first = next
    }

    findElement(element) {
        let current = this.#first
        while (current) {
            if (current.next === element) return current
            current = current.next
        }
    }

    removeLast() {
        if (!this.#first) throw new Error("Illegal operation")

        this.#count--
        if (this.#first === this.#last) return this.#first = this.#last = null

        const node = this.findElement(this.#last)
        node.next = null
        this.#last = node
    }


    size() {
        return this.#count
    }


    isEmpty() {
        return this.#first ? false : true
    }


    findKthFromEnd(position) {
        if (this.isEmpty()) throw new Error("Illegal Operation")

        if (position <= 0 || position > this.size()) throw new Error("Illegal Argument")

        let begin = this.#first
        let end = this.#first

        for (let i = 0; i < position - 1; i++) {
            end = end.next
        }

        while (end.next) {
            begin = begin.next
            end = end.next
        }
        return begin.value
    }


    removeKthNodeFromEnd(kth) {
        let flag = false
        let rear = this.#first
        let pointer = this.#first
        let previous = this.#first;
        for (let i = 0; i < kth - 1; i++) {
            pointer = pointer.next
        }

        while (pointer.next) {
            previous = rear
            rear = rear.next
            pointer = pointer.next
            flag = true
        }

        if (!flag) return this.#first.next

        previous.next = null
        previous.next = rear.next


        return this.#first
    }

    reverse() {
        if (!this.#first || this.#first === this.#last) return
        // [2->4->7->6]
        let current = this.#first.next
        let previous = this.#first
        while (current) {
            let next = current.next
            current.next = previous
            previous = current
            current = next
        }
        this.#last = this.#first
        this.#last.next = null
        this.#first = previous

    }


    findMidNode() {
        const size = this.size()
        let flag = 0
        let mid = this.#first
        if (size % 2 !== 0) {
            flag = ((size - 1) / 2)
            for (let i = 0; i < flag; i++)
                mid = mid.next
        }
        else {
            //To be implemented: When a linked list has even number of nodes
        }



        return mid.value
    }

}


function MergeTwoList(l1, l2) {
    let l=new LinkedList()
    let p = l1
    let q = l2
    while (p || q) {
         
     if(p && q){
        if (p.value < q.value) {
            l.addLast(p.value)
            l.addLast(q.value)
            p=p.next
            q=q.next
       }
       else {
            l.addLast(q.value)
            l.addLast(p.value)
            p=p.next
            q=q.next
       }
     }

     if(p && !q){
         l.addLast(p.value)
         p=p.next
     }
     if(!p && q){
         l.addLast(q.value)
         q=q.next
     }
    }

    console.log(l.getList())
}




function sumOfTwo(l1, l2) {
    const dummy = new Nodes()
    let current;
    let c = current = dummy
    let p = l1
    let q = l2
    let carry = 0

    while (p || q) {
        const x = p ? p.value : 0
        const y = q ? q.value : 0
        const sum = x + y + carry
        carry = sum % 10
        carry = sum - carry
        current.next = new Nodes(sum % 10)
        current = current.next
        p = p ? p.next : null
        q = q ? q.next : null
    }
    if (carry > 0) current.next = new Nodes(1)

    return c.next
}


const list = new LinkedList()
const list2 = new LinkedList()
list.addLast(1)
list.addLast(4)
list.addLast(7)
 list.addLast(2)


list2.addLast(2)
list2.addLast(3)
list2.addLast(10)

const l1=list.getList()
const l2=list2.getList()

 MergeTwoList(l1,l2)
// console.log(2)