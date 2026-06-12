class StorageService {

    static getAppointments() {
        return JSON.parse(
            localStorage.getItem("appointments")
        ) || [];
    }

    static saveAppointments(data) {
        localStorage.setItem(
            "appointments",
            JSON.stringify(data)
        );
    }

}

export default StorageService;