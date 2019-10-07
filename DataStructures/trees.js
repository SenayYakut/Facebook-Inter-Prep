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