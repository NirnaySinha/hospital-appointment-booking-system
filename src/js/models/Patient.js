import Person from "./Person.js";

class Patient extends Person {
    constructor(id, name, age) {
        super(id, name);
        this.age = age;
    }
}

export default Patient;