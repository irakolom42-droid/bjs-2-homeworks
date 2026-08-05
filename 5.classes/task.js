class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    get state() {
        return this._state;
    }

    set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
           this._state = 100;
        } else {
            this._state = value;
        }
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = 'fantastiс';
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = 'detective';
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let found = this.books.find(book => book[type] === value);
        if (found) {
            console.log(`Найдена книга: ${found.name}`);
            return found;
        } else {
            console.log(`Книга по критерию: ${type} : ${value} не найдена`);
            return null;
        }
        
    }

    giveBookByName(bookName) {
        let indexBook = this.books.findIndex(book => book.name === bookName);

        if (indexBook !== -1) {
            let book = this.books.splice(indexBook, 1)[0];
            console.log(`Книга "${bookName}" выдана читателю`);
            return book;   
        } else {
            console.log(`Книга "${bookName}" не найдена`);
            return null;
        }
    }
}

const library = new Library('Городская библиотека');
console.log(`Библиотека "${library.name}" создана`);

const book1 = new Book('Война и мир', 1869, 1300, 'Лев Толстой');
const book2 = new FantasticBook('Пикник на обочине', 1972, 168, 'Аркадий и Борис Стругацкие');
const book3 = new NovelBook('Мастер и Маргарита', 1967, 480, 'Михаил Булгаков');
const book4 = new DetectiveBook('Шерлок Холмс', 1892, 320, 'Артур Конан Дойл');

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

console.log(`В библиотеке ${library.books.length} книг`);

let foundBook = library.findBookBy('releaseDate', 1919);

if (!foundBook) {
    const newBook = new Book('Поэма о Родине', 1919, 150, 'Неизвестный автор');
    library.addBook(newBook);
    foundBook = newBook;
}

console.log(`Книга 1919 года: "${foundBook.name}"`);

const givenBook = library.giveBookByName('Пикник на обочине');
console.log(`Выдана книга: "${givenBook?.name}"`);

if (givenBook) {
    console.log(`Состояние до повреждения: ${givenBook.state}`);
    givenBook.state = 20;
    console.log(`Состояние после повреждения: ${givenBook.state}`);
}

if (givenBook) {
    console.log(`Состояние до восстановления: ${givenBook.state}`);
    givenBook.fix();
    console.log(`Состояние после восстановления: ${givenBook.state}`);
}

if (givenBook) {
    if (givenBook.state <= 30) {
        givenBook.fix();
        console.log(`Состояние после повторной реставрации: ${givenBook.state}`);
    }
    library.addBook(givenBook);
    console.log(`Книга "${givenBook.name}" возвращена`);
}


