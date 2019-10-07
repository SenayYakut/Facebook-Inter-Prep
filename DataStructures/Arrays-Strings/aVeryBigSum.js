// not very optimize solution it O(n), LINEAR

function aVeryBigSum(ar) {
    const total=0;
    for(let i= 0; i<ar.length; i++){
        total+=ar[i];
    }
    return total;
}

console.log(aVeryBigSum([1,2,3,4,5]));