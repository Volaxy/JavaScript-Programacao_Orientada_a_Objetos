export default class User {
    #name;
    #email;
    #birthdate;
    #role;
    #active;

    constructor(name, email, birthdate, role, active = true) {
        this.#name = name;
        this.#email = email;
        this.#birthdate = birthdate;
        this.#role = role || "student";
        this.#active = active;
    }

    #buildObjectUser() {
        return {
            name: this.#name,
            email: this.#email,
            birthdate: this.#birthdate,
            role: this.#role,
            active: this.#active
        }
    }

    showInfo() {
        return `${this.#name}, ${this.#email}`;
    }
}