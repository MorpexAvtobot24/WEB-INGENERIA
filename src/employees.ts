// 1. Інтерфейс Payable
interface Payable {
    pay(): void;
}

// 2. Абстрактний клас Employee
abstract class Employee {
    constructor(
        public name: string,
        public age: number,
        public salary: number
    ) {}

    // Абстрактний метод для розрахунку річного бонусу
    abstract getAnnualBonus(): number;
}

// 3. Клас Developer (бонус 10%)
class Developer extends Employee implements Payable {
    getAnnualBonus(): number {
        return this.salary * 0.10;
    }

    pay(): void {
        console.log(`Виплачено зарплату розробнику ${this.name}: ${this.salary} грн`);
    }
}

// 4. Клас Manager (бонус 20%)
class Manager extends Employee implements Payable {
    getAnnualBonus(): number {
        return this.salary * 0.20;
    }

    pay(): void {
        console.log(`Виплачено зарплату менеджеру ${this.name}: ${this.salary} грн`);
    }
}

// 5. Створення масиву співробітників та підрахунок бонусів
const employees: Employee[] = [
    new Developer("Олексій", 25, 60000),
    new Developer("Марія", 28, 80000),
    new Manager("Андрій", 35, 100000)
];

// Розрахунок загальної річної суми бонусів
const totalBonus = employees.reduce((sum, emp) => sum + emp.getAnnualBonus(), 0);

// Демонстрація роботи
employees.forEach(emp => {
    (emp as unknown as Payable).pay();
    console.log(`Річний бонус для ${emp.name}: ${emp.getAnnualBonus()} грн\n`);
});

console.log(`Загальна річна сума бонусів усіх співробітників: ${totalBonus} грн`);