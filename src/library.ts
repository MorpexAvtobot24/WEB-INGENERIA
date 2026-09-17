// 1. Інтерфейс LibraryItem
interface LibraryItem {
    title: string;
    author: string;
    isBorrowed: boolean;
    borrow(): void;
}

// 2. Клас Book
class Book implements LibraryItem {
    public isBorrowed: boolean = false;

    constructor(
        public title: string,
        public author: string,
        public pageCount: number
    ) {}

    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`Книгу "${this.title}" (сторінок: ${this.pageCount}) успішно позичено.`);
        } else {
            console.log(`Книга "${this.title}" вже позичена.`);
        }
    }
}

// Клас Magazine
class Magazine implements LibraryItem {
    public isBorrowed: boolean = false;

    constructor(
        public title: string,
        public author: string,
        public issueNumber: number
    ) {}

    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`Журнал "${this.title}" №${this.issueNumber} успішно позичено.`);
        } else {
            console.log(`Журнал "${this.title}" вже позичений.`);
        }
    }
}

// Клас DVD
class DVD implements LibraryItem {
    public isBorrowed: boolean = false;

    constructor(
        public title: string,
        public author: string,
        public duration: number // тривалість у хвилинах
    ) {}

    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`DVD "${this.title}" (${this.duration} хв) успішно позичено.`);
        } else {
            console.log(`DVD "${this.title}" вже позичено.`);
        }
    }
}

// 3. Клас Library
class Library {
    private items: LibraryItem[] = [];

    addItem(item: LibraryItem): void {
        this.items.push(item);
        console.log(`Додано до бібліотеки: "${item.title}"`);
    }

    findItemByName(name: string): LibraryItem | undefined {
        return this.items.find(item => item.title.toLowerCase() === name.toLowerCase());
    }

    listAvailableItems(): void {
        console.log("\n--- Доступні елементи у бібліотеці ---");
        const available = this.items.filter(item => !item.isBorrowed);
        if (available.length === 0) {
            console.log("Немає доступних елементів.");
        } else {
            available.forEach(item => {
                console.log(`- ${item.title} (Автор: ${item.author})`);
            });
        }
        console.log("------------------------------------\n");
    }
}

// 4. Демонстрація роботи
const myLibrary = new Library();

const book1 = new Book("Кобзар", "Тарас Шевченко", 350);
const magazine1 = new Magazine("National Geographic", "Редакція NG", 204);
const dvd1 = new DVD("Inception", "Крістофер Нолан", 148);

myLibrary.addItem(book1);
myLibrary.addItem(magazine1);
myLibrary.addItem(dvd1);

// Виведення списку доступних елементів
myLibrary.listAvailableItems();

// Пошук та позичання елемента
console.log("Шукаємо та позичаємо книгу 'Кобзар'...");
const foundItem = myLibrary.findItemByName("Кобзар");
if (foundItem) {
    foundItem.borrow();
}

// Повторне виведення доступних елементів
myLibrary.listAvailableItems();