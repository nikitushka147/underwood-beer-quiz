// Ініціалізація Telegram Web App
const tg = window.Telegram ? window.Telegram.WebApp : null;
if (tg) {
    tg.expand(); // Розгортаємо вікно на весь екран в TG
}

// База даних питань та балів
const questions = [
    {
        question: "Який у тебе план на ідеальний вечір п'ятниці?",
        answers: [
            { text: "Шумна вечірка та танці до ранку 💃", beer: "capital_dipa" },
            { text: "Дивитися серіал під ковдрою 🛋", beer: "kyiv_lager" },
            { text: "Експерименти на кухні чи дивний арт-хаус 🥑", beer: "gaijin" },
            { text: "Посиденьки з друзями на свіжому повітрі 🌿", beer: "forest_blanche" }
        ]
    },
    {
        question: "Який смак ти обираєш найчастіше?",
        answers: [
            { text: "Соковитий, тропічний та солодкуватий 🥭", beer: "milky_mango" },
            { text: "Виразна гіркота та хвойний аромат 🌲", beer: "capital_dipa" },
            { text: "Солоний, пікантний із соусом умамі 🥢", beer: "gaijin" },
            { text: "Легкий, освіжаючий та цитрусовий 🍋", beer: "forest_blanche" }
        ]
    },
    {
        question: "Якби ти був(ла) котиком, то яким?",
        answers: [
            { text: "Класичним дворовим пухнастиком, якого всі люблять 🐈", beer: "kyiv_lager" },
            { text: "Екзотичним сфінксом із власною філософією 🐈‍⬛", beer: "gaijin" },
            { text: "Енергійним мейн-куном, який займає весь простір 🦁", beer: "capital_dipa" },
            { text: "Ніжним та грайливим кошеням 🐾", beer: "milky_mango" }
        ]
    }
];

// База даних результатів пива
const beerResults = {
    capital_dipa: {
        title: "CAPITAL DIPA 💥",
        style: "Double IPA (ABV 8.0% | IBU 60)",
        desc: "Ти — безкомпромісний екстраверт з потужним характером! Любиш виразні смаки, не боїшся складнощів і завжди береш від життя максимум.",
        url: "https://underwood.beer/product/pyvo-svitle-capital-dipa-033-l-banka-8-0/?utm_source=telegram"
    },
    kyiv_lager: {
        title: "KYIV LAGER 🍺",
        style: "Helles Lager (ABV 5.1% | IBU 19)",
        desc: "Ти — золота класика та душа будь-якої компанії. Душевність, стабільність і затишок — це твої головні цінності.",
        url: "https://underwood.beer/product/kyiv-lager/?utm_source=telegram"
    },
    gaijin: {
        title: "GAIJIN 🥢",
        style: "Asian Tomato Gose (ABV 3.0% | IBU 19)",
        desc: "Ти — сміливий експериментатор! Тебе не лякають нестандартні рішення, а твій смак та стиль завжди дивують оточуючих.",
        url: "https://underwood.beer/product/pyvo-svitle-gaijin-0-33-l-banka-30/?utm_source=telegram"
    },
    milky_mango: {
        title: "MILKY MANGO 🥭",
        style: "Milkshake IPA (ABV 5.5% | IBU 30)",
        desc: "Ти — справжній гедоніст! Вмієш насолоджуватися моментом, цінуєш комфорт і солодкі радості життя.",
        url: "https://underwood.beer/product/milky-mango/?utm_source=telegram"
    },
    forest_blanche: {
        title: "FOREST BLANCHE 🌿",
        style: "Witbier (ABV 4.6% | IBU 15)",
        desc: "Ти — легка, дипломатична та естетична натура. З тобою завжди приємно відпочити й перезавантажитися.",
        url: "https://underwood.beer/product/forest-blanche/?utm_source=telegram"
    }
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
    
    // Оновлення прогрес-бару
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
    // Визначення переможця
    let topBeer = 'kyiv_lager';
    let maxScore = -1;

    for (const beer in scores) {
        if (scores[beer] > maxScore) {
            maxScore = scores[beer];
            topBeer = beer;
        }
    }

    const result = beerResults[topBeer];
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
