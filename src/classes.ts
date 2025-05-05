class Person {
    name: string;
    private age: number;
    protected gender: string;

    constructor(name: string, age: number, gender: string = "unknown") {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    private GetAgeForGreeting(): number{
        return this.age;
    }
    protected GetGenderForGreeting(): string{
        return this.gender;
    }
    
    greet(): void{
        console.log(`Hello, my name is ${this.name}. I am ${this.age} years old and my gender is ${this.GetGenderForGreeting()}.`);
    }
}

const person1 = new Person("John Doe", 30, "male");
person1.greet();
console.log(`Name: ${person1.name}`);


// --- Constructor shorthand property---

class Animal {
    constructor(public name: string, private species: string, protected sound: string){    }

    makeSound(): void{
        console.log(`<span class="math-inline">\{this\.name\} \(</span>{this.species}) says ${this.sound}`);
    }
}

const animal1 = new Animal("Leo", "Lion", "Roar");
animal1.makeSound();
console.log(`Name: ${animal1.name}`);


// --- Inheritance ---
class Dog extends Animal {
    constructor(name: string) {
        // In the constructor of a subclass, the first super(...) must first be called
        super(name, "Dog", "Woof");
    }

    makeSound(): void {
        console.log("Dog barks:");
        super.makeSound();
    }

    // access protected member
    getAnimalSound(): string {
        return this.sound;
    }
}

const dog1 = new Dog("Buddy");
dog1.makeSound();
console.log(`Dog's sound (from protected): ${dog1.getAnimalSound()}`);