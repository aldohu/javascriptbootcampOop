class Person {
    constructor(firstName, lastName,age, likes =[]){
        this.firstName = firstName;
        this.lastName = lastName
        this.age = age; 
        this.likes = likes;
    }

    getBio() {
        let bio = `${this.firstName} is ${this.age} year old`
    this.likes.forEach(element => {
        bio += ` ${this.firstName} likes ${element}.`
    });
    return bio;
    }
    setName(fullName){
        const names = fullName.split(" ");
        this.firstName = names[0];
        this.lastName = names[1];
    }
}


c

const person = new Person("Clancey", "Turner", 51,['driving']);
person.setName("Alexis Turner ")
//console.log(person2.getBio());