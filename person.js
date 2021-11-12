const Person = function(firstName,lastName,age){
    this.firstName = firstName;
    this.lastName = lastName
    this.age = age;
}

Person.prototype.getBio = function() {
    return `${this.firstName} is ${this.age} year old`
}

const me = new Person("Aldo" ,"Huric", 32);
console.log(me.getBio());

const person2 = new Person("Clancey", "Turner", 51);

console.log(person2.getBio());