// The class name begin with Capitalize letter follow the CamelCase pattern
function User(name, email) {
    this.name = name;
    this.email = email;

    this.showInfo = function() {
        return `${this.name}, ${this.email}`;
    }
}

// The "new" creates a new object
// let newUser = new User("Volax", "v@.com");
// console.log(newUser.showInfo());

function Admin(role) {
    // The "call()" inherits the properties of the object before the function call, "this" is the current object that will have the inherited characteristics, and the other arguments are the properties that will be assigned.
    User.call(this, "Volax", "v@v.com");

    this.role = role || "student";
}

// The prototype of "Admin" is a object of the User's prototype
Admin.prototype = Object.create(User.prototype);

let newUser = new Admin("CTO");
console.log(newUser.showInfo());
console.log(newUser.role);



let user = {
    showInfo: function(name) {
        return name;
    }
}

let otherUser = Object.create(user);
console.log(otherUser.showInfo("Volxa"));
// The "isPrototypeOf" verify if the object's prototype is the same of the other object's prototype 
console.log(user.isPrototypeOf(otherUser));