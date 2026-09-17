function greetUser(name: string, age: number = 18): string {
    return `Привіт, ${name}! Твій вік: ${age}.`;
}

// Виклик з обома параметрами
console.log(greetUser("Влад", 20));

// Виклик без другого параметра (використає значення 18 за замовчуванням)
console.log(greetUser("Олена"));