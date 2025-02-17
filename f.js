//завдання 1
let userAge = prompt("Будь ласка, введіть ваш вік:");


if (userAge === null || userAge.trim() === "" || isNaN(userAge)) {
    alert("Будь ласка, введіть коректний вік!");
} else {

    userAge = parseInt(userAge);

    
    if (userAge < 18) {
        alert("Вам заборонено вхід");
    } else if (userAge >= 18 && userAge <= 65) {
        alert("Ласкаво просимо!");
    } else {
        alert("Будь ласка, будьте обережні!");
    }
}
//завдання 2
let n = prompt("Будь ласка, введіть число:");

if (n === null || n.trim() === "" || isNaN(n)) {
    console.log("Будь ласка, введіть коректне число!");
} else {

    n = parseInt(n);

    for (let i = 2; i <= n; i += 2) {
        console.log(i);
    }
}
//завдання 3
let g = prompt("Будь ласка, введіть число:");


if (g === null || g.trim() === "" || isNaN(g)) {
    console.log("Будь ласка, введіть коректне число!");
} else {
    
    g = parseInt(g);


    if (g < 0) {
        console.log("Факторіал для від'ємних чисел не визначений.");
    } else {
     
        let factorial = 1;
        let i = 1;

       
        while (i <= g) {
            factorial *= i; 
            i++;
        }

       
        console.log(`Факторіал числа ${a} дорівнює ${factorial}`);
    }
}
//завдання 4
const a = parseFloat(prompt("Введіть перше число:"));
const b = parseFloat(prompt("Введіть друге число:"));
const operation = prompt("Введіть операцію (+, -, *, /):");

let result;
switch (operation) {
    case '+':
        result = a + b;
        break;
    case '-':
        result = a - b;
        break;
    case '*':
        result = a * b;
        break;
    case '/':
        if (b !== 0) {
            result = a / b;
        } else {
            result = "Помилка! Ділення на нуль.";
        }
        break;
    default:
        result = "Невірна операція!";
}

alert("Результат: " + result);
//завдання 5
const targetNumber = Math.floor(Math.random() * 100) + 1;
let userGuess;
do {
    userGuess = parseInt(prompt("Вгадайте число від 1 до 100:"), 10);
    if (userGuess < targetNumber) {
        alert("Загадане число більше");
    } else if (userGuess > targetNumber) {
        alert("Загадане число менше");
    } else if (userGuess === targetNumber) {
        alert("Вітаємо! Ви вгадали число!");
    } else {
        alert("Будь ласка, введіть коректне число.");
    }
} while (userGuess !== targetNumber);