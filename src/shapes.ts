// Інтерфейс із методами обчислення площі, периметру та масштабування
interface Shape {
    getArea(): number;
    getPerimeter(): number;
    scale(factor: number): void;
}

// Клас Коло
class Circle implements Shape {
    constructor(public radius: number) {}

    getArea(): number {
        return Math.PI * this.radius ** 2;
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }

    scale(factor: number): void {
        this.radius *= factor;
    }
}

// Клас Прямокутник
class Rectangle implements Shape {
    constructor(public width: number, public height: number) {}

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }

    scale(factor: number): void {
        this.width *= factor;
        this.height *= factor;
    }
}

// Клас Трикутник (за трьома сторонами)
class Triangle implements Shape {
    constructor(public a: number, public b: number, public c: number) {}

    getArea(): number {
        // Формула Герона
        const p = this.getPerimeter() / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    }

    getPerimeter(): number {
        return this.a + this.b + this.c;
    }

    scale(factor: number): void {
        this.a *= factor;
        this.b *= factor;
        this.c *= factor;
    }
}

// 4. Масив фігур та обчислення загальної площі й периметра
const shapes: Shape[] = [
    new Circle(5),
    new Rectangle(4, 6),
    new Triangle(3, 4, 5)
];

// Масштабуємо всі фігури у 2 рази для демонстрації
shapes.forEach(shape => shape.scale(2));

const totalArea = shapes.reduce((sum, shape) => sum + shape.getArea(), 0);
const totalPerimeter = shapes.reduce((sum, shape) => sum + shape.getPerimeter(), 0);

console.log(`Загальна площа фігур: ${totalArea.toFixed(2)}`);
console.log(`Загальний периметр фігур: ${totalPerimeter.toFixed(2)}`);