//Given  linked list if linked list has a cycle or not
// this question is very classic interview question which  i will use flyod's Algorithm(Tortoise and Hare) 
/*class Node{
    constructor(element){
        this.element=element;
        this.next=null;
    }
}
class linkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
}

function hasCycle(linkedList){
    if(linkedList==null)return false;
    let tortoise = linkedList;
    let hare = linkedList.next;

    while(hare && hare.next && tortoise){
    
        if(tortoise==hare){
            return true;
        }
        tortoise=tortoise.next;
        hare=hare.next.next;
    }
    return false;

};

console.log(hasCycle([4,7,8,0,1,6,8,0,1,6,8,0,1,6,8,0]));//true
console.log(hasCycle([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8]));//true
console.log(hasCycle([1,2,3,4,5]));

/*function hasCycle(head){
    this.head=head;
    let node =head;
    if(head==null)return false;
    let tortoise = head;
    let hare = head.next;

    while(hare != null && hare.next != null && tortoise != null){
        
        if(tortoise===hare){
            return true;
        }
        
        tortoise=tortoise.next;
        hare=hare.next.next;
        }
        return false;
    };
    console.log(hasCycle([1,2,3,1,2,3]));
*/

//this solution in java

boolean hasCycle(Node head){
    if(head==null) return false;
    Node fast = head.next;
    Node slow = head;
    while(slow !=null && fast != null && fast.next != null){
        if(fast == slow){
            return true;
        }
        fast =fast.next.next;
        slow = slow.next;
    }
    return false;
}
     
       
