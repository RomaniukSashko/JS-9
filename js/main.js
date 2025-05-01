// 1 ЗАВДАННЯ
console.log("1 ЗАВДАННЯ");

// Напиши функцію logItems(array), 
// яка отримує масив і використовує цикл for, 
// який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].

// Нумерація повинна починатися з 1. 
// Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', 
// а для індексу 2 виведе '3 - Ajax'.

const logItems = function (array) {
    let message = "";
    for (let i = 0; i < array.length; i += 1) {
        message += `${i + 1} - ${array[i]} `;
    }
    return message;
}

console.log(logItems(['Mango', 'Poly', 'Ajax']));



// 2 ЗАВДАННЯ
console.log("2 ЗАВДАННЯ");

// Напиши скрипт підрахунку вартості гравіювання прикрас. 
// Для цього створи функцію calculateEngravingPrice(message, pricePerWord), 
// приймаючу рядок (в рядку будуть тільки слова і прогалини)
// і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

const calculateEngravingPrice = function (message, pricePerWord) {
    const srtingLength = message.split(" ");
    const arrayLength = srtingLength.length;
    const result = `Ціна гравіювання становить ${arrayLength * pricePerWord} гривень`;
    return result;
}

console.log(calculateEngravingPrice("Hello world! I love JavaScript!", 15));



// 3 ЗАВДАННЯ
console.log("3 ЗАВДАННЯ");

// Напиши функцію findLongestWord(string), 
// яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) 
// і повертає найдовше слово в цьому рядку.

const findLongestWord = function (string) {
    const array = string.split(" ");
    let longest = "";
    for (const word of array) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

console.log(findLongestWord("30 квітня 1945 року в бункері під Рейхсканцелярією в Берліні 56-річний Адольф Гітлер і його 33-річна дружина Єва Браун покінчили життя самогубством"));



// 4 ЗАВДАННЯ
console.log("4 ЗАВДАННЯ");

// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.

// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.

// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів 
// і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.

const formatString = function (string) {
    if (string.length <= 40) {
        return string;
    } else {
        const sliceString = string.slice(0, 40);
        return `${sliceString}...`;
    }
}

console.log(formatString("Заохочування Duo до навчання - це пройди урок або інакше тобі кірдик"));



// 5 ЗАВДАННЯ
console.log("5 ЗАВДАННЯ");

// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. 
// Функція перевіряє її на вміст слів spam і sale. 
// Якщо знайшли заборонене слово, то функція повертає true, 
// якщо заборонених слів немає функція повертає false. 
// Слова в рядку можуть бути в довільному регістрі.

const checkForSpam = function (message) {
    if (message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale")) {
        return true;
    } else {
        return false;
    }
}

console.log(checkForSpam("SALE! We're selling MMM coupons for just $9999.99! It's TRUE! Isn't SPAM!"));



// 6 ЗАВДАННЯ
console.log("6 ЗАВДАННЯ");

// Напиши скрипт з наступним функціоналом:
// При завантаженні сторінки користувачеві пропонується в prompt ввести число. 
// Введення зберігається в змінну input і додається в масив чисел numbers.

// Операція введення числа користувачем і збереження в масив триває до тих пір, 
// поки користувач не натисне Cancel в prompt.

// Після того як користувач припинив введення натиснувши Cancel, 
// якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total.
// Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.
// Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не обов'язково. 

// Якщо хочеш, в разі некоректного введення, показуй alert з текстом 'Було введено не число, попробуйте ще раз',
// при цьому результат prompt записувати в масив чисел не потрібно, 
// після чого знову користувачеві пропонується ввести число в prompt.

let input;
const numbers = [];
let total = 0;

do {
    input = Number(prompt("Введіть число:"));
    numbers.push(input)
} while (input !== 0) {
    for (let i = 0; i < numbers.length; i += 1) {
        total += numbers[i];
    }
    console.log(`Загальна сума чисел дорівнює ${total}`);
    alert(total);
}

if (input.isNaN === true) {
    alert("Було введено не число, спробуйте ще раз");
    input = Number(prompt("Введіть число:"));
}



// 7 ЗАВДАННЯ*
console.log("7 ЗАВДАННЯ*");

// Є масив logins з логінами користувачів. 
// Напиши скрипт додавання логіна в масив logins. 
// Логін, який додається повинен:
// а) проходити перевірку на довжину від 4 до 16-ти символів включно;
// б) бути унікальним, тобто бути відсутнім в масиві logins.

// Розбий завдання на підзадачі за допомогою функцій.
// Напиши функцію isLoginValid(login), в якій перевір кількість символів параметра login і 
// поверни true або false в залежності від того, чи потрапляє довжина параметра в заданий діапазон 
// від 4-х до 16-ти символів включно.

// Напиши функцію isLoginUnique(allLogins, login), яка приймає список всіх логінів і логін, 
// який додається, як параметри і перевіряє наявність login в массиве allLogins, 
// повертає true якщо такого логіна ще немає і false якщо логін вже використовується.

// Напиши функцію addLogin(allLogins, login) яка:
// а) Приймає новий логін і масив всіх логінів як параметри;
// б) Перевіряє валідність логіна використовуючи допоміжну функцію isLoginValid;
// в) Якщо логін не валідний, припинити виконання функції addLogin і 
// повернути радок 'Помилка! Логін повинен бути від 4 до 16 символів';
// г) Якщо логін валідний, функція addLogin перевіряє унікальність логіна за допомогою функції isLoginUnique;
// ґ) Якщо isLoginUnique поверне false, тоді addLogin не додає логін в массив масив і 
// повертає рядок 'Такий логін уже використовується!';
// д) Якщо isLoginUnique поверне true, addLogin додає новий логін в logins і 
// повертає рядок 'Логін успішно доданий!';

const allLogins = ["Галина", "Марта", "Олесь", "Сергій", "Миролюб", "Владислава", "В'ячеслав"];
const login = "Марта";

const addLogin = function (allLogins, login) {
    if (isLoginValid(login) === false) {
        const unvalid = "Помилка! Логін повинен бути від 4 до 16 символів";
        return unvalid;
    } else if (isLoginUnique(allLogins, login) === false) {
        const notUnique = "Такий логін уже використовується!";
        return notUnique;
    } else {
        allLogins.push(login);
        console.log(allLogins);
        const added = "Логін успішно доданий!";
        return added;
    }
}

const isLoginValid = function (login) {
    if (login.length >= 4 && login.length <= 16) {
        return true;
    } else {
        return false;
    }
}

const isLoginUnique = function (allLogins, login) {
    if (allLogins.includes(login)) {
        return false;
    } else {
        return true;
    }
}

console.log(addLogin(allLogins, login));
