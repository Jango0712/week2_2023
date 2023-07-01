let { Person } = require('./person.js');

let jan = new Person ("jan", "masculino", 1.75, "azul", 100, 2000, ["jugar", "nadar", "cantar"]);

console.log(jan);
jan.edad = jan.calcularEdad(2023)
console.log(jan.edad)
jan.printHobbies();
jan.imc = jan.calcularIMC();
console.log(jan.imc);
jan.printAll();