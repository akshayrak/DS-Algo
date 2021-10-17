class Node{
    constructor(val){
      this.val=val
      this.next=null
    }
  }
  class singlyLinkedList{
    constructor(){
      this.head=null
      this.tail=null
      this.length=0
    }
    push(val){
      let newNode = new Node(val)
      if(this.head==null){
        this.head=newNode
        this.tail=newNode
      }else{
        this.tail.next=newNode
        this.tail=newNode
      }
      this.length++
      return this.traverse()
    }
    traverse(){
        let current = this.head
        console.log("============================================================")
        while(current){
            console.log(current.val)
            current=current.next
        }
        console.log("============================================================")
  
    }
      pop(){
          if(this.head==null)return undefined
          let current=this.head
          let previous=this.head
          if(this.length==1){
              this.head=null
              this.tail=null
              return current.val
          }
          while(current.next){
              previous=current
              current=current.next
  
          }
          this.tail=previous
          this.tail.next=null
          this.length--
          return current.val
      }
      remove(i){
          if(i>this.length-1) return undefined
          if(i==this.length-1){
              return this.pop()
          }
          let current=this.head
          let previous=current
          let next=current.next
          if(i==0){
              this.head=next
              this.length--
              return current.val
          }
          for(let j=0;j<i;j++){
              previous=current
              current=current.next
              next=current.next
          }
          previous.next=next
          this.length--
          return current.val
      }
      insert(val,i){
          let newNode = new Node(val)
          if(i>this.length||i<0) return undefined
          if(i==this.length){
              return this.push(val)
          }
          if(i==0){
              newNode.next=this.head
              this.head=newNode
              this.length++
              return this.traverse()
          }
          let current=this.head
          let next=current.next
          for(let j=0;j<i-1;j++){
              current=next
              next=current.next
          }
          current.next=newNode
          newNode.next=next
          this.length++
          return this.traverse()
      }
      shift(val){
          return this.insert(val,0)
      }
      unshift(){
          return this.remove(0)
      }
      get(i){
          if(i>=this.length||i<0) return undefined
          let current = this.head
          for(let j=0;j<i;j++){
              current=current.next
          }
          return current.val
      }
      set(i,val){
          if(i>=this.length||i<0) return undefined
          let current = this.head
          for(let j=0;j<i;j++){
              current=current.next
          }
          current.val=val
          return this.traverse()
      }
      reverse(){
        let current=this.head
        this.head=this.tail
        this.tail=current
        let previous=null
        let next;
        for(let i=0;i<this.length;i++){
          next=current.next
          current.next=previous
          previous=current
          current=next
        }
        return this.traverse()
     }
}
  
  let list = new singlyLinkedList()
  list.push("apple")
  list.push("orange")
  list.push("grapes")
  list.push("mangos")
  list.push("jackfruit")
  console.log(list.pop())
  list.insert("lemon",0)
  list.push("grapes")
  console.log(list.remove(0))
  console.log(list.remove(2))
  list.traverse()
  console.log(list.unshift())
  list.insert("dragonfruit",0)
  list.shift("jackfruit")
  console.log(list.get(3))
  list.set(4,"pineApple") 
  console.log("===========reverse================")
  list.reverse()