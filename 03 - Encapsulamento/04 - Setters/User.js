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

    get name() {
        return this.#name;
    }

    // The setter defines a new value to the property when called
    set name(newName) {
        if(newName === "") {
            throw new Error("Not valid format");
        }

        this.#name = newName;
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

    showInfo() {
        return `${this.name}, ${this.email}`;
    }
}