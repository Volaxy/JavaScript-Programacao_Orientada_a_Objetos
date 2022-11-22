export default class User {
    constructor(name, email, birthdate, role, active = true) {
        this.name = name;
        this.email = email;
        this.birthdate = birthdate;
        this.role = role || "student";
        this.active = active;
    }

    showInfo() {
        return `${this.name}, ${this.email}`
    }
}