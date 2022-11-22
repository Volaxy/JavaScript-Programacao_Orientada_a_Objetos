import User from "./User.js";

// To use the inheritance, place the word "extends" followed by the Class Name
class Admin extends User {
    constructor(name, email, birthdate, role = "Admin", active = true) {
        // The "super()" calls the constructor function of the super class
        super(name, email, birthdate, role, active);
    }
}

let admin = new Admin("Joao", "j@j.com", "2010-01-01");
console.log(admin);
console.log(admin.showInfo());