class Appointment {
    constructor(id, patientName, age, doctor, date) {
        this.id = id;
        this.patientName = patientName;
        this.age = age;
        this.doctor = doctor;
        this.date = date;
        this.status = "Confirmed";
    }
}

export default Appointment;