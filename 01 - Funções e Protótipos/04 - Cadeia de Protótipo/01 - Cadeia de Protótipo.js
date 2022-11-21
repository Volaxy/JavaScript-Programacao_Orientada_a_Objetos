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

Object.setPrototypeOf(admin, user);

admin.createCourse();
admin.showInfo();

// To access the prototype of the object, type in the web console the ".__proto__" after the object