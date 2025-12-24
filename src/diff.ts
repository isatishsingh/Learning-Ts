// difference between type and interface

type User = {
    name : string,
    age : number,
}

type Admin = {
    name : string,
    position: string,
}


function greeting(greet : User | Admin){
    console.log("Welcome ",greet.name);
}

let user : User = {
    name : "Satish Singh",
    age : 20,
}

let admin : Admin = {
    name : "Prashant Kori",
    position : "Admin",
}

greeting(user);
greeting(admin);