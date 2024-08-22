//complete this code
class Animal {
	constructor(species){
		this.spesies = species;
	}
	get species(){
		return this.species;
	}
	makesound = (sound)=>{
		console.log(`The ${this.name} makes a sound`)
	}
}

class Dog extends Animal {
	bark(){
		console.log("woof")
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr")
	}
}

const myCat = new Cat("Siamese");
myCat.makeSound(); 
myCat.purr(); 

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); 
myDog.bark(); 

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
