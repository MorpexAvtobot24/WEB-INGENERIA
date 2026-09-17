// Типи для розмірів та начинок
type IceCreamSize = "small" | "large";
type Topping = "chocolate" | "caramel" | "berries";

function calculateIceCreamCost(): number {
    // Поліфіл prompt для Node.js або браузера
    const getUserInput = (message: string): string => {
        if (typeof prompt !== "undefined") {
            return prompt(message) || "";
        }
        return ""; // Заглушка, якщо запускається без браузерного оточення
    };

    // 1. Вибір розміру (Маленький - 10 грн, Великий - 25 грн)
    const sizeInput = getUserInput("Оберіть розмір (small / large):").toLowerCase();
    const size: IceCreamSize = sizeInput === "large" ? "large" : "small";
    
    let totalCost = size === "large" ? 25 : 10;

    // 2. Вибір начинок (мінімум одна)
    const toppingsInput = getUserInput(
        "Оберіть начинки через кому (chocolate - 5 грн, caramel - 6 грн, berries - 10 грн):"
    );

    const toppings: string[] = toppingsInput
        ? toppingsInput.split(",").map(item => item.trim().toLowerCase())
        : [];

    // Якщо нічого не обрано — за замовчуванням додаємо шоколад
    if (toppings.length === 0) {
        console.log("Не обрано жодної начинки. Додано шоколад (+5 грн) за замовчуванням.");
        totalCost += 5;
    } else {
        toppings.forEach(topping => {
            if (topping === "chocolate") totalCost += 5;
            else if (topping === "caramel") totalCost += 6;
            else if (topping === "berries") totalCost += 10;
        });
    }

    // 3. Додаткове маршмелоу (+5 грн, не обов'язково)
    const marshmallowInput = getUserInput("Додати маршмелоу (+5 грн)? (yes/no)").toLowerCase();
    if (marshmallowInput === "yes" || marshmallowInput === "так") {
        totalCost += 5;
    }

    return totalCost;
}

const finalPrice = calculateIceCreamCost();
console.log(`Загальна вартість морозива: ${finalPrice} грн`);