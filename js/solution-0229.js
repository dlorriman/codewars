// https://www.codewars.com/kata/54dba07f03e88a4cec000caf

// function Dog (breed) {
//   this.breed = breed;
// }

// let snoopy = new Dog("Beagle")

// Dog.prototype.bark = function() {
//   return "Woof"
// }

// let scoobydoo = new Dog("Great Dane")

// using a class
class Dog {
    constructor(breed) {
        this.breed = breed
    }
    
    bark() {
        return "Woof"
    }
}

let snoopy = new Dog("Beagle")
let scoobydoo = new Dog("Great Dane")