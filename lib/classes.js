class Book{
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages
    }
}

book1 = new Book("Harry Porter", "JK Rowlins", 400);
console.log(book1.title)
console.log(book1.author)
console.log(book1.pages)
