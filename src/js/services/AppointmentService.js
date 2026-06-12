import StorageService from "./StorageService.js";

class AppointmentService {

    static addAppointment(appointment) {

        const appointments =
            StorageService.getAppointments();

        appointments.push(appointment);

        StorageService.saveAppointments(
            appointments
        );
    }

    static getAllAppointments() {
        return StorageService.getAppointments();
    }

    static deleteAppointment(id) {

        const appointments =
            StorageService.getAppointments();

        const filtered =
            appointments.filter(
                appointment =>
                appointment.id != id
            );

        StorageService.saveAppointments(
            filtered
        );
    }

}

export default AppointmentService;