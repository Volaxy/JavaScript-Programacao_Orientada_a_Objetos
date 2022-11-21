let user = {
    name: "Volax",
    email: "v@v.com",
    birthdate: "2000/06/02",
    role: "admin",
    active: true,

    showInfo: function() {
        // The "this" refers to the context where the word is used, if it is inside an object for example, it will mean the object instance itself
        console.log(this.name, this.email);
    }
}

user.showInfo();

let show = user.showInfo;
show();

//////////////////////////////////////

show = function() {
    console.log(this.name);
}

// The "bind()" associates a context to a function, assigning the context as an argument to the "this" variable
let showName = show.bind(user);
showName();