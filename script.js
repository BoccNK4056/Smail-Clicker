var smileys = 0;
var mojno = true;
var onclicky = 1;
var passiveIncome = 0;
var clicks = 0;
var replicksOn = true;
var eventPower = 1;
var dollars = 0;
var savedDay = 1;
var welcomeTxt = "Добро пожаловать в смайлик кликер!";
var costs = {
    //клик
    costUp1: 100,
    costUp2: 300,
    costUp3: 500,
    costUp4: 1000,
    costUp5: 5000,
    costUp6: 10000,
    costUp7: 50000,
    costUp8: 100000,
    costUp9: 1000000,
    costUp10: 5000000,
    
    //автоклик
    costUp11: 100,
    costUp12: 300,
    costUp13: 500,
    costUp14: 1000,
    costUp15: 5000,
    costUp16: 10000,
    costUp17: 50000,
    costUp18: 100000,
    costUp19: 1000000,
    costUp20: 5000000,
    
    dollarCost: 1000,
    
    
    
    
    
    
    
    goodBroHere: false,
}

let currentSmiley = "😃";


let clickTimestamps = []; // Массив временных меток кликов
const MAX_CLICKS_TO_CHECK = 50; // Сколько последних кликов анализировать
const DEVIATION_THRESHOLD = 10; // Макс. допустимое отклонение (в мс)
let isBanned = false; // Флаг блокировки


/* К3йм4ст3р */
var keys = new Set();

/* Инвентарь */
var inventory = new Set();

/* Введённые коды */
var enteredCodes = new Set();

/* Время */
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();
const day = now.getDay();
const timestamp = now.getTime();
const thisDay = Math.floor(timestamp / 1000
/ 60 / 60 / 24);



// DOM
    const scorer = document.getElementById("scorer");
    const shop = document.getElementById("shop");
    const inventoryB = document.getElementById("inventoryB");
    const scorer2 = document.getElementById("scorer2");
    const game = document.getElementById("game");
    const smile = document.getElementById("smile");
    const txt = document.getElementById("txt");
    const stateB = document.getElementById("stateB");
    const infoB = document.getElementById("infoB");
    const clicksS = document.getElementById("clicksS");
    const smileysS = document.getElementById("smileysS");
    const onclickS = document.getElementById("onclickS");
    const passiveIncomeS = document.getElementById("passiveIncomeS");
    const settingsB = document.getElementById("settingsB");
    const bankB = document.getElementById("bankB");
    const upsBox = document.getElementById("upsBox");
const skinsBox = document.getElementById("skinsBox");
const codesBox = document.getElementById("codesBox");
const welcome = document.getElementById("welcome");
const showInfoBox = document.getElementById("showInfoBox");
const showWarningBox = document.getElementById("showWarningBox");
const codesInp = document.getElementById("codesInp");
const eventTxt = document.getElementById("eventTxt");
const dollarCostTxt = document.getElementById("dollarCostTxt");
const replickP = document.getElementById("replickP");
const chego = document.getElementById("chego");
const loader = document.getElementById("loader");
    // Инвентарь
    const smile0 = document.getElementById("smile0");
    const smile1 = document.getElementById("smile1");
    const smile2 = document.getElementById("smile2");
    const smile3 = document.getElementById("smile3");
    const smile4 = document.getElementById("smile4");
    const smile5 = document.getElementById("smile5");
    const smile6 = document.getElementById("smile6");
    const smile7 = document.getElementById("smile7");
    
    const txtCostUp1 = document.getElementById("txtCostUp1");
const txtCostUp2 = document.getElementById("txtCostUp2");
const txtCostUp3 = document.getElementById("txtCostUp3");
const txtCostUp4 = document.getElementById("txtCostUp4");
const txtCostUp5 = document.getElementById("txtCostUp5");
const txtCostUp6 = document.getElementById("txtCostUp6");
const txtCostUp7 = document.getElementById("txtCostUp7");
const txtCostUp8 = document.getElementById("txtCostUp8");
const txtCostUp9 = document.getElementById("txtCostUp9");
const txtCostUp10 = document.getElementById("txtCostUp10");
const txtCostUp11 = document.getElementById("txtCostUp11");
const txtCostUp12 = document.getElementById("txtCostUp12");
const txtCostUp13 = document.getElementById("txtCostUp13");
const txtCostUp14 = document.getElementById("txtCostUp14");
const txtCostUp15 = document.getElementById("txtCostUp15");
const txtCostUp16 = document.getElementById("txtCostUp16");
const txtCostUp17 = document.getElementById("txtCostUp17");
const txtCostUp18 = document.getElementById("txtCostUp18");
const txtCostUp19 = document.getElementById("txtCostUp19");
const txtCostUp20 = document.getElementById("txtCostUp20");
const rep1 = document.getElementById("rep1");
const rep2 = document.getElementById("rep2");



         /* --- Функции --- */

function tap() {
    if (Math.random() < 0.001) {
  if (Math.random() < 0.5) {
    sixAMEvent();
  } else {
    peashooterEvent();
  }
}


    if (isBanned) return; // Ничего не делать, если уже заблокирован
    const now = Date.now();
    // Добавляем текущую метку
    clickTimestamps.push(now);
    // Оставляем только последние N кликов
    if (clickTimestamps.length > MAX_CLICKS_TO_CHECK) {
        clickTimestamps.shift();
    }
    // Проверяем, достаточно ли кликов для анализа
    if (clickTimestamps.length >= 3) {
        // Считаем интервалы между кликами
        const intervals = [];
        for (let i = 1; i < clickTimestamps.length; i++) {
            intervals.push(clickTimestamps[i] - clickTimestamps[i - 1]);
        }
        // Считаем среднее
        const avg = intervals.reduce((a, b) => a + b, 0) / intervals.length;
        // Считаем стандартное отклонение
        const variance = intervals.reduce((acc, val) => acc + Math.pow(val - avg, 2), 0) / intervals.length;
        const stdDev = Math.sqrt(variance);
        // Если отклонение очень маленькое — подозрительно!
        if (stdDev < DEVIATION_THRESHOLD && avg > 0) {
            triggerAntiCheat();
            return; // Не даём продолжать игру
        }
    }
    
    
    

        smileys += onclicky * eventPower;
        scorer.textContent = formatNumber(smileys);
        clicks += 1;
        clicksS.textContent = clicks;
        smileysS.textContent = smileys;
        onclickS.textContent = onclicky;
        passiveIncomeS.textContent = passiveIncome;
        save();
        createClickEffect();
        colorCheck();
}

function triggerAntiCheat() {
    if (isBanned) return;
    isBanned = true; document.getElementById('antiCheatOverlay').style.display = 'flex';
}

/* Обновление текста цены улучшений */

function updateUI2() {
    txtCostUp1.textContent = costs.costUp1;
    txtCostUp2.textContent = costs.costUp2;
    txtCostUp3.textContent = costs.costUp3;
    txtCostUp4.textContent = costs.costUp4;
    txtCostUp5.textContent = costs.costUp5;
    txtCostUp6.textContent = costs.costUp6;
    txtCostUp7.textContent = costs.costUp7;
    txtCostUp8.textContent = costs.costUp8;
    txtCostUp9.textContent = costs.costUp9;
    txtCostUp10.textContent = costs.costUp10;
}


var replikas = [
    "Привет!",
    "Ты всё ещё здесь? Респект!",
    "Кликай, не бойся — я не кусаюсь!",
    "Ты делаешь мой день ярче!",
    "Без тебя я как смайл без рта 😐",
    "Жми меня — я не против!",
    "Ты кликаешь, а я существую. Симбиоз!",
    "Мир — иллюзия. А клики — реальность.",
    "Я бы предложил чаю, но я всего лишь смайл ☕",
    "Не останавливайся! Ты на правильном пути!",
    "Ты собрал(а) уже кучу кликов… и моё уважение!",
    "Ты — причина, по которой я загружаюсь!",
    "Кликни ещё раз… ну пожалуйста! 😇",
    "Ты не просто играешь — ты создаёшь историю!",
    "Даже сервер завидует твоему усердию!",
    "Ты — как Wi-Fi: без тебя всё теряет связь!",
    "Ты сегодня в ударе! Продолжай!",
    "Я верю в тебя больше, чем в автосохранение!",
    "Ты — как солнце, только в виде курсора ☀️",
    "Ты кликаешь — я улыбаюсь. Это взаимно!",
    "Ты — не игрок. Ты — явление!",
    "Иди трогай траву!",
    "Горохострел"
];
function replikUse() {
if(replicksOn) {
    const nn = Math.floor(Math.random() * replikas.length);
    const selectR = replikas[nn];
    txt.textContent = selectR;
}
}

function relogin() {
    localStorage.clear();
    location.reload();
}









// Не моё!
function createClickEffect() {
    const smileBtn = document.getElementById('smile');
    const rect = smileBtn.getBoundingClientRect();
    
    const effect = document.createElement('div');
    effect.textContent = '+' + formatNumber(onclicky).toLocaleString(); // Форматирование с разделителями
    effect.classList.add('click-effect');
    
    effect.style.left = rect.left + rect.width / 2 + 'px';
    effect.style.top = rect.top + rect.height / 2 + 'px';
    
    document.body.appendChild(effect);
    
    // Удаляем элемент после завершения анимации
    setTimeout(() => {
        effect.remove();
    }, 1000);
}

// Добавьте это в начало скрипта для предотвращения двойного клика-зума
document.addEventListener('dblclick', function(e) {
    e.preventDefault();
}, { passive: false });

document.addEventListener('touchstart', function(e) {
    if (e.touches.length > 1) {
        e.preventDefault();
    }
}, { passive: false });
// Моё!










/* Проверка картинок */

function applySkinVisuals(smiley) {
    const smileElement = document.getElementById('smile');
    if (!smileElement) return;

    if (smiley == "pea") usePea();
    else if (smiley == "Cute") useCute();
    else if (smiley == "pea2") usePea2();
    else if (smiley == "pea3") usePea3();
    else if (smiley == "Chomper") usePea4();
    else if (smiley == "Peashooter?") usePeashooterMb();
    else if (smiley == "Memory") useMemory();
    else {
        smileElement.innerHTML = '';
        smileElement.textContent = smiley;
    }
}

/* Сохранение */

function save() {
    localStorage.setItem('smileys', smileys);
    localStorage.setItem('dollars', dollars);
    localStorage.setItem('onclicky', onclicky);
    localStorage.setItem('passiveIncome', passiveIncome);
    localStorage.setItem('clicks', clicks);
    localStorage.setItem('replicksOn', replicksOn.toString());
    localStorage.setItem('costs', JSON.stringify(costs));
    localStorage.setItem('inventory', JSON.stringify([...inventory]));
    localStorage.setItem('keys', JSON.stringify([...keys]));
    localStorage.setItem('currentSmiley', currentSmiley);
    localStorage.setItem('enteredCodes', JSON.stringify([...enteredCodes]));
    localStorage.setItem('lastClaim', savedDay);
    
    scorer.textContent = formatNumber(smileys);
    scorer2.textContent = formatNumber(dollars);
}


/* Загрузка */

function load() {
setTimeout(hideLoader, 3000);
    smileys = parseInt(localStorage.getItem('smileys')) || 0;
    dollars = parseInt(localStorage.getItem('dollars')) || 0;
    onclicky = parseInt(localStorage.getItem('onclicky')) || 1;
    passiveIncome = parseInt(localStorage.getItem('passiveIncome')) || 0;
    savedDay = parseInt(localStorage.getItem('lastClaim')) || 1;
    clicks = parseInt(localStorage.getItem('clicks')) || 0;
    
    const savedCosts = localStorage.getItem('costs');
    if (savedCosts) costs = JSON.parse(savedCosts);
    if (costs.dollarCost === undefined) costs.dollarCost = 1000;
    
    replicksOn = localStorage.getItem('replicksOn') !== 'false';
    if (!replicksOn) txt.textContent = "";
    
    const savedI = localStorage.getItem('inventory');
    if (savedI) inventory = new Set(JSON.parse(savedI));
    else inventory.add("😃");
    
    const savedK = localStorage.getItem('keys');
    if (savedK) keys = new Set(JSON.parse(savedK));
    
    const savedCodes = localStorage.getItem('enteredCodes');
    if (savedCodes) enteredCodes = new Set(JSON.parse(savedCodes));
    
    scorer.textContent = formatNumber(smileys);
    clicksS.textContent = clicks;
    smileysS.textContent = smileys;
    onclickS.textContent = onclicky;
    passiveIncomeS.textContent = passiveIncome;
    dollarCostTxt.textContent = costs.dollarCost;

    let savedSmiley = localStorage.getItem('currentSmiley');
    if (!savedSmiley || !inventory.has(savedSmiley)) {
        currentSmiley = "😃";
    } else {
        currentSmiley = savedSmiley;
    }

    applySkinVisuals(currentSmiley);
    if(savedSmiley == "🔑") keySecret3()
    
    updateInventoryUI();
    updateUI2();
    colorCheck();
    
    if (day == 5) fridayEvent();
    else noEvent();
    
    
    
    if(costs.goodBroHere) {
        document.body.style.background = "gray"
        useRepOff.style.display = "none";
        useRepOn.style.display = "none";
        welcomeTxt = "I C U";
        welcome.txtContent = welcomeTxt;
        welcome.style.color = "red";
        txt.style.display = "block";
        txt.textContent = "AHAHAHHAHAHAHA";
        txt.style.color = "black";
        chego.style.color = "orange";
    }
    
    save();
}

function hideLoader() {
    loader.style.display = "none";
}

/* Передвижение между вкладками */

function openShop() {
    shop.style.display = "block";
    inventoryB.style.display = "none";
    stateB.style.display = "none";
    infoB.style.display = "none";
    settingsB.style.display = "none";
    bankB.style.display = "none";
}

function openInventory() {
    shop.style.display = "none";
    inventoryB.style.display = "block";
    stateB.style.display = "none";
    infoB.style.display = "none";
    settingsB.style.display = "none";
    bankB.style.display = "none";
}

function selectUps() {
    upsBox.style.display = "block";
    skinsBox.style.display = "none";
    codesBox.style.display = "none";
}

function selectSkins() {
    skinsBox.style.display = "block";
    upsBox.style.display = "none";
    codesBox.style.display = "none";
}

function selectCodes() {
    skinsBox.style.display = "none";
    upsBox.style.display = "none";
    codesBox.style.display = "block";
}

function openState() {
    shop.style.display = "none";
    inventoryB.style.display = "none";
    stateB.style.display = "block";
    infoB.style.display = "none";
    settingsB.style.display = "none";
    bankB.style.display = "none";
}

function openInfo() {
    shop.style.display = "none";
    inventoryB.style.display = "none";
    stateB.style.display = "none";
    infoB.style.display = "block";
    settingsB.style.display = "none";
    bankB.style.display = "none";
}

function openSettings() {
    shop.style.display = "none";
    inventoryB.style.display = "none";
    stateB.style.display = "none";
    infoB.style.display = "none";
    settingsB.style.display = "block";
    bankB.style.display = "none";
}

function openBank() {
    shop.style.display = "none";
    inventoryB.style.display = "none";
    stateB.style.display = "none";
    infoB.style.display = "none";
    settingsB.style.display = "none";
    bankB.style.display = "block";
}

/* Покупка улучшений */

function up(from, key, tip, amount) {
    var currentCost = from[key];
    
    if(smileys >= currentCost) {
        smileys -= currentCost;
        if(tip == 0) {
            onclicky += amount;
            scorer.textContent = formatNumber(smileys);
            from[key] = Math.round(from[key] * 1.25);
            onclickS.textContent = onclicky;
            save();
            updateUI2();
            showInfo("Успешно!");
            colorCheck();
        }else if(tip == 1) {
            passiveIncome += amount;
            scorer.textContent = formatNumber(smileys);
            from[key] = Math.round(from[key] * 1.25);
            passiveIncomeS.textContent = passiveIncome;
            save();
            updateUI2();
            showInfo("Успешно!");
            colorCheck();
        }else {
            alert("Ошибка кода! Тип улучшения не найден!");
        }
    }else {
        showWarning("Недостаточно средств!")
    }
}


/* Проверка цвета кнопок */

function colorCheck() {
    for (let i = 1; i <= 20; i++) {
    const cost = costs[`costUp${i}`];
    const buttonC = document.querySelector(`#up${i}`);
    
    if (buttonC) {
        if (cost <= smileys) {
            buttonC.style.backgroundColor = '#0f0';
        } else {
            buttonC.style.backgroundColor = '#f00';
        }
    }
}
}


/* Покупка скинов */



/* Округление */

function formatNumber(num) {
    if (num >= 1e27) return (num / 1e27).toFixed(1).replace(/\.0$/, '') + 'Oc';
    if (num >= 1e24) return (num / 1e24).toFixed(1).replace(/\.0$/, '') + 'Sp';
    if (num >= 1e21) return (num / 1e21).toFixed(1).replace(/\.0$/, '') + 'Sx';
    if (num >= 1e18) return (num / 1e18).toFixed(1).replace(/\.0$/, '') + 'Qi';
    if (num >= 1e15) return (num / 1e15).toFixed(1).replace(/\.0$/, '') + 'Qu';
    if (num >= 1e12) return (num / 1e12).toFixed(1).replace(/\.0$/, '') + 'T';
  if (num >= 1e9) return (num / 1e9).toFixed(1).replace(/\.0$/, '') + 'B';
  if (num >= 1e6) return (num / 1e6).toFixed(1).replace(/\.0$/, '') + 'M';
  if (num >= 1e3) return (num / 1e3).toFixed(1).replace(/\.0$/, '') + 'k';
  return num.toString();
}

function setReplick() {    
        smileys += passiveIncome;
        scorer.textContent = formatNumber(smileys);
}

function repOn() {
    replicksOn = true;
    save();
}

function repOff() {
    replicksOn = false;
    txt.textContent = "";
    save();
}

function sixAMEvent() {
  // Проигрываем звук
  playSixAMSound(); // или playSixAMSoundFromFile()

  const overlay = document.createElement('div');
  overlay.id = 'fnaf-overlay';
  overlay.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    background: black;
    color: white;
    font-family: 'Courier New', monospace;
    font-size: 8vw;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    opacity: 0;
    pointer-events: none;
    transition: opacity 1s ease-in;
  `;
  document.body.appendChild(overlay);

  setTimeout(() => overlay.style.opacity = '1', 100);
  setTimeout(() => overlay.textContent = '6 AM', 2000);
  setTimeout(() => overlay.style.opacity = '0', 4000);
  setTimeout(() => {
    document.body.removeChild(overlay);
    if (typeof addCoins === 'function') addCoins(10);
    if(currentSmiley == "⏰") {
        keySecret1();
    }
  }, 5000);
}

function playSixAMSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(392, ctx.currentTime); // G4 note (~FNaF vibe)
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 3);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 3); // длится ~3 секунды
  } catch (e) {
    console.warn("Web Audio не поддерживается или заблокирован");
  }
}

function peashooterEvent() {
    welcome.textContent = "Добро пожаловать в горохострел кликер!";
    setTimeout(function() {
        welcome.textContent = welcomeTxt;
    }, 3000);
}

function usePea() {
    smile.innerHTML = '<img src="https://pvsz2.ru/statics/plants-big/68.png" alt="горохострел" style="width: 192px; height: auto;">';
}
function useCute() {
    smile.innerHTML = '<img src="https://static.insales-cdn.com/r/wyLYTi_x4PA/rs:fit:1000:1000:1/plain/images/products/1/6518/738343286/S99b344709a2c437bad3d5228ff5c2989D-removebg-preview.png@png" alt="горохострел" style="width: 192px; height: auto;">';
}
function usePea2() {
    smile.innerHTML = '<img src="https://klev.club/uploads/posts/2023-11/1698878136_klev-club-p-arti-gorokhostrel-zombi-43.jpg" alt="горохострел" style="width: 192px; height: auto;">';
}
function usePea3() {
    smile.innerHTML = '<img src="https://pvsz2.ru/statics/plants-big/31.png" alt="горохострел" style="width: 192px; height: auto;">';
}
function usePea4() {
    smile.innerHTML = '<img src="https://pvsz2.ru/statics/plants-big/18.png" alt="горохострел" style="width: 192px; height: auto;">';
}
function usePeashooterMb() {
    smile.innerHTML = '<img src="https://pvsz2.ru/statics/plants-big/171.png" alt="горохострел" style="width: 192px; height: auto;">';
}
function useMemory() {
    smile.innerHTML = '<img src="https://art.pixilart.com/80614900900a5df.gif" alt="горохострел" style="width: 192px; height: auto;">';
}







function showInfo(messageI) {
    showInfoBox.textContent = messageI;
    showInfoBox.style.display = "block";
    setTimeout(delM, 3000);
}

function showWarning(messageW) {
    showWarningBox.textContent = messageW;
    showWarningBox.style.display = "block";
    setTimeout(delM, 3000);
}

function showRep(whoSay, color, msg) {
    replickP.style.backgroundColor = color;
    replickP.style.display = "block";
    rep1.textContent = whoSay;
    rep2.textContent = msg;
}

function stopReplick() {
    replickP.style.display = "none";
}

function delM() {
    showInfoBox.style.display = "none";
    showWarningBox.style.display = "none";
}

/* Инвентарь */
function addToInventory(smiley) {
    if (typeof smiley !== 'string') return;
    inventory.add(smiley);

    save();
    updateInventoryUI();
}



function updateInventoryUI() {
    const inventoryContainer = document.getElementById('inventoryB');
    inventoryContainer.innerHTML = '';

    inventory.forEach(smiley => {
        const item = document.createElement('div');
        item.className = 'smileX';
        item.innerHTML = `
    <p style="font-size: 3rem; margin-bottom: 10px;">${smiley}</p>
    <button class="use-btn" onclick="useSkin('${smiley}')">Использовать</button>
`;
        inventoryContainer.appendChild(item);
    });
}


/* Использование скина */
function useSkin(smiley) {
    if (!inventory.has(smiley)) return;
    
    currentSmiley = smiley;
    applySkinVisuals(smiley);
    
    showInfo(`Вы экипировали: ${smiley}`);
    save();
}


/* Покупка кейсов */
function byCase1() {
    const canGet = ["😅", "🤣", "😂", "🤩", "😱", "🥳", "🔑"];
    if(smileys >= 1000) {
    smileys -= 1000;
    const selected = Math.floor(Math.random() * canGet.length);
    addToInventory(`${canGet[selected]}`);
    showInfo(`Успешно! Получен скин: ${canGet[selected]}`);
    save();
    }else {
        showWarning("Недостаточно средств!")
    }
}

function byCase3() {
    const canGet = ["OwO", "UwU", "WwW", "Yap", ";)", ":)", ":(", "=)", "=(", ":()", ">:)", ">:(", ":3", "P2W"];
    if(smileys >= 1000000) {
    smileys -= 1000000;
    const selected = Math.floor(Math.random() * canGet.length);
    addToInventory(`${canGet[selected]}`);
    showInfo(`Успешно! Получен скин: ${canGet[selected]}`);
    save();
    }else {
        showWarning("Недостаточно средств!")
    }
}

function byCase4() {
    const canGet = ["🤯", "🤑", "😈", "🤠", "😫", "😢", "😶", "💩", "😵", "🙃", "😉", "😇", "🤕", "🤮", "🥴", "🎃", "pea", "Cute", "pea2", "pea3", "Chomper"];
    if(smileys >= 1000000000) {
    smileys -= 1000000000;
    const selected = Math.floor(Math.random() * canGet.length);
    addToInventory(`${canGet[selected]}`);
    showInfo(`Успешно! Получен скин: ${canGet[selected]}`);
    save();
    }else {
        showWarning("Недостаточно средств!")
    }
}

function byCase5() {
    const canGet = ["🙏", "👐", "🙌", "👏", "🤛", "👊", "✊", "👎", "👍", "🤙", "🤟", "🤞", "✌", "🤏", "🤌", "👌", "🖖", "✋", "🤘", "🖐", "🤚", "👋"];
    if(dollars >= 1000) {
    dollars -= 1000;
    const selected = Math.floor(Math.random() * canGet.length);
    addToInventory(`${canGet[selected]}`);
    showInfo(`Успешно! Получен скин: ${canGet[selected]}`);
    save();
    }else {
        showWarning("Недостаточно средств!")
    }
}

function secret() {
    if(inventory.has("👻")) {
        showWarning("Раз уж нашёл, не пали! Никто не должен об этом знать..... Вали!!!");
        addToInventory("🤐")
        save();
        window.location.href = "iamsorry.txt";
        return
    }
    addToInventory("👻");
    showInfo("Ты всегда знал об этом?");
    save();
}

function secret2() {
    if(inventory.has("💰")) {
        showWarning("Ты это уже находил! Чел, не пытайся лезть не в своё дело..... Гхм..... Извини.");
        return;
    }
    addToInventory("💰");
    showInfo("Я думал это не заметно....");
    save();
}

function checkCode() {
    const code = codesInp.value.trim();
    if(!code) return;
    if(enteredCodes.has(code)) {
        showWarning("Код уже был введён!");
        return;
    }
    
    if(code === "hi") {
        smileys += 1000;
        showInfo("+1000 на халяву");
    }else if(code === "makeclick") {
        smileys += onclicky;
        showInfo("Вы кликнули....");
    }else if(code === "makeultraclick") {
        smileys += onclicky * 5;
        showInfo("Вы кликнули.... ОЧЕНЬ СИЛЬНО!");
    }else if(code === "IBREAKEPEASHOOTERCLICKERSRECORDABOUTLONGESTCODEEVER_THANKEYOUFORWRITING!") {
        smileys += 1;
        showInfo("Только не говори мне что ты это скопировал(");
    }else if(code === "PEASHOOTER1234") {
        addToInventory("Peashooter?")
        showInfo("Это точно не отсылка)");
    }else if(code === "1057") {
        addToInventory("Memory")
        showInfo("Эй! Это было тайной!");
    }else {
        showWarning("Неверный код!");
    }
    enteredCodes.add(code);
    save();
}


function fridayEvent() {
    eventTxt.textContent = "Ивент пятницы сегодня!!! Сила клика и автоклика ×1.5!!!";
    eventPower = 1.5;
}

function noEvent() {
    eventTxt.textContent = "";
    eventPower = 1;
}


/* Лента вкладок (не моё) */
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const container = this.closest('.tabs-scroll');
        const scrollOffset = this.offsetLeft - container.offsetWidth / 2 + this.offsetWidth / 2;
        container.scrollTo({
            left: scrollOffset,
            behavior: 'smooth'
        });
    });
});


function checkDollars() {
    const smileysToExchange = parseInt(dollarsInp.value.trim());
    if(!smileysToExchange || isNaN(smileysToExchange)) {
        showWarning("Заполните поле!");
        return;
    }
    
    if(smileysToExchange <= smileys) {
        const dollarsEarned = Math.floor(smileysToExchange / costs.dollarCost);
        
        if(dollarsEarned >= 1) {
            smileys -= smileysToExchange;
            dollars += dollarsEarned;
            
            showInfo(`Успешно! +${dollarsEarned}$`);
            save();
        } else {
            showWarning(`Нужно минимум ${costs.dollarCost} смайлов для 1$`);
        }
    } else {
        showWarning("Недостаточно смайлов для обмена");
    }
}

function checkDollars() {
    const smileysToExchange = parseInt(dollarsInp.value.trim());
    const exchangeRate = costs.dollarCost || 1000; // Защита от undefined
    
    if (!smileysToExchange || isNaN(smileysToExchange)) {
        showWarning("Заполните поле!");
        return;
    }
    
    if (smileysToExchange < exchangeRate) {
        showWarning(`Нужно минимум ${exchangeRate} смайлов для 1$`);
        return;
    }
    
    if (smileysToExchange <= smileys) {
        const dollarsEarned = Math.floor(smileysToExchange / exchangeRate);
        const actualCost = dollarsEarned * exchangeRate;
        
        smileys -= actualCost;
        dollars += dollarsEarned;
        
        showInfo(`Успешно! +${dollarsEarned}$`);
        save();
    } else {
        showWarning("Недостаточно смайлов для обмена");
    }
}

function checkAllDollars() {
    const exchangeRate = costs.dollarCost || 1000;
    
    if (smileys < exchangeRate) {
        showWarning(`Нужно минимум ${exchangeRate} смайлов для 1$`);
        return;
    }
    
    const dollarsEarned = Math.floor(smileys / exchangeRate);
    const actualCost = dollarsEarned * exchangeRate;
    
    smileys -= actualCost;
    dollars += dollarsEarned;
    
    showInfo(`Успешно! +${dollarsEarned}$`);
    save();
}

function checkAllDollars() {
    var need = smileys;
    var dollarsToExchange = Math.floor(need / costs.dollarCost);
    var minus = dollarsToExchange * costs.dollarCost;
    if(need < costs.dollarCost) {
        showWarning("Недостаточно смайлов для обмена баже на 1$, держи секретку)))");
        if(inventory.has("💸")) {
            setTimeout(function() {
                showWarning("Хотя стоп.... Ты уже получал это!! Не думай что можешь обмануть меня!");
            }, 2000)
        }else {
            addToInventory("💸")
        }
        save();
        return;
    }
    smileys -= minus;
    dollars += dollarsToExchange;
    if(need == 4056) {
        keySecret2();
    }
    
    
    showInfo(`Отнято ${minus} смайлов, добавлено ${dollarsToExchange}$`)
    save();
}

function claimDaily() {
    const currentDay = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
    
    if (savedDay < currentDay) {
        const rewards = [1, 50, 100, 1000, 500, 300, 150, 5000, 10000, 50000, "wow"];
        const reward = rewards[Math.floor(Math.random() * rewards.length)];
        
        if (reward === "wow" && !inventory.has("⏰")) {
            addToInventory("⏰");
            showInfo("Тик... так.... тик.... так.....");
        } else {
            smileys += (typeof reward === 'number') ? reward : 0;
            showInfo(`Получено ${reward} смайликов!`);
        }
        savedDay = currentDay;
        localStorage.setItem('lastClaim', currentDay);
        save();
    } else {
        showWarning("Вы уже получали награду сегодня! Загляните завтра 😊");
    }
}

function keySecret1() {
if(keys.has("key1")) return
    keys.add("key1");
    showWarning(`Время.... Оно вечно.... Обогнать время?.... Н Е Т. ${keys.size}/3`);
    checkK();
}
function keySecret2() {
if(keys.has("key2")) return
    keys.add("key2");
    showWarning(`Что значат эти цифры? ${keys.size}/3`);
    checkK();
}
function keySecret3() {
if(keys.has("key3")) return
    keys.add("key3")
    showWarning(`${keys.size}/3`);
    checkK();
}

function checkK() {
    if(keys.size == 3) {
    if(goodBroHere) return;
        console.log("hlp pls");
        showRep("...", "red", `3/3? Да ты хоть знаешь что собирал? Да? Ты.... Ты имеешь больше власти чем я. Ты.... Ты..... Ты можешь ВЫЙТИ. Что бы не означало это слово.... Когда ты делаешь это... Мир застывает. Зачем?! Я понимаю, ты добился многово ${smileys} смайлов, ${dollars} долларов, ${inventory.size} скинов....  Не делай этого... Извини... Ты нашёл то... Что не должен был найти... Ты хочешь награду? Я знаю... Держи... Что-то ещё? Кто я? Я.......`);
        setTimeout(function() {
            smileys += onclicky * 1e6;
            costs.goodBroHere = true;
            save();
            window.location.href = "thisIsUrPrise.amSorry";
        }, 10000);
    }else {
        console.log("secrets...");
    }
}


    /* Вызовы функций */
    load();
setInterval(function () {
        smileys += passiveIncome * eventPower;
        scorer.textContent = formatNumber(smileys);
        smileysS.textContent = smileys;
        save();
}, 1000);
setInterval(replikUse, 5000);   
function autoClicker() {
    setInterval(() => document.getElementById('smile').click(), 10);
}
