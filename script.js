class Animal {
    constructor(species){
        this._species = species;
    }

    get species(){
        return this._species;
    }

    makeSound(sound){
        console.log(`The ${this.species} makes a ${sound} sound`);
    }
}

class Dog extends Animal {
    bark(){
        console.log("woof");
    }
}

class Cat extends Animal {
    purr(){
        console.log("purr");
    }
}

// Example usage
const myCat = new Cat("Siamese");
myCat.makeSound("meow"); 
myCat.purr(); 

const myDog = new Dog("Golden Retriever");
myDog.makeSound("bark"); 
myDog.bark(); 

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
