export class Book{
    private title : string;
    private nPages : number;
    private isbn : string;
    private author : string;
    private editorial : string;

    constructor(title : string, nPages : number, isbn : string, author : string, editorial : string) 
    
    {      this.title = title;
           this.nPages = nPages;
           this.isbn = isbn;
           this.author = author;
           this.editorial = editorial;
    }
    public getTitle():string{
        return this.title;
     }
     public getNpages():number{
        return this.nPages;
     }
     public getIsbn():string{
        return this.isbn;
     }
     public getAuthor():string{
        return this.author
     }
     public getEditorial():string{
        return this.editorial;
     }

     public setTitle(title):void{
         this.title = title;
     }
     public setNpages(nPages):void{
         this.nPages = nPages;
     }
     public setIsbn(isbn):void{
         this.isbn = isbn
     }
     public setAuthor(author):void{
         this.author = author;
     }
     public setEditorial(editorial):void{
         this.editorial = editorial
     }
     
     public toString():string{
        return `title - `+this.title+
         ` Number of Page - `+this.nPages+
         ` ISBN - `+this.isbn+
         ` Author - `+this.author+
         `Editorial - `+this.editorial;
     }

} 