function double(x){
    return x*2;
}
function highNumPass(){
    return value>=cutoff;
}
function time(){
    return new Date().toLocaleTimeString();
}

//implement a fibonacci sequence using while loop

function fibonacciWhile(num){
    var first=0, second=1, temp;
    if(num===0 || num===1){
        return num;
    }
    while(num>=2){
        temp=second;
        second=first+second;
        first=temp;
        num--;
    }
    return second;
}
console.log(fibonacciWhile(10));

const memo=[];
function fibonacci(num, memo){
    memo=memo || {};
    if(memo[num])return memo[num];
    if(num<=1)return num;

    return memo[num] = fibonacci(num-1, memo)+fibonacci(num-2, memo);
}

console.log(fibonacci(10, memo));

//use memoziation to create factorial function

function factorial(num, memo){
    memo=memo[num] || {};

    if (memo[num]){
        return memo[num]};
    if(num===1){
        return 1;
    }
    return memo[num]=num*factorial(num-1, memo);
}
console.log(factorial(5, memo));