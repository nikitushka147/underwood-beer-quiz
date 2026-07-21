// ==========================================
// 1. БАЗА ПИТАНЬ ТА ВАРІАНТІВ ВІДПОВІДЕЙ
// ==========================================
const questions = [
    {
        question: "1. Твій ідеальний вечір п'ятниці — це:",
        answers: [
            { text: "Затишний відпочинок удома, диван і повна тиша 🛋", beer: "kyiv_lager" },
            { text: "Гастро-тур новим місцями або азійська кухня 🥢", beer: "gaijin" },
            { text: "Чілл під улюблені треки з чимось смачненьким 🥭", beer: "milky_mango" },
            { text: "Гулка вечірка, танці та максимум драйву 💥", beer: "capital_dipa" }
        ]
    },
    {
        question: "2. Твій улюблений смаковий профіль:",
        answers: [
            { text: "Легкий, зрозумілий та освіжаючий солод 🍺", beer: "kyiv_lager" },
            { text: "Пікантний, солоно-томатний зі спеціями 🌶", beer: "gaijin" },
            { text: "Соковитий, ніжний та солодкий тропік 🥭", beer: "milky_mango" },
            { text: "Потужний, гіркий та насичено-хмелевий 🌲", beer: "capital_dipa" }
        ]
    },
    {
        question: "3. Якби ти обирав(ла) саундтрек для свого дня:",
        answers: [
            { text: "Душевна класика або спокійний акустичний рок 🎸", beer: "kyiv_lager" },
            { text: "Екзотичний східний синтвейв або лоу-фай ⛩", beer: "gaijin" },
            { text: "Приємний літній інді-поп з сонячним вайбом 🎧", beer: "milky_mango" },
            { text: "Важкий драйвовий рок або потужний біт 🔊", beer: "capital_dipa" }
        ]
    },
    {
        question: "4. Яка суперсила тобі зараз найбільше потрібна?",
        answers: [
            { text: "Вміння миттєво розслабитися й відчути затишок 🧘‍♂️", beer: "kyiv_lager" },
            { text: "Здатність дивувати всіх навколо щодня 💥", beer: "gaijin" },
            { text: "Телепортація на сонячний тропічний острів 🏝", beer: "milky_mango" },
            { text: "Нескінченна енергія для закриття складних завдань ⚡️", beer: "capital_dipa" }
        ]
    },
    {
        question: "5. Вибери ідеальний формат відпустки:",
        answers: [
            { text: "Душевна поїздка до рідного міста або на природу 🌳", beer: "kyiv_lager" },
            { text: "Експедиція в Азію за новими смаками й враженнями 🍜", beer: "gaijin" },
            { text: "Пляжний ресорт з фруктовими коктейлями 🌊", beer: "milky_mango" },
            { text: "Підкорення гірських вершин чи драйвовий мегаполіс 🏙", beer: "capital_dipa" }
        ]
    },
    {
        question: "6. Твоє відношення до експериментів у житті:",
        answers: [
            { text: "Ціную перевірену класику — це завжди надійно 🍺", beer: "kyiv_lager" },
            { text: "Обожнюю виклики та незвичні поєднання 🥢", beer: "gaijin" },
            { text: "Люблю солодку екзотику та нові естетичні речі 🥭", beer: "milky_mango" },
            { text: "Йду тільки на максималках, без компромісів 🔥", beer: "capital_dipa" }
        ]
    },
    {
        question: "7. Який ти котик за характером сьогодні?",
        answers: [
            { text: "Спокійний пухнастик, який гріється на сонечку ☀️", beer: "kyiv_lager" },
            { text: "Загадковий сфінкс зі своїм особливим вайбом 🐈‍⬛", beer: "gaijin" },
            { text: "Грайливий гедоніст, який любить ласощі 🐾", beer: "milky_mango" },
            { text: "Енергійний мейн-кун, який тримає все під контролем 🦁", beer: "capital_dipa" }
        ]
    },
    {
        question: "8. Якщо описати твій стиль одягу чи настрій:",
        answers: [
            { text: "Зручний кежуал: худі, джинси, базові кросівки 👟", beer: "kyiv_lager" },
            { text: "Концептуальний авангард із яскравими деталями 🎨", beer: "gaijin" },
            { text: "Яскравий літній стрітвайр або естетичний оверсайз 🌈", beer: "milky_mango" },
            { text: "Строгий, впевнений та бескомпромісний стиль 🖤", beer: "capital_dipa" }
        ]
    },
    {
        question: "9. Твоя улюблена страва до келиха:",
        answers: [
            { text: "Класичні солоні грінки чи сирні палички 🧀", beer: "kyiv_lager" },
            { text: "Гострий рамен, локшина або соковиті суші 🍜", beer: "gaijin" },
            { text: "Фруктовий десерт або ніжний сирний чізкейк 🍰", beer: "milky_mango" },
            { text: "Соковитий подвійний бургер із гострим соусом 🍔", beer: "capital_dipa" }
        ]
    },
    {
        question: "10. Головний девіз на цей тиждень:",
        answers: [
            { text: "«Все геніальне — просте та збалансоване» 🧘‍♀️", beer: "kyiv_lager" },
            { text: "«Спробувати щось абсолютно нове й розширити межі» 🌶", beer: "gaijin" },
            { text: "«Додати більше фарб, солоду та тропіків!» 🥭", beer: "milky_mango" },
            { text: "«Взяти від життя максимум і брати нові вершини!» 🔥", beer: "capital_dipa" }
        ]
    }
];

// ==========================================
// 2. ОПИСИ РЕЗУЛЬТАТІВ
// ==========================================
const beerResults = {
    kyiv_lager: {
        title: "Твій сорт — Kyiv Lager 🍺",
        desc: "Ти цінуєш душевність, гармонію та перевірену якість. Твій вибір — світла та освіжаюча класика, яка ідеально підходить під будь-який настрій."
    },
    gaijin: {
        title: "Твій сорт — Gaijin 🌶",
        desc: "Ти справжній шукач яскравих гастрономічних вражень! Азійський томатний ґозе зі спеціями та умамі-нотами створений саме для твоїх експериментів."
    },
    milky_mango: {
        title: "Твій сорт — Milky Mango 🥭",
        desc: "Ти вмієш насолоджуватися життям та обираєш соковитий гедонізм. Ніжний Milkshake IPA з соковитим манго — це твоє літо в келиху."
    },
    capital_dipa: {
        title: "Твій сорт — Capital DIPA 🔥",
        desc: "Максимум енергії, безкомпромісна гіркота та міць. Потужний Double IPA створений для тих, хто звик брати від життя максимум."
    }
};

// ==========================================
// 3. ЗМІННІ СТАНУ ТА ЕЛЕМЕНТИ DOM
// ==========================================
let currentQuestionIndex = 0;
let scores = { kyiv_lager: 0, gaijin: 0, milky_mango: 0, capital_dipa: 0 };

// Елементи
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');

const questionTitle = document.getElementById('question-title');
const answersContainer = document.getElementById('answers-container');

const resultTitle = document.getElementById('result-title');
const resultDesc = document.getElementById('result-desc');

// ==========================================
// 4. ФУНКЦІЯ ПЕРЕМІШУВАННЯ (FISHER-YATES)
// ==========================================
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ==========================================
// 5. ЛОГІКА ТЕСТУ
// ==========================================

// Запуск тесту
function startQuiz() {
    currentQuestionIndex = 0;
    scores = { kyiv_lager: 0, gaijin: 0, milky_mango: 0, capital_dipa: 0 };

    // Перемішуємо самі питання
    shuffleArray(questions);

    // Перемішуємо 4 варіанти відповідей всередині кожного питання
    questions.forEach(q => {
        if (q.answers) {
            shuffleArray(q.answers);
        }
    });

    // Перемикаємо екрани
    if (startScreen) startScreen.classList.add('hidden');
    if (resultScreen) resultScreen.classList.add('hidden');
    if (quizScreen) quizScreen.classList.remove('hidden');

    showQuestion();
}

// Відображення поточного питання
function showQuestion() {
    answersContainer.innerHTML = '';
    const currentQ = questions[currentQuestionIndex];

    questionTitle.textContent = currentQ.question;

    currentQ.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('answer-btn');
        button.addEventListener('click', () => selectAnswer(answer.beer));
        answersContainer.appendChild(button);
    });
}

// Вибір відповіді
function selectAnswer(beerType) {
    if (scores.hasOwnProperty(beerType)) {
        scores[beerType]++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Розрахунок та показування результату
function showResult() {
    if (quizScreen) quizScreen.classList.add('hidden');
    if (resultScreen) resultScreen.classList.remove('hidden');

    // Знаходимо сорт із найбільшою кількістю балів
    let topBeer = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    const result = beerResults[topBeer];

    resultTitle.textContent = result.title;
    resultDesc.textContent = result.desc;
}

// ==========================================
// 6. ПРИВ'ЯЗКА ПОДІЙ (СЛУХАЧІ КНОПОК)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    if (startBtn) {
        startBtn.addEventListener('click', startQuiz);
    }
    
    if (restartBtn) {
        restartBtn.addEventListener('click', startQuiz);
    }
});
