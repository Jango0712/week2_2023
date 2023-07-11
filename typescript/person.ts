export class Person {
    name : string
    age : number
    private addres : string
    
     constructor(name : string, age : number, addres : string){
    
        this.name = name
        this.age = age
        this.addres = addres
     }
    
     public setAddress(addres:string):void
     {
        this.addres = addres
     }
    
     public getAddres():string{
        return this.addres
     }
    
     public printName():void {
        console.log(this.name)
     }
    
     public yearOfBirth(currentYear:number):number{
        return currentYear - this.age  ;
     }
    
    
    
    }