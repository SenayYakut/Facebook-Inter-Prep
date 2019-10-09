// Non-optimal solution
//write a function that returns the sum of all values, including the root. Absence of a node will be indicated with a null value.

function sumTheTreeValues(root){
    // your code here
    let sum=0;
    if(root!==null){
      for(let i=0; i<root.length; i++){
          sum+=root[i];
      }
    }
    return sum;
  } 
  console.log(sumTreeValues([1,2,3,4,5,6]));
  //lets try binary search trees


//Construct a complete binary tree from given array
var arr =[5,7,1,15,9,2,14,8,7,3];

//implementation of binary search trees, which is distinctive

class BinarySearchTree{
  constructor(){
    this.root=null;
  }

  insertNumberNode(data, left=null, right=null){
    let Node={
      data,left,right
    };
    let currentNumberNode;
    if(!this.data){
      this.root=Node;
    }else{
      currentNumberNode=this.root;
      while(currentNumberNode){
        if(data<currentNumberNode.data){
           if(!currentNumberNode.left){
             currentNumberNode.left=Node;
             break;
           }else{
            currentNumberNode = currentNumberNode.left;
           }

        }else if (data > currentNumberNode.data) {
            //if current num node don't have Node properties
            //we will assign it node properties
            if (!currentNumberNode.right) {
              currentNumberNode.right = Node;
              break;
            }else {
              //if it has node properties and it is sent by root to right
              //we will make it a right node because it is larger than root node
              currentNumberNode = currentNumberNode.right;
            }
        }else {
          console.log("Try Different Value");
          break;
          }
         }
       }
      }
    }
    let BSTtest = new BinarySearchTree();
    BSTtest.insertNumberNode(10);

