class Employee {
    #firstName;
    #lastName;
    #yearsWorked;
    constructor(firstName, lastName, yearsWorked) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#yearsWorked = yearsWorked;
    }

    get firstName() {
        return this.#firstName;
    }
    get lastName() {
        return this.#lastName;
    }
    get yearsWorked() {
        return this.#yearsWorked;
    }
}

let june = new Employee("Dao-June", "Xu", 2);
let julia = new Employee("Julia", "Charbonett", 3.5);

let employeeArr = [june, julia];

Employee.prototype.getDetails = function() {
    // This won't work because the properties are private; if I want this to work, append the '#' in front of the symbol
    // console.log(`${this.firstName} ${this.lastName} has worked for ${this.yearsWorked}`);
    console.log(`${this.firstName} ${this.lastName} has worked for ${this.yearsWorked}`);
}

for (let i = 0; i < employeeArr.length; i++) {
    employeeArr[i].getDetails();
}