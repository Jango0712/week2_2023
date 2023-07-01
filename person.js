class Person {

    constructor(nombre, genero, altura, colorPelo, peso, yearOfBirth, hobbies)
    {
        this.nombre = nombre;
        this.genero = genero;
        this.altura = altura;
        this.colorPelo = colorPelo;
        this.peso = peso;
        this.yearOfBirth = yearOfBirth;
        this.hobbies = hobbies;
         }
    calcularIMC()
    {
       return this.peso/(this.altura*2);
    }
   
    calcularEdad(anyo)
    {    
       return  anyo - this.yearOfBirth;
    }
    
    printAll()
    {
      for (const prop in this) {
    console.log(prop + ' - ' + this[prop])
      }
    }
   
    printHobbies()
    {
        console.log(this.hobbies)
    }
}






module.exports = {Person};