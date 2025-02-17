'use strict';

// Git

// 0. Конфігурація
//   Використайте команду "git config --global user.name "Ivan Ivanov"" для встановлення імені користувача git
//   Використайте команду "git config --global user.email ivanov@gmail.com" для встановлення пошти користувача git

// 1. Ініціалізація репозиторію:
//   Створіть новий локальний репозиторій.
//   Ініціалізуйте його за допомогою команди "git init".
//   Додайте декілька файлів у репозиторій.
//   Використайте команду "git status" для перевірки.
//   Використайте команду "git add ." для додавання змін в git.
//   Використайте команду "git status" для перевірки.

// 2. Додавання та збереження змін:
//   Змініть вміст одного або кількох файлів.
//   Використайте команду "git add ." для додавання змін в git.
//   Використайте команду "git status" для перевірки.
//   Використайте команду "git commit -m "Назва вашого коміту" для збереження змін у репозиторії з повідомленням про коміт.
//   Використайте команду "git status" для перевірки.

// 3. Гілки:
//   Створіть нову гілку за допомогою команди "git branch newBranch".
//   Використайте команду "git branch -vv" для перевірки всіх гілок.
//   Перейдіть на новостворену гілку за допомогою команди "git checkout newBranch".
//   Використайте команду "git branch -vv" для перевірки всіх гілок.
//   Внесіть зміни у файлі на новій гілці та збережіть коміт.
//   Використайте команду "git branch -vv" для перевірки всіх гілок.
//   Перейдіть на іншу гілку та переконайтеся, що зміни не вплинули на неї.

// 4. Злиття гілок:
//   Перейдіть на основну гілку.
//   Виконайте команду "git merge newBranch" для злиття гілок.
//   Використайте команду "git branch -vv" для перевірки всіх гілок.
//   Видаліть гілку newBranch за допомогою команди "git branch -d newBranch".

// 5. Відновлення попередніх комітів:
//   Використайте команду "git log --oneline", щоб переглянути журнал комітів та скопіюйте id першого коміту.
//   Виконайте команду "git checkout <ваш скопійований id>" для відновлення попереднього коміту та перевірте, як зміниться стан робочого каталогу.
//   Використайте команду "git log --oneline", щоб переглянути журнал комітів.
//   Виконайте команду "git checkout main" для переходу на останній актуальний коміт в гілці.
//   Використайте команду "git log --oneline", щоб переглянути журнал комітів.

// 6. Віддалені репозиторії:
//   Створіть новий віддалений репозиторій на платформі GitHub.
//   Зв'яжіть ваш локальний репозиторій з віддаленим за допомогою команди "git remote add <ваше посилання на репозиторій з github>".
//   Використайте команду "git push -u origin main" для відправки комітів до віддаленого репозиторію.
//   Використайте команду "git log --oneline", щоб переглянути журнал комітів.
//   Оновіть сторінку github і побачите зміни.

// 7. Розгалуження та видалення гілок:
//   Створіть нову гілку, внесіть зміни та виконайте коміт.
//   Відправте ваші зміни на віддалений репозиторій командою "git push --set-upstream origin <назва вашої гілки>" для відображення в ньому нової гілки
//   Втягніть зміни вашої гілки в основну.
//   Використайте команду "git log --oneline", щоб переглянути журнал комітів.
//   Відправте ваші зміни на віддалений репозиторій командою "git push"

// Затримки
// 1. Напишіть функцію, яка приймає рядок і виводить його в консоль затримкою у 2 секунди.

// const str = 'newString';
// function printWithDelay(str) {
// 	setTimeout(() => {
// 		console.log(str);
// 	}, 2000);
// }

// printWithDelay(str);

// 2. Створіть таймер, який відлічує час у зворотному напрямку від 10 до 0. Виведіть кожне число затримкою у 1 секунду.

// const timer = from => {
// 	let current = from;

// 	const timerId = setInterval(() => {
// 		console.log(current);
// 		current--;

// 		if (current < 0) {
// 			clearInterval(timerId);
// 			console.log('Час закінчився');
// 		}
// 	}, 1000);
// };

// timer(10);

// 3. Створіть функцію, яка випадковим чином виводить одне з трьох повідомлень в консоль кожні 2 секунди.

const randomMessage = () => {
	const messages = ['Повідомлення 1', 'Повідомлення 2', 'Повідомлення 3'];

	setInterval(() => {
		const randomIndex = Math.floor(Math.random() * messages.length);
		console.log(messages[randomIndex]);
	}, 2000);
};

randomMessage();

// 4. Всі завдання зі статті: https://uk.javascript.info/settimeout-setinterval
