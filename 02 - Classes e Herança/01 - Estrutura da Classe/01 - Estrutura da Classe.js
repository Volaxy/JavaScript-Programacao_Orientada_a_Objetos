class User {
    // The "constructor" is called when a new instance of the object is created
    constructor(name, email, birthdate, role, active = true) {
        this.name = name;
        this.email = email;
        this.birthdate = birthdate;
        this.role = role || "student";
        this.active = active;
    }

    // To declare a method inside the class, only put the method name
    showInfo() {
        return `${this.name}, ${this.email}`
    }
}

let user1 = new User("Volax", "v@v.com", "2018-09-06");
console.log(user1);
console.log(user1.showInfo());

console.log(User.prototype.isPrototypeOf(user1));