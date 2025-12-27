// Объявление переменных
let userName = "Иван"; // Строка
const userAge = 30; // Число (константа)
let isStudent = true; // Булево значение
let hobbies = ["чтение", "программирование", "спорт"]; // Массив
let userProfile = { // Объект    
    name: userName,    
    age: userAge,    
    city: "Москва"
    };
    console.log("Имя пользователя:", userName);
    console.log("Возраст пользователя:", userAge);
    console.log("Студент:", isStudent);
    console.log("Хобби:", hobbies);
    console.log("Профиль пользователя:", userProfile);
    // Изменение переменной
    userName = "Алексей";
    console.log("Новое имя пользователя:", userName);
    // Попытка изменить константу (вызовет ошибку)
    // userAge = 31;
    let a = 10;
    let b = 5;
    console.log("Сложение:", a + b); // 15
console.log("Вычитание:", a - b); 
console.log("Умножение:", a * b); // 50
console.log("Деление:", a / b); // 2
console.log("Остаток от деления:", a % b); // 0

let greeting = "Привет, " + userName + "!";
console.log(greeting);

console.log("Равно ли a b?", a == b); // false
console.log("Строго равно ли a b?", a === b); // false
console.log("a больше b?", a > b); // true

let temperature = 25;
if (temperature > 30) {    
    console.log("Очень жарко!");
} else if (temperature > 20) {    
    console.log("Тепло и комфортно.");
} else {    
    console.log("Прохладно.");
}

// Тернарный оператор
let message = (userAge >= 18) ? "Совершеннолетний" : "Несовершеннолетний";
console.log(message)

let dayOfWeek = "среда";
switch (dayOfWeek) {    
    case "понедельник":        
    console.log("Начало рабочей недели.");        
    break;    
    case "среда":        
    console.log("Середина недели.");        
    break;    
    case "пятница":        
    console.log("Конец рабочей недели!");        
    break;    
    default:        
    console.log("Обычный день.");
}

// Цикл for
for (let i = 0; i < 5; i++) {    
    console.log("Итерация for: " + i);}
// Цикл while
let count = 0;while (count < 3) {    
    console.log("Итерация while: " + count);    
    count++;}
// Цикл for...of для массивов
for (let hobby of hobbies) {    
    console.log("Мое хобби: " + hobby);}
// Цикл for...in для объектов (для перебора ключей)
for (let key in userProfile) {    
    console.log(key + ": " + userProfile[key]);
}

// Надёжные селекторы (запретим перезапись содержимого)
const mainTitle = document.getElementById("site-title"); // использует id из index.html
const siteSubtitle = document.getElementById("site-subtitle");

// УБРАТЬ: больше не меняем заголовки и параграфы автоматически
// (ранее: mainTitle.textContent = "..."; firstParagraph.innerHTML = "..."; и т.д.)
// Если в файле есть строки, которые изменяют текст или создают параграф,
// удалите или закомментируйте их — пример ниже:

/* Пример — закомментируйте или удалите эти строки, если они есть:
if (mainTitle) {
    // mainTitle.textContent = "Изучаем DOM с JavaScript!";   // убрать
    // mainTitle.style.color = "#e74c3c";                   // убрать
    // mainTitle.style.fontSize = "3rem";                   // убрать
}
if (firstParagraph) {
    // firstParagraph.innerHTML = "Это <strong>обновленный</strong> параграф с <em>HTML</em>."; // убрать
}
const mainSection = document.querySelector("main section");
if (mainSection) {
    // const newParagraph = document.createElement("p");    // убрать
    // newParagraph.textContent = "Этот параграф был создан JavaScript.";
    // mainSection.appendChild(newParagraph);               // убрать
}
*/

// Сохраняем лишь обработчики кнопки и инпута (без изменения контента)
const myButton = document.getElementById("my-button");
if (myButton) {
    myButton.addEventListener("click", function () {
        alert("Кнопка была нажата!");
        // не меняем заголовок, только визуальное подтверждение
    });
}
const myInput = document.getElementById("my-input");
const inputDisplay = document.getElementById("input-display");
if (myInput && inputDisplay) {
    myInput.addEventListener("input", function () {
        inputDisplay.textContent = "Вы ввели: " + myInput.value;
    });
}

const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Форма отправлена! (на самом деле это демонстрация)");
        const firstNameEl = document.getElementById("firstName");
        const emailEl = document.getElementById("email");
        const bioEl = document.getElementById("bio");
        console.log("Имя:", firstNameEl ? firstNameEl.value : "");
        console.log("Email:", emailEl ? emailEl.value : "");
        console.log("Сообщение:", bioEl ? bioEl.value : "");
    });
}

/* === НЕ ПЕРЕЗАТИРАЕМ заголовки на странице ===
   Восстанавливаем исходные надписи и убираем автоматические перезаписи */
const siteTitleEl = document.getElementById("site-title");
const siteSubtitleEl = document.getElementById("site-subtitle");

// Если элементы есть — вернуть оригинальные тексты
if (siteTitleEl) {
    siteTitleEl.textContent = "milyoy"; // исходный заголовок
    // удалить вспомогательные инлайновые стили/классы, если они были добавлены
    siteTitleEl.style.color = "";
    siteTitleEl.style.fontSize = "";
    siteTitleEl.classList.remove("highlight");
}
if (siteSubtitleEl) {
    siteSubtitleEl.textContent = "Начинающий веб-разработчик"; // исходная подпись
}