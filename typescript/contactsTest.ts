import { Person } from "./person";
import { Contacts } from "./contacts";

let agenda : Contacts = new Contacts();
let person1 : Person = new Person("Jan", 22, "Jango");
let person2 : Person = new Person("Jose", 22, "Jos");
agenda.people.push(person1);
agenda.people.push(person2);

agenda.printCalendar();