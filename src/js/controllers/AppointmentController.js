import Appointment from "../models/Appointment.js";
import AppointmentService from "../services/AppointmentService.js";

class AppointmentController {

    static bookAppointment() {

        const patientName =
            document.getElementById("patientName").value;

        const age =
            document.getElementById("age").value;

        const doctor =
            document.getElementById("doctor").value;

        const date =
            document.getElementById("date").value;

        const appointment =
            new Appointment(
                "APT-" + Date.now(),
                patientName,
                age,
                doctor,
                date
            );

        AppointmentService.addAppointment(
            appointment
        );

        alert("Appointment Booked Successfully");
    }

}

export default AppointmentController;