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
    insertAt(head,element,position){
        if(position>0 && position>this.size)
        return false;
        else{
            var node =new Node(element);
            var curr, prev;

            curr = this.head;
            if(index===0){
                node.next=head;
                this.head=node;
            }else{
                curr=this.head;
                var it=0;
                while(it<position){
                    it++;
                    prev=curr;
                    curr=curr.next;
                }
                node.next=curr;
                prev.next=node;
            }
            this.size++;
        }
    }
}