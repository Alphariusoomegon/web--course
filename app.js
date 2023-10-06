// const express = require('express');
// const app = express();
// const port = 3000;

// // Дозволяємо обробку даних з форми
// app.use(express.urlencoded({ extended: true }));

// // Встановлюємо шлях до статичних файлів (CSS, JS)
// app.use(express.static('public'));

// // Відображення HTML-форми
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/public/form.html');
// });

// // Обробка даних з форми
// app.post('/submit', (req, res) => {
//   const { username, email, phone } = req.body;
//   // Тут ви можете обробити дані, які були відправлені з форми
//   console.log(`Ім'я: ${username}`);
//   console.log(`Пошта: ${email}`);
//   console.log(`Телефон: ${phone}`);
//   res.send('Дані були успішно відправлені!');
// });

// app.listen(port, () => {
//   console.log(`Сервер працює на порту ${port}`);
// });