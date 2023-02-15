class Animal {
    #name;
    #sound;
    constructor(name,sound) {
        this.#name = name;
        this.#sound = sound;
    }

    makeSound() {
        console.log(`The ${this.#name} goes ${this.#sound}`);
    };
}

let tiger = new Animal("tiger","ROAAAR");
let sheep = new Animal("sheep","baaaaa");

tiger.makeSound();
sheep.makeSound();

// Prototypes 
Animal.prototype.hungry = false;
Animal.prototype.feed = function() {
    this.hungry = true;
}

let cat = new Animal("cat", "meowww");

console.log(tiger);