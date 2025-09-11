class Person{
    constructor (name,age,occupation){
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }
    name(){
        console.log(this.name);
    }
    get name(){
        return this.name;
    }
    displayInfo() {
        console.log("Name:" + this.name);
        console.log("Age:" + this.age);
        console.log("Occupation:" + this.occupation);
        console.log("----------");
    }
}

const person1 = new Person ("Anna", 19, "Student");
const person2 = new Person ("Joshua", 30, "Husband");

person1.name();
person1.displayInfo();