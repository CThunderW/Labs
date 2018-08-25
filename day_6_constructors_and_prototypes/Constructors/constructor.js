if (false){
    function Doggo(name, age) { 
    this.name = name;
    this.age = age;
    }
}
//usage example:
// const sonicSam = new Doggo( "Sonic Sam", 9);

// Doggo.prototype.bark = function () {
//     return `${this.name} barks "BORK-BROK!"`;
// }

//The 'prototype' is an object that contains a property
//"constructor" that is assigned to to the constructor.
//This object is used as the prototype of any instance created by the constructor.  
//Its not the prototype of the constructor. 

if (false){
function Doggo(name, age) {
    this.name = name;
    this.age = age;
}

Doggo.prototype.bark = function () {
    return `${this.name} barks "BORK-BROK!"`;
};

function DoggoFighter(name, age, specialAbility) {
    this.name = name;
    this.age = age;
    this.specialAbility = specialAbility;
}

// DoggoFighter.prototype = new Doggo(); //THIS SETS UP THE CHAIN OF INHERITANCE
Object.setPrototypeOf(DoggoFighter.prototype, Doggo.prototype)
DoggoFighter.prototype.fight = function (doggo) {
    const winner = [this.name, doggo.name][Math.floor(Math.random() * 2)]
    return`The winner is ${winner}!`;
}    
const bobBuilder = new Doggo("Bob Builder", 11);
const sonicSam = new DoggoFighter("Sonic Sam", 8, "Screech!")
}



class Doggo {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    bark(){
        return `${this.name} barks "BORK-BROK!"`;
    }
}
//"SUPER" is a keywword wthat when used inside a constructor method 
//will call the constructor of the extended or super class
class DoggoFighter extends Doggo {
    constructor(name, age, specialAbility) {
        super(name, age);
        this.specialAbility = specialAbility;
    }
    fight(doggo){
        const winner = [this.name, doggo.name][Math.floor(Math.random() * 2)]
    return`The winner is ${winner}!`;
    }
}