export default class User {
    // To declare a private attribute, the property name must be followed by the "#" before the declaration
    // Private attributes not be accessed outside the Class
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

    showInfo() {
        return `${this.#name}, ${this.#email}`;
    }
}