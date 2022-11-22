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

    // It is recommended to have a getter for each object property to avoid code coupling.
    // This method is used to access an object's private property.
    get name() {
        return this.#name;
    }

    get email() {
        return this.#email;
    }

    get birthdate() {
        return this.#birthdate;
    }

    get role() {
        return this.#role;
    }

    get active() {
        return this.#active;
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