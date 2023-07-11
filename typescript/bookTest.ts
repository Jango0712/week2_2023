import { Book } from "./book"

let book : Book = new Book("Introducción a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");

console.log(book.toString())

book.setTitle("jaja");
book.setNpages(225);
book.setIsbn("111111-BC22222");
book.setAuthor("jan");
book.setEditorial("edition 1")

console.log(book.getTitle());
console.log(book.getNpages());
console.log(book.getIsbn());
console.log(book.getAuthor());
console.log(book.getEditorial())