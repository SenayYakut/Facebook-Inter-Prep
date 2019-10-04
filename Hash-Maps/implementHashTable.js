class HashTable{
    constructor(size=42){
        this.buckets= new Array(size)
        this.size=size
    }
}
//Hash Function
hash(key){
    return key.toString().length%this.size;
}
// Set Method helps to add more data to hash table
set(key,value){
    let index=this.hash(key);
    if(!this.buckets[index]){
        this.buckets[index]=[];
    }
    this.buckets[index].push([key, value])
    return index
}

get(key){
    let index=this.has(key);
    if(!this.buckets[index]){
        return null;
    }
    for(let bucket of this.buckets[index]){
        if(bucket[0]===key){
            return bucket[1]
        }
    }
}
//another example
class myHashTable{
    constructor(){
        this.data=new Array(50);
    }

    set(key, value){
        const index=this.hash(key);
        this.data[index]=[];
        this.data.push(key, value);
        
    }

    get(key){
        const index=this.hash(key);
        return this.data[index][1];
    }

    hash(key){
        let hash=0;
        for(let i=0; i<key.lenght; i++){
            hash=(hash+key.charCodeAt(i)*i)%this.data.lenght;
        }
        return hash;
    }
}

const hashObject=new myHashTable();
hashObject.set("ap","apples");
hashObject.set("ba","bananas");
hashObject.set("ch","cherry");

console.log(hasObject);
console.log(hasObject.get("b"));


