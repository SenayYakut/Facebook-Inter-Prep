//this is very optimed solution it is O(1), constant because we know how many times it will rotate
function rotLeft(arr,d){
    let rotatedArr=arr.concat();
    for(let i=0; i<d; i++){
    const frontItem=rotatedArr.shift();
    rotatedArr.push(frontItem);
 }
 return rotatedArr;
}
console.log(rotLeft([1,2,3,4,5], 4));