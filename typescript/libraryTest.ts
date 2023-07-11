import { Book } from "./book"
import { Library } from "./library"

let book1 = new Book("Introduccion a Java", 233, "2344433-BC23333", "Joseph Smith", "Now Editions")
let book2 = new Book("tintin", 100, "22222-4444", "jan gomez", "edition 1")
let book3 = new Book("garra", 500, "77777-88888", "carlos", "the new")

let books = [book1, book2, book3];

let library = new Library(books, "addres", "manager"); 

console.log(library.toString());

console.log(library.getNumberOfBooks());

console.log(library.findByAuthor("jan gomez"));