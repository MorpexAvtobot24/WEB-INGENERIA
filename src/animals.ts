// Інтерфейс Animal з опціональними властивостями (?)
interface Animal {
    name: string;
    age: number;
    legsCount?: number;   // Опціонально (немає у риб)
    wingspan?: number;    // Опціонально (тільки для птахів)
    canSwim?: boolean;    // Опціонально
    move(): void;         // Спосіб пересування
}

class Cat implements Animal {
    name: string;
    age: number;
    legsCount: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.legsCount = 4;
    }

    move(): void {
        console.log(`${this.name} бігає та стрибає на ${this.legsCount} лапках.`);
    }
}

class Bird implements Animal {
    name: string;
    age: number;
    wingspan: number;

    constructor(name: string, age: number, wingspan: number) {
        this.name = name;
        this.age = age;
        this.wingspan = wingspan;
    }

    move(): void {
        console.log(`${this.name} літає у повітрі з розмахом крил ${this.wingspan} см.`);
    }
}

class Fish implements Animal {
    name: string;
    age: number;
    canSwim: boolean = true;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    move(): void {
        console.log(`${this.name} плаває у воді.`);
    }
}

// Перевірка роботи
const cat = new Cat("Мурчик", 3);
const bird = new Bird("Орел", 2, 150);
const fish = new Fish("Немо", 1);

cat.move();
bird.move();
fish.move();