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