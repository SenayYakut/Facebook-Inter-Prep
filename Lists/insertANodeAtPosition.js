class Node{
    constructor(element){
        this.element=element;
        this.next=null;
        this.head=head;
        this.size=size;
    }
    add(element){
    var node =new Node(element);
    var current;
    if(this.head===null) this.head=node;
        else{
            current=this.head;
            while(current.next){
                current=current.next;
        }
        current.next=node;
    }
    this.size++;
    }
}