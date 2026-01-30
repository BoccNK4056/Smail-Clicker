var smileys = 0;
var mojno = true;
var onclicky = 1;
var passiveIncome = 0;
var logined = false;
var playerName = "player###";
var costUp1 = 100;
var costUp2 = 300;
var clicks = 0;
var replicksOn = true;
var costUp3 = 500;
var costUp4 = 1000;
var costUp5 = 5000;



let clickTimestamps = []; // Массив временных меток кликов
const MAX_CLICKS_TO_CHECK = 50; // Сколько последних кликов анализировать
const DEVIATION_THRESHOLD = 10; // Макс. допустимое отклонение (в мс)
let isBanned = false; // Флаг блокировки



var skins = ["😃", "😅", "🤣", "😂", "🤬", "🤩", "😱", "🥳"];

var have = {
    s0: true,
    s1: false,
    s2: false,
    s3: false,
    s4: false,
    s5: false,
    s6: false,
    s7: false
}


// DOM
    const scorer = document.getElementById("scorer");
    const shop = document.getElementById("shop");
    const inventory = document.getElementById("inventory");
    const loginInp = document.getElementById("loginInp");
    const login = document.getElementById("login");
    const game = document.getElementById("game");
    const welcomeName = document.getElementById("welcomeName");
    const txtCostUp1 = document.getElementById("txtCostUp1");
    const txtCostUp2 = document.getElementById("txtCostUp2");
    const smile = document.getElementById("smile");
    const txt = document.getElementById("txt");
    const stateB = document.getElementById("stateB");
    const infoB = document.getElementById("infoB");
    const clicksS = document.getElementById("clicksS");
    const smileysS = document.getElementById("smileysS");
    const onclickS = document.getElementById("onclickS");
    const passiveIncomeS = document.getElementById("passiveIncomeS");
    const settingsB = document.getElementById("settingsB");
    const upsBox = document.getElementById("upsBox");
const skinsBox = document.getElementById("skinsBox");
    // Инвентарь
    const smile0 = document.getElementById("smile0");
    const smile1 = document.getElementById("smile1");
    const smile2 = document.getElementById("smile2");
    const smile3 = document.getElementById("smile3");
    const smile4 = document.getElementById("smile4");
    const smile5 = document.getElementById("smile5");
    const smile6 = document.getElementById("smile6");
    const smile7 = document.getElementById("smile7");
    // Магазин скинов
    const shopS1 = document.getElementById("shopS1");
    const shopS2 = document.getElementById("shopS2");
    const shopS3 = document.getElementById("shopS3");
    const shopS4 = document.getElementById("shopS4");
    const shopS5 = document.getElementById("shopS5");
    const shopS6 = document.getElementById("shopS6");
    const shopS7 = document.getElementById("shopS7");
    



         /* --- Функции --- */

function tap() {




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
    
    
    

        smileys += onclicky;
        scorer.textContent = formatNumber(smileys);
        clicks += 1;
        clicksS.textContent = clicks;
        smileysS.textContent = smileys;
        onclickS.textContent = onclicky;
        passiveIncomeS.textContent = passiveIncome;
        save();
        createClickEffect();
}

function triggerAntiCheat() {
    if (isBanned) return;
    isBanned = true; document.getElementById('antiCheatOverlay').style.display = 'flex';
}

function readyLogin() {
    playerName = loginInp.value.trim();
    if (!playerName) return;
    if (playerName === "BoccNK4056" || playerName === "BoccNK" || playerName === "BoccNK40567890") {
        alert("Нельзя!!!!!!!!!!!!!! Моё!!!!!!!!!!!");
        loginInp.value = "";
        return;
    }

    game.style.display = "block";
    login.style.display = "none";
    loginInp.value = "";

    localStorage.setItem('playerName', playerName);
    localStorage.setItem('logined', 'true');
    welcomeName.textContent = playerName;
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
    `Привет, ${playerName}!`
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
    game.style.display = "none";
    login.style.display = "block";
    return;
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





/* Сохранение */

function save() {
    localStorage.setItem('smileys', smileys);
    localStorage.setItem('costUp1', costUp1);
    localStorage.setItem('costUp2', costUp2);
    localStorage.setItem('onclicky', onclicky);
    localStorage.setItem('passiveIncome', passiveIncome);
    localStorage.setItem('have', JSON.stringify(have));
    localStorage.setItem('clicks', clicks);
    localStorage.setItem('replicksOn', replicksOn.toString());
    localStorage.setItem('costUp3', costUp3);
    localStorage.setItem('costUp4', costUp4);
    localStorage.setItem('costUp5', costUp5);
    
}


/* Загрузка */

function load() {
    smileys = parseInt(localStorage.getItem('smileys')) || 0;
    costUp1 = parseInt(localStorage.getItem('costUp1')) || 100;
    costUp2 = parseInt(localStorage.getItem('costUp2')) || 300;
    onclicky = parseInt(localStorage.getItem('onclicky')) || 1;
    passiveIncome = parseInt(localStorage.getItem('passiveIncome')) || 0;
    costUp3 = parseInt(localStorage.getItem('costUp3')) || 500;
    costUp4 = parseInt(localStorage.getItem('costUp4')) || 1000;
    costUp5 = parseInt(localStorage.getItem('costUp5')) || 5000;
    clicks = parseInt(localStorage.getItem('clicks')) || 0;
    const savedH = localStorage.getItem('have');
    if(savedH) {
        have = JSON.parse(savedH);
    }
    scorer.textContent = formatNumber(smileys);
    txtCostUp1.textContent = costUp1;
    txtCostUp2.textContent = costUp2;
    txtCostUp3.textContent = costUp3;
    txtCostUp4.textContent = costUp4;
    txtCostUp5.textContent = costUp5;
    clicksS.textContent = clicks;
    smileysS.textContent = smileys;
    onclickS.textContent = onclicky;
    passiveIncomeS.textContent = passiveIncome;

    const savedLogined = localStorage.getItem('logined');
    logined = (savedLogined === 'true');

    playerName = localStorage.getItem('playerName') || "";
    
    const savedReplicksOn = localStorage.getItem('replicksOn');
    replicksOn = localStorage.getItem('replicksOn') !== 'false';
    
    if(replicksOn == false) {
        txt.textContent = "";
    }else {
        console.log("Done")
    }

    if (logined) {
        game.style.display = "block";
        login.style.display = "none";
        welcomeName.textContent = playerName;
    }
    
    
    
    /* Проверка инвентаря */
    if(have.s0) {
        smile0.style.display = "block";
    }
    if(have.s1) {
        smile1.style.display = "block";
        shopS1.style.display = "none";
    }
    if(have.s2) {
        smile2.style.display = "block";
        shopS2.style.display = "none";
    }
    if(have.s3) {
        smile3.style.display = "block";
        shopS3.style.display = "none";
    }
    if(have.s4) {
        smile4.style.display = "block";
        shopS4.style.display = "none";
    }
    if(have.s5) {
        smile5.style.display = "block";
        shopS5.style.display = "none";
    }
    if(have.s6) {
        smile6.style.display = "block";
        shopS6.style.display = "none";
    }
    if(have.s7) {
        smile7.style.display = "block";
        shopS7.style.display = "none";
    }
}

/* Передвижение между вкладками */

function openShop() {
    shop.style.display = "block";
    inventory.style.display = "none";
    stateB.style.display = "none";
    infoB.style.display = "none";
    settingsB.style.display = "none";
}

function openInventory() {
    shop.style.display = "none";
    inventory.style.display = "block";
    stateB.style.display = "none";
    infoB.style.display = "none";
    settingsB.style.display = "none";
    
}

function selectUps() {
    upsBox.style.display = "block";
    skinsBox.style.display = "none";
}

function selectSkins() {
    skinsBox.style.display = "block";
    upsBox.style.display = "none";
}

function openState() {
    shop.style.display = "none";
    inventory.style.display = "none";
    stateB.style.display = "block";
    infoB.style.display = "none";
    settingsB.style.display = "none";
}

function openInfo() {
    shop.style.display = "none";
    inventory.style.display = "none";
    stateB.style.display = "none";
    infoB.style.display = "block";
    settingsB.style.display = "none";
}

function openSettings() {
    shop.style.display = "none";
    inventory.style.display = "none";
    stateB.style.display = "none";
    infoB.style.display = "none";
    settingsB.style.display = "block";
}

/* Покупка улучшений */

function byUp1() {
   if(costUp1 <= smileys) {
       smileys -= costUp1;
       scorer.textContent = formatNumber(smileys);
       onclicky += 1;
       costUp1 = Math.round(costUp1 * 1.25);
       onclickS.textContent = onclicky;
       save();
       txtCostUp1.textContent = costUp1;
   } else {
       alert("Недостаточно средств!");
   }
}

function byUp2() {
    if(costUp2 <= smileys) {
       smileys -= costUp2;
       scorer.textContent = formatNumber(smileys);
       passiveIncome += 1;
       costUp2 = Math.round(costUp2 * 1.25);
       passiveIncomeS.textContent = passiveIncome;
       save();
       txtCostUp2.textContent = costUp2;
    }else {
        alert("Недостаточно средств!");
    }
}

function byUp3() {
    if(costUp3 <= smileys) {
       smileys -= costUp3;
       scorer.textContent = formatNumber(smileys);
       onclicky += 3;
       costUp3 = Math.round(costUp3 * 1.25);
       onclickS.textContent = onclicky;
       save();
       txtCostUp3.textContent = costUp3;
    }else {
        alert("Недостаточно средств!");
    }
}

function byUp4() {
    if(costUp4 <= smileys) {
       smileys -= costUp4;
       scorer.textContent = formatNumber(smileys);
       onclicky += 5;
       costUp4 = Math.round(costUp4 * 1.25);
       onclickS.textContent = onclicky;
       save();
       txtCostUp4.textContent = costUp4;
    }else {
        alert("Недостаточно средств!");
    }
}

function byUp5() {
    if(costUp5 <= smileys) {
       smileys -= costUp5;
       scorer.textContent = formatNumber(smileys);
       onclicky += 10;
       costUp5 = Math.round(costUp5 * 1.25);
       onclickS.textContent = onclicky;
       save();
       txtCostUp5.textContent = costUp5;
    }else {
        alert("Недостаточно средств!");
    }
}

/* Покупка скинов */

function byS1() {
    if(smileys >= 100) {
        smileys -= 100;
        have.s1 = true;
        smile1.style.display = "block";
        shopS1.style.display = "none";
        save();
    }else {
        alert("Недостаточно средств!");
    }
}
function byS2() {
    if(smileys >= 100) {
        smileys -= 100;
        have.s2 = true;
        smile2.style.display = "block";
        shopS2.style.display = "none";
        save();
    }else {
        alert("Недостаточно средств!");
    }
}
function byS3() {
    if(smileys >= 100) {
        smileys -= 100;
        have.s3 = true;
        smile3.style.display = "block";
        shopS3.style.display = "none";
        save();
    }else {
        alert("Недостаточно средств!");
    }
}
function byS4() {
    if(smileys >= 100) {
        smileys -= 100;
        have.s4 = true;
        smile4.style.display = "block";
        shopS4.style.display = "none";
        save();
    }else {
        alert("Недостаточно средств!");
    }
}
function byS5() {
    if(smileys >= 100) {
        smileys -= 100;
        have.s5 = true;
        smile5.style.display = "block";
        shopS5.style.display = "none";
        save();
    }else {
        alert("Недостаточно средств!");
    }
}
function byS6() {
    if(smileys >= 100) {
        smileys -= 100;
        have.s6 = true;
        smile6.style.display = "block";
        shopS6.style.display = "none";
        save();
    }else {
        alert("Недостаточно средств!");
    }
}
function byS7() {
    if(smileys >= 100) {
        smileys -= 100;
        have.s7 = true;
        smile7.style.display = "block";
        shopS7.style.display = "none";
        save();
    }else {
        alert("Недостаточно средств!");
    }
}

/* Округление */

function formatNumber(num) {
    if (num >= 1e27) return (num / 1e9).toFixed(1).replace(/\.0$/, '') + 'Oc';
    if (num >= 1e24) return (num / 1e9).toFixed(1).replace(/\.0$/, '') + 'Sp';
    if (num >= 1e21) return (num / 1e9).toFixed(1).replace(/\.0$/, '') + 'Sx';
    if (num >= 1e18) return (num / 1e9).toFixed(1).replace(/\.0$/, '') + 'Qi';
    if (num >= 1e15) return (num / 1e9).toFixed(1).replace(/\.0$/, '') + 'Qu';
    if (num >= 1e12) return (num / 1e9).toFixed(1).replace(/\.0$/, '') + 'T';
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


    /* Вызовы функций */
    load();
setInterval(function () {
        smileys += passiveIncome;
        scorer.textContent = formatNumber(smileys);
        smileysS.textContent = smileys;
        save();
}, 1000);
setInterval(replikUse, 5000);   
function autoClicker() {
    setInterval(() => document.getElementById('smile').click(), 10);
      }
