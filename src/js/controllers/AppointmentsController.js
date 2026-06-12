import AppointmentService from "../services/AppointmentService.js";

class AppointmentsController {

    static loadAppointments() {

        let appointments =
    AppointmentService.getAllAppointments();

const search =
    document
    .getElementById("searchInput")
    ?.value
    .toLowerCase();

if(search){

    appointments =
        appointments.filter(
            appointment =>
            appointment.patientName
            .toLowerCase()
            .includes(search)
        );
}

        const container =
            document.getElementById(
                "appointmentsContainer"
            );

        container.innerHTML = "";

        appointments.forEach(appointment => {

            container.innerHTML += `
                <div class="doctor-card">

                    <h3>${appointment.patientName}</h3>
                    <p>
                        Appointment ID:
                        ${appointment.id}
                    </p>

                    <p>
                        Doctor:
                        ${appointment.doctor}
                    </p>

                    <p>
                        Age:
                        ${appointment.age}
                    </p>

                    <p>
                        Date:
                        ${appointment.date}
                    </p>

                    <p>
                        Status:
                        ${appointment.status}
                    </p>

                    <button
                        onclick="deleteAppointment(${appointment.id})">

                        Delete

                    </button>

                </div>
            `;
        });
    }

}

window.deleteAppointment = function(id){

    AppointmentService.deleteAppointment(id);

    location.reload();

}

export default AppointmentsController;