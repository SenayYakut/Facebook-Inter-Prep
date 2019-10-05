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
