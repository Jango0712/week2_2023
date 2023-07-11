import { Person } from "./person";

let person : Person = new Person("Jan", 22, "Jango");

person.printName();

console.log(person.yearOfBirth(2022));

console.log(person.getAddres())

person.setAddress("Jango0712")

console.log(person.getAddres())