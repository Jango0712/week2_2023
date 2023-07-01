let { Person } = require('./person.js');
let {Contacts} = require("./contacts.js")


let jan = new Person("jan", "masculino", 1.75, "azul", 100, 2000, ["jugar", "nadar", "cantar"]);
let jose = new Person("jose", "masculino", 1.75, "blanco", 100, 2000, ["jugar", "nadar", "cantar"]);

let contacts = new Contacts() ;
contacts.person.push(jan);
contacts.person.push(jose);

contacts.printPersons()