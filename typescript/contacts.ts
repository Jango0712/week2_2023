import { Person } from "./person";

export class Contacts{
    
    people : Person[];

    constructor(){
        this.people = [];
    }

    public printCalendar():void{
        for(let i = 0; i < this.people.length; i++){

            console.log(this.people[i])
     
         }
    }
}