import AppointmentService from "../services/AppointmentService.js";

class DashboardController {

    static loadDashboard() {

        const appointments =
            AppointmentService.getAllAppointments();

        const totalAppointments =
            appointments.length;

        const uniquePatients =
            new Set(
                appointments.map(
                    a => a.patientName
                )
            ).size;

        document.getElementById(
            "totalAppointments"
        ).textContent = totalAppointments;

        document.getElementById(
            "totalPatients"
        ).textContent = uniquePatients;

        document.getElementById(
            "totalDoctors"
        ).textContent = 4;

        document.getElementById(
            "todayAppointments"
        ).textContent = totalAppointments;
    }

}

export default DashboardController;