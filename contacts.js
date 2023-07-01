let { Person } = require('./person.js');

class Contacts {

    constructor(){
        this.person = []
    }
printPersons(){
    for(let persona of this.person){

       persona.printAll()

    }
}
}

module.exports = {Contacts};