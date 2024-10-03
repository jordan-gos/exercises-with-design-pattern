/**
 * *****************************************
 * 📝 UNCOMMENT THE CODE BELOW AND BEGIN YOUR SOLUTION:
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

export class Book {
  title: string;
  author: string;
  publicationYear: number;
  constructor(title: string, author: string, publicationYear: number) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }
}

export class BookSearch {
  books: Book[];

  constructor(books: Book[]) {
    this.books = books;
  }

  getBookByTitle(title: string): Book | undefined {
    return this.books.find((book) => book.title === title);
  }

  getBooksByAuthor(author: string): Book[] {
    return this.books.filter((book) => book.author === author);
  }

  getBooksByPublicationYear(publicationYear: number): Book[] {
    return this.books.filter(
      (book) => book.publicationYear === publicationYear
    );
  }
}

class BookStatistics {
  books: Book[];

  constructor(books: Book[]) {
    this.books = books;
  }

  getTotalNumberOfBooks(): number {
    return this.books.length;
  }
}

export class Library {
  books: Book[];
  bookSearch: BookSearch;
  bookStatistics: BookStatistics;

  constructor() {
    this.books = [];
    this.bookSearch = new BookSearch(this.books);
    this.bookStatistics = new BookStatistics(this.books);
  }
  addBook(book: Book): void {
    this.books.push(book);
  }

  getListBooks(): Book[] {
    return this.books;
  }

  removeBook(title: string): void {
    this.books = this.books.filter((book) => book.title !== title);
  }

  getBookByTitle(title: string): Book | undefined {
    return this.bookSearch.getBookByTitle(title);
  }

  getTotalNumberOfBooks(): number {
    return this.bookStatistics.getTotalNumberOfBooks();
  }

  getBooksByAuthor(author: string): Book[] {
    return this.bookSearch.getBooksByAuthor(author);
  }

  getBooksByPublicationYear(publicationYear: number): Book[] {
    return this.bookSearch.getBooksByPublicationYear(publicationYear);
  }
}

let lib: Library;
lib = new Library();

let book1: Book;
book1 = new Book('Clean Code', 'Edric Cao', 2023);

let book2: Book;
book2 = new Book('Design Pattern', 'Edric Cao', 2022);

lib.addBook(book1);
lib.addBook(book2);

const book = lib.bookSearch.getBookByTitle('Clean Code');
console.log(book);
// Output: Book { title: 'Clean Code', author: 'Edric Cao', publicationYear: 2023 }
