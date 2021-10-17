class Node{
    constructor(val){
        this.val=val
        this.next=null
        this.prev=null
    }
}
class DoublyLinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.length=0
    }
    push(val){
        let newNode=new Node(val)
        if(this.head==null){
            this.head=newNode
            this.tail=newNode
            return val
        }
        this.tail.next=newNode
        newNode.prev=this.tail
        this.tail=newNode
        this.length++
        return val
    }
    pop(){
        if(this.head==null||this.tail==null) return undefined
        let prev=this.tail.prev
        this.tail.prev=null
        let popped=this.tail.val
        prev.next=null
        this.tail=prev
        this.length--
        return popped
    }
    traverse(){
        let current= this.head
        while(current){
            console.log(current.val)
            current=current.next
        }
    }
}

let list = new DoublyLinkedList()
list.push("apple")
list.push("ball")
list.push("cat")
list.push("dog")
list.push("egg")
list.traverse()
console.log(list.pop())
list.traverse()