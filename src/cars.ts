// Абстрактний батьківський клас
abstract class Car {
    // protected — доступно у цьому класі та в похідних
    protected brand: string;
    protected year: number;
    
    // private — доступно тільки всередині класу Car
    private isEngineRunning: boolean = false;

    constructor(brand: string, year: number) {
        this.brand = brand;
        this.year = year;
    }

    public startEngine(): void {
        this.isEngineRunning = true;
        console.log(`Двигун ${this.brand} запущено.`);
    }

    public stopEngine(): void {
        this.isEngineRunning = false;
        console.log(`Двигун ${this.brand} зупинено.`);
    }

    // Абстрактний метод, який кожен клас-нащадок реалізує по-своєму
    abstract getInfo(): void;
}

// 1. Похідний клас BMW
class BMW extends Car {
    public model: string;
    private isMPerformance: boolean; // Окреме приватне поле

    constructor(model: string, year: number, isMPerformance: boolean) {
        super("BMW", year); // Виклик конструктора батьківського класу
        this.model = model;
        this.isMPerformance = isMPerformance;
    }

    public getInfo(): void {
        console.log(`[BMW] Модель: ${this.model}, Рік: ${this.year}, M-пакет: ${this.isMPerformance ? 'Так' : 'Ні'}`);
    }
}

// 2. Похідний клас Audi
class Audi extends Car {
    public model: string;
    private hasQuattro: boolean;

    constructor(model: string, year: number, hasQuattro: boolean) {
        super("Audi", year);
        this.model = model;
        this.hasQuattro = hasQuattro;
    }

    public getInfo(): void {
        console.log(`[Audi] Модель: ${this.model}, Рік: ${this.year}, Повний привід Quattro: ${this.hasQuattro ? 'Так' : 'Ні'}`);
    }
}

// 3. Похідний клас Tesla
class Tesla extends Car {
    public model: string;
    private batteryCapacity: number; // Ємність батареї у кВт·год

    constructor(model: string, year: number, batteryCapacity: number) {
        super("Tesla", year);
        this.model = model;
        this.batteryCapacity = batteryCapacity;
    }

    public getInfo(): void {
        console.log(`[Tesla] Модель: ${this.model}, Рік: ${this.year}, Батарея: ${this.batteryCapacity} kWh`);
    }
}

// Створення мінімум по 2 екземпляри для кожного класу
const bmw1 = new BMW("M3", 2022, true);
const bmw2 = new BMW("X5", 2020, false);

const audi1 = new Audi("A6", 2021, true);
const audi2 = new Audi("Q3", 2019, false);

const tesla1 = new Tesla("Model S", 2023, 100);
const tesla2 = new Tesla("Model 3", 2022, 75);

// Вивід опису всіх авто
const cars: Car[] = [bmw1, bmw2, audi1, audi2, tesla1, tesla2];
cars.forEach(car => car.getInfo());