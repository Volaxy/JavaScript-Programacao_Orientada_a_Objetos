import User from "./User.js";

export default class Admin extends User {
    constructor(name, email, birthdate, role = "Admin", active = true) {
        super(name, email, birthdate, role, active);
    }

    createCourse(courseName, vacancies) {
        return `${courseName} Course Created with ${vacancies} vacancies`;
    }
}

let admin = new Admin("Joao", "j@j.com", "2010-01-01");