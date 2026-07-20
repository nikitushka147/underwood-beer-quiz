// Ініціалізація Telegram Web App
const tg = window.Telegram ? window.Telegram.WebApp : null;
if (tg) {
    tg.expand();
}

// 10 Різноманітних та веселих питань
const questions = [
    {
        question: "1. Твій ідеальний вечір п'ятниці — це:",
        answers: [
            { text: "Гулка вечірка, танці та максимум драйву 💃", beer: "capital_dipa" },
            { text: "Улюблений серіал, диван і повна тиша 🛋", beer: "kyiv_lager" },
            { text: "Затишні посиденьки в барі з глибокими розмовами 🌿", beer: "forest_blanche" },
            { text: "Гастро-тур новими місцями або експерименти на кухні 🥢", beer: "gaijin" }
        ]
    },
    {
        question: "2. Якби ти обирав(ла) саундтрек для свого життя:",
        answers: [
            { text: "Важкий рок або потужний електронний біт 🎸", beer: "capital_dipa" },
            { text: "Приємний літній індо-поп або лоу-фай 🎧", beer: "milky_mango" },
            { text: "Вишукана класика або легкий джаз 🎷", beer: "spritz" },
            { text: "Східна медитативна музика або синтвейв ⛩", beer: "rising_sun" }
        ]
    },
    {
        question: "3. Твій улюблений смаковий профіль у їжі та напоях:",
        answers: [
            { text: "Соковитий, солоденький, з фруктиками 🥭", beer: "milky_mango" },
            { text: "Насичений, солоний, з пікантними спеціями 🌶", beer: "gaijin" },
            { text: "Виразна гіркота, хвойний та цитрусовий аромат 🌲", beer: "original_ipa" },
            { text: "Легкий, з кислинкою та яскравою освіжістю 🍹", beer: "spritz" }
        ]
    },
    {
        question: "4. Яка суперсила тобі зараз найбільше потрібна?",
        answers: [
            { text: "Нескінченна енергія, щоб закрити всі дедлайни ⚡️", beer: "capital_dipa" },
            { text: "Вміння миттєво розслабитися й забути про стрес 🧘‍♂️", beer: "kyiv_lager" },
            { text: "Телепортація на екзотичний тропічний острів 🏝", beer: "yucatan_gold" },
            { text: "Здатність зберігати тверезий та ясний розум 24/7 🧠", beer: "pure_ipa" }
        ]
    },
    {
        question: "5. Вибери ідеальний формат відпустки:",
        answers: [
            { text: "Експедиція в Азію або гастрономічний тур 🍜", beer: "gaijin" },
            { text: "Відпочинок у хвойному лісі біля озера 🌲", beer: "forest_blanche" },
            { text: "Пляжний ресорт з коктейлями біля басейну 🌊", beer: "yucatan_gold" },
            { text: "Подорож крізь хмарочоси та неонові мегаполіси 🏙", beer: "rising_sun" }
        ]
    },
    {
        question: "6. Твоє відношення до експериментів у житті:",
        answers: [
            { text: "Обожнюю виклики й усе дивне, звичайне — це нудно 💥", beer: "gaijin" },
            { text: "Люблю перевірену класику, навіщо вигадувати велосипед? 🍺", beer: "kyiv_lager" },
            { text: "Помірковане: ціную баланс і якісний результат ⚖️", beer: "original_ipa" },
            { text: "Завжди відкритий(а) до солодких екзотичних новин 🥭", beer: "milky_mango" }
        ]
    },
    {
        question: "7. Який ти котик за характером сьогодні?",
        answers: [
            { text: "Енергійний мейн-кун, який вважає себе господарем будинку 🦁", beer: "capital_dipa" },
            { text: "Спокійний пухнастик, який просто спить на сонечку ☀️", beer: "kyiv_lager" },
            { text: "Загадковий сфінкс зі своїм особливим вайбом 🐈‍⬛", beer: "gaijin" },
            { text: "Вишукана та грайлива породиста кішечка 🎀", beer: "spritz" }
        ]
    },
    {
        question: "8. Якщо завтра на роботу, а сьогодні вечір:",
        answers: [
            { text: "Вип'ю щось максимально легке й ляжу раніше 💤", beer: "forest_blanche" },
            { text: "Обираю безалкогольне, щоб зранку бути як огірочок 🥒", beer: "pure_ipa" },
            { text: "Один келих для настрою, гуляємо! 🥂", beer: "spritz" },
            { text: "Занурюсь у книги або улюблені хобі 📚", beer: "rising_sun" }
        ]
    },
    {
        question: "9. Твій улюблений стиль одягу чи настрою:",
        answers: [
            { text: "Яскравий стрітвайр, який привертає погляди 🌈", beer: "yucatan_gold" },
            { text: "Строгий, стильний та бескомпромісний оверсайз 🖤", beer: "capital_dipa" },
            { text: "Зручний кежуал: худі, джинси, кросівки 👟", beer: "kyiv_lager" },
            { text: "Легкий літній льон та естетичні деталі 🌾", beer: "forest_blanche" }
        ]
    },
    {
        question: "10. Головний девіз на цей тиждень:",
        answers: [
            { text: "«Взяти від життя максимум і навіть більше!» 🔥", beer: "capital_dipa" },
            { text: "«Все геніальне — просте та збалансоване» 🧘‍♀️", beer: "kyiv_lager" },
            { text: "«Дивувати себе та оточуючих щодня» 🥢", beer: "gaijin" },
            { text: "«Додати більше фарб, цукру та тропіків!» 🥭", beer: "milky_mango" }
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
    forest_blanche: {
        title: "FOREST BLANCHE 🌿",
        style: "Witbier (ABV 4.6% | IBU 15)",
        desc: "Ти — легка, дипломатична та естетична натура. З тобою завжди приємно відпочити й перезавантажитися.",
        url: "https://underwood.beer/product/forest-blanche/?utm_source=telegram"
    },
    spritz: {
        title: "SPRITZ 🍹",
        style: "Beer Cocktail (ABV 6.0% | IBU 10)",
        desc: "Ти — свято, яке завжди поруч! Яскравий, легкий на підйом і завжди в центрі уваги будь-якої вечірки.",
        url: "https://underwood.beer/product/spritz/?utm_source=telegram"
    },
    rising_sun: {
        title: "RISING SUN ⛩",
        style: "Rice Lager (ABV 5.0% | IBU 20)",
        desc: "Ти — втілення гармонії та витонченого смаку. М'який азійський рисовий лагер ідеально підкреслює твій спокійний вайб.",
        url: "http://underwood.beer/product/pyvo-svitle-rising-sun-033-l-banka-5-0/?utm_source=telegram"
    },
    yucatan_gold: {
        title: "YUCATAN GOLD 🥑",
        style: "Sour Milkshake IPA (ABV 4.7% | IBU 25)",
        desc: "Ти — вибуховий коктейль з емоцій! Поєднання кислого, тропічного та солодкого — це твоя формула незабутнього дня.",
        url: "https://underwood.beer/product/yucatan-gold/?utm_source=telegram"
    },
    pure_ipa: {
        title: "PURE IPA 🧠",
        style: "Non-Alcoholic IPA (ABV 0.5% | IBU 27)",
        desc: "Ти цінуєш ясний розум, продуктивність і смак без компромісів. Вмієш тримати все під контролем і залишатися в тонусі.",
        url: "https://underwood.beer/product/pure-ipa/?utm_source=telegram"
    },
    original_ipa: {
        title: "ORIGINAL IPA 🌲",
        style: "India Pale Ale (ABV 5.0% | IBU 27)",
        desc: "Ти — стильна та перевірена часом натура. Баланс гіркоти та хмелю — це твій підхід до будь-якої справи.",
        url: "https://underwood.beer/product/pyvo-svitle-original-ipa-0-33l-banka-5/?utm_source=telegram"
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
