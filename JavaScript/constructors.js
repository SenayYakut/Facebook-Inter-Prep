//building an object constructor

function Person(first,last,age,eyeColor){
    
        this.firstName=first;
        this.lastName=last;
        this.age=age;
        this.eyeColor=eyeColor;
}

var mySelf= new Person("Senay", "Yakut","34","Hazel");
console.log("I am "+mySelf.firstName);

