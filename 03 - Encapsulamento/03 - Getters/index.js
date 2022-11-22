import User from "./User.js";
import Teache from "./Teacher.js";
import Admin from "./Admin.js";

let user = new User("Volax", "v@v.com", "2010-01-01");
// To call the "get" method, the property name (without the "#") must be called as a property to call the getter function
console.log(user.name);