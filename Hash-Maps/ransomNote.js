function checkMagazine(magazine, note) {
    
    for(let i = 0; i < note.length; i++){
        let finder = magazine.indexOf(note[i])
        if(finder != -1){
            magazine[finder] = ""
            if(i === note.length - 1){
                console.log("Yes")
            }
        }else{
           console.log("No")
           break;
        }
    }
 }


 //JavaScript array mplementation

 var arr = new Array(1);
 var arr = Array(1);
 var arr = [1];

var values = [];
values[0] = 1;
values[9] = 2;
console.log(values.length);//10
console.log(values[11]);//undefined

//accesing an element in an array, Search, inserting, deleting.
//operation of an array data structure in javascript
/*
toString();
join("");
pop();//returns the value poped from the end of array
push();
shift();//returns the array shifted out
unshift();//adds a new element at the beginning of the array and returns the new array
splice();//
concat();

*/