//binary heap implementation
function BinaryHeap(scoreFunction){
    this.content=[];
    this.scoreFunction=scoreFunction;
}

BinaryHeap.prototype={
    push:function(element){
        this.content.push(element);
        this.bubleUp(this.content.length-1);
    },

    pop:function(){
       var result=this.content[0]; 
       var end= this.content.pop();
       if(this.content.length>0){
           this.content[0]=end;
           this.sinkDown(0);
       }
       return result;
    },

    remove: function(node){
        var length=this.content.length;
        for(let i=0; i<length; i++){
            if(this.content[i]!=node)continue;
            var end=this.content.pop();
            if(i===length-1) break;
            this.content[i]=end;
            this.bubleUp(i);
            this.sinkDown(i);
            break;
        }
    },

    size: function() {
        return this.content.length;
      },

    bubleUp:function(n){
        var element = this.content[n], score = this.scoreFunction(element);
        while (n > 0) {
            // Compute the parent element's index, and fetch it.
            var parentN = Math.floor((n + 1) / 2) - 1,
            parent = this.content[parentN];
            // If the parent has a lesser score, things are in order and we
            // are done.
            if (score >= this.scoreFunction(parent))
              break;
      
            // Otherwise, swap the parent with the current element and
            // continue.
            this.content[parentN] = element;
            this.content[n] = parent;
            n = parentN;
          }
        },
        sinkDown: function(n) {
            // Look up the target element and its score.
            var length = this.content.length,
            element = this.content[n],
            elemScore = this.scoreFunction(element);
        
            while(true) {
              // Compute the indices of the child elements.
              var child2N = (n + 1) * 2, child1N = child2N - 1;
              // This is used to store the new position of the element,
              // if any.
              var swap = null;
              // If the first child exists (is inside the array)...
              if (child1N < length) {
                // Look it up and compute its score.
                var child1 = this.content[child1N],
                child1Score = this.scoreFunction(child1);
                // If the score is less than our element's, we need to swap.
                if (child1Score < elemScore)
                  swap = child1N;
              }
              // Do the same checks for the other child.
              if (child2N < length) {
                var child2 = this.content[child2N],
                child2Score = this.scoreFunction(child2);
                if (child2Score < (swap == null ? elemScore : child1Score))
                  swap = child2N;
              }
        
              // No need to swap further, we are done.
              if (swap == null) break;
        
              // Otherwise, swap and continue.
              this.content[n] = this.content[swap];
              this.content[swap] = element;
              n = swap;
            }
          }
        };
        var heap = new BinaryHeap(function(x){return x;});
        forEach([10, 3, 4, 8, 2, 9, 7, 1, 2, 6, 5],
        method(heap, "push"));

        heap.remove(2);
        while (heap.size() > 0)
        print(heap.pop());
     

