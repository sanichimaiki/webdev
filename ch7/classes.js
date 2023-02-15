class Animal {
    constructor(name, weight, color) {
        this.name = name;
        this.weight = weight;
        this.color = color;
    }
}

class Person {
    // # indicates privacy; the object is in control of its own fields
    #firstname;
    #lastname;
    constructor(firstname, lastname) {
        this.#firstname = firstname;
        this.#lastname = lastname;
    }

    get firstname() {
        return this.#firstname;
    }
    get lastname() {
        return this.#lastname;
    }

    set firstname(firstname) {
        this.#firstname = firstname;
    }
    set lastname(lastname) {
        this.#lastname = lastname;
    }

    fullname() {
        return `${this.firstname} ${this.lastname}`;
    }
}

let arxn = new Person("arxn", "ethereal");

console.log(`<3 ${arxn.firstname}`);
console.log(arxn.fullname());