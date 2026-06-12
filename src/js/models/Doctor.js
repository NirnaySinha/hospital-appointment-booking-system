import Person from "./Person.js";

class Doctor extends Person {
    constructor(id, name, specialization) {
        super(id, name);
        this.specialization = specialization;
    }
}

export default Doctor;