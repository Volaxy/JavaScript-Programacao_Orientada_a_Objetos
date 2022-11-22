import User from "./User.js";

export default class Teacher extends User {
    constructor(name, email, birthdate, role = "Teacher", active = true) {
        super(name, email, birthdate, role, active);
    }

    approveStudent(student, course) {
        return `Student ${student} approved on ${course} course`;
    }
}

let teacher = new Teacher("Mario", "m@m.com", "2000-05-07");