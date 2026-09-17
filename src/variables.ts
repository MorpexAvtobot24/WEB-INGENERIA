// 1. Змінні базових типів
const userName: string = "Vlad";
const userAge: number = 20;
const isStudent: boolean = true;
let dynamicData: any = "Початковий рядок";

console.log("Ім'я:", userName);
console.log("Вік:", userAge);
console.log("Статус студента:", isStudent);
console.log("Змінна any (рядок):", dynamicData);

dynamicData = 100; // Зміна типу через any
console.log("Змінна any (число):", dynamicData);

// 2. Масиви з конкретними типами елементів
const skills: string[] = ["TypeScript", "JavaScript", "HTML"];
const ratings: number[] = [5, 4, 5];

console.log("Навички:", skills);
console.log("Оцінки:", ratings);