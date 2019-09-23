//write a function add up integers from 1 to N, where N is 1 or larger.
//use recursive approach and non recursive approach which is iterative.

//recursive approach
function recursiveAddUpToN(n){
    //base case:
    if(n===1) return 1;
    //recursive case:
    else return recursiveAddUpToN(n-1)+n;
}
recursiveAddUpToN(10);

//nonrecursive approach
function iterateAddToN(n){
    let sum = 0;
    for(let i=0; i<=n; i++){
        sum +=i;
    }
    return sum;
}
iterateAddToN(10);

//Task:Complete the fibonnacci function to return the N th  term


var fib = function(num){
	if(num === 1){
		return 0;
	}
	if(num === 2){
		return 1;
	}
	return fib(num-1)+fib(num-2);
};
console.log(fib(3));//1
