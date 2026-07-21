// Ініціалізація Telegram Web App
const tg = window.Telegram ? window.Telegram.WebApp : null;
if (tg) {
    tg.expand();
}

// 10 Різноманітних та веселих питань
// 10 Питань під 4 конкретні сорти пива Underwood
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
            { text: "Гра грайливого гедоніста, який любить ласощі 🐾", beer: "milky_mango" },
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

// База даних результатів із прямими посиланнями
const beerResults = {
    capital_dipa: {
        title: "CAPITAL DIPA 💥",
        style: "Double IPA (ABV 8.0% | IBU 60)",
        desc: "Ти — бескомпромісний лідер із потужним характером! Любиш виразні смаки, не боїшся складнощів і завжди береш від життя максимум.",
        url: "https://underwood.beer/product/pyvo-svitle-capital-dipa-033-l-banka-8-0/?utm_source=telegram"
    },
    kyiv_lager: {
        title: "KYIV LAGER 🍺",
        style: "Helles Lager (ABV 5.1% | IBU 19)",
        desc: "Ти — золота класика та душа компанії. Душевність, стабільність і затишок — це твої головні орієнтири.",
        url: "https://underwood.beer/product/kyiv-lager/?utm_source=telegram"
    },
    gaijin: {
        title: "GAIJIN 🥢",
        style: "Asian Tomato Gose (ABV 3.0% | IBU 19)",
        desc: "Ти — сміливий гастро-експериментатор! Тебе не лякають нестандартні поєднання соєвого та устричного соусів, а твій стиль завжди дивує.",
        url: "https://underwood.beer/product/pyvo-svitle-gaijin-0-33-l-banka-30/?utm_source=telegram"
    },
    milky_mango: {
        title: "MILKY MANGO 🥭",
        style: "Milkshake IPA (ABV 5.5% | IBU 30)",
        desc: "Ти — справжній гедоніст! Вмієш насолоджуватися моментом, цінуєш затишок і солодкі радості життя.",
        url: "https://underwood.beer/product/milky-mango/?utm_source=telegram"
    },
  
};

let currentQuestion = 0;
let scores = {};

function startQuiz() {
    currentQuestion = 0;
    scores = {};
    showScreen('quiz-screen');
    renderQuestion();
}

function renderQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question-text').innerText = q.question;
    document.getElementById('question-count').innerText = `Питання ${currentQuestion + 1}/${questions.length}`;
    
    const progressPercent = ((currentQuestion) / questions.length) * 100;
    document.getElementById('progress').style.width = `${progressPercent}%`;

    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';

    q.answers.forEach(ans => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.innerText = ans.text;
        btn.onclick = () => selectAnswer(ans.beer);
        answersContainer.appendChild(btn);
    });
}

function selectAnswer(beerKey) {
    scores[beerKey] = (scores[beerKey] || 0) + 1;
    currentQuestion++;

    if (currentQuestion < questions.length) {
        renderQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    let topBeer = 'kyiv_lager';
    let maxScore = -1;

    for (const beer in scores) {
        if (scores[beer] > maxScore) {
            maxScore = scores[beer];
            topBeer = beer;
        }
    }

    const result = beerResults[topBeer] || beerResults['kyiv_lager'];
    document.getElementById('beer-title').innerText = result.title;
    document.getElementById('beer-style').innerText = result.style;
    document.getElementById('beer-desc').innerText = result.desc;
    document.getElementById('order-link').href = result.url;

    showScreen('result-screen');
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function restartQuiz() {
    showScreen('start-screen');
}
