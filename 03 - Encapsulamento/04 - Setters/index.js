import User from "./User.js";
import Teache from "./Teacher.js";
import Admin from "./Admin.js";

let user = new User("Volax", "v@v.com", "2010-01-01");
console.log(user.name);
user.name = "João"; // The setter is called when a new value is defined to the property
console.log(user.name);
console.log(user.showInfo());