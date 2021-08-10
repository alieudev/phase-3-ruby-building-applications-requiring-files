class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages


book1 = Book("Harry Porter", "JK Rowlings", 400)

print(book1.title)
print(book1.author)
print(book1.pages)
