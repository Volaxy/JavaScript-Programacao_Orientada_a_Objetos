let user = {
    name: "Volax",
    email: "v@v.com",
    birthdate: "2000/06/02",
    role: "student",
    active: true,

    showInfo: function() {
        console.log(this.name, this.email);
    }
}

let admin = {
    name: "Volax",
    email: "v@v.com",
    role: "student",

    createCourse() {
        console.log("Course created");
    }
}

// This function set the prototype of the 1nd argument based on the prototype of the 2nd argument
Object.setPrototypeOf(admin, user);

admin.createCourse();
admin.showInfo();