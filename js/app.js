const spaiderman = document.querySelector("#spaiderman");
let containerMessages = document.querySelector("#container_messages");
const phone_visible = document.querySelector("#phone_visible");
const phone = document.querySelector("#phone");
const questName = document.querySelector("#quest_name");
let time = 0;

const spaiderManVisible = () => {
  setTimeout(() => {
    phone_visible.style.display = "none";
  }, 300);
  spaiderman.style.display = "block";
  spaiderman.classList.add("img_spaiderman_visible");
  setTimeout(() => {
    indexSP = 0;
    indexYou = 0;
    questName.innerHTML += " - Выполнено! </br></br> Поговорить с человеком пауком";
    textSpaidermanPhone = [
      "Привет!",
      "А ты часто встречаешь людей летающих на путине по городу?",
      "Знаешь, у каждого свой талант! Я здесь, чтобы пригласить тебя в школу супер героев!",
      "Это скорее тайные знания! Ты можешь научиться программировать как супер герой!",
      "Ты сможешь сделать любой сайт и даже игры с простой механникой",
      "Отлично! Тогда напиши нашему главному профессору дяде Илюше. И сообщи ему, что ты готов записать в школу супер-героев!",
    ];
    textYouPhone = [
      ["Ого! А ты настоящий человек-паук?"],
      ["А ты научишь меня стрелять паутиной?", "А пошли вместе мир спасать! Я сейчас только у мамы с папой отпрашусь..."],
      ["Круто! Это какое-то тайное место?"],
      ["А чему там учат?", "А я смогу делать игры?"],
      ["Всё! Я готов! Как попасть в школу?"],
    ];
  }, 1000);
  time = 0;
};

// let scrollAmount = 0;
// const scrollSpeed = 1;

let indexSP = 0;
let indexYou = 0;

let textSpaidermanPhone = ["Эй, привет! Ты здесь, Слава?", "Это я - твой друг", "Нет, я человек-паук!", "Хм..."];

let textYouPhone = [
  ["Привет, да, я здесь", "Привет, а ты кто?", "Откуда ты знаешь как меня зовут?"],
  ["Дядя Илюша?", "Матвей?", "Зевс?", "Венс?"],
  ["Я тебе не верю!", "Ну-ка покажись!", "Ну-ну, конечно-конечно"],
];

// const textAdd = () => {
//   const newMessage = document.createElement("span");
//   newMessage.classList.add("new_message");
//   newMessage.textContent = "Пообщаться ещё с человеком-пауком";
//   containerMessages.append(newMessage);
// };

const openPhone = () => {
  phone.style.display = "none";
  phone_visible.style.display = "block";
  // animationWrite();
};

phone.onclick = () => {
  openPhone();
};

const createMessageSpaiderman = () => {
  if (indexSP >= textSpaidermanPhone.length) {
    return;
  } else {
    console.log("createMessageSpaiderman", indexSP, indexYou);
    const msgContainer = document.createElement("div");
    const msg = document.createElement("span");
    msg.textContent = textSpaidermanPhone[indexSP];
    msg.classList.add("msg_heroe");
    msgContainer.classList.add("msg_heroe_container");
    msgContainer.append(msg);
    containerMessages.append(msgContainer);
    createMessageYou();
    if (indexSP === 5) {
      questName.innerHTML += " - Выполнено! </br></br> Написать или позвонить дяде Илюше";
    }
    indexSP++;
  }
};

const animationWrite = () => {
  let writeTime = 0;
  const animContainer = document.createElement("div");
  animContainer.classList.add("anim_container");
  const w1 = setInterval(() => {
    if (writeTime > 0) {
      animContainer.remove();
      createMessageSpaiderman(containerMessages);
      return clearInterval(w1);
    }
    animContainer.textContent = "Неизвестный пишет сообщение " + ".";
    setTimeout(() => {
      animContainer.textContent = "Неизвестный пишет сообщение " + "..";
      setTimeout(() => {
        animContainer.textContent = "Неизвестный пишет сообщение " + "...";
        setTimeout(() => {
          animContainer.textContent = "Неизвестный пишет сообщение " + ".";
          setTimeout(() => {
            animContainer.textContent = "Неизвестный пишет сообщение " + "..";
            setTimeout(() => {
              animContainer.textContent = "Неизвестный пишет сообщение " + "...";
            }, 300);
          }, 300);
        }, 300);
      }, 300);
    }, 300);
    writeTime++;
  }, time);
  containerMessages.append(animContainer);
};

const createMessageYou = () => {
  const msgContainer = document.createElement("div");
  msgContainer.id = "msgContainer";
  if (indexYou === textYouPhone.length && indexSP !== 5) {
    spaiderManVisible();
    // setTimeout(() => {
    //   textAdd();
    // }, time);
  }
  if (indexYou >= textYouPhone.length) return;
  textYouPhone[indexYou].map((m) => {
    const msg = document.createElement("span");
    msg.textContent = m;
    msg.classList.add("msg_select");
    msg.onclick = () => {
      indexYou++;
      createMessageAnswerYou(m);
      animationWrite();
      msgContainer.remove();
    };
    msgContainer.append(msg);
  });
  msgContainer.classList.add("msg_you_select");
  containerMessages.append(msgContainer);
};

const createMessageAnswerYou = (message) => {
  const msgContainer = document.createElement("div");
  const msg = document.createElement("span");
  msg.textContent = message;
  msg.classList.add("msg_you");
  msgContainer.classList.add("msg_you_container");
  msgContainer.append(msg);
  containerMessages.append(msgContainer);
};

spaiderman.onclick = () => {
  containerMessages = document.querySelector("#dialog_container");
  createMessageSpaiderman();
  containerMessages.style.display = "block";
};

window.onload = () => {
  animationWrite();
  time = 1800;
  // spaiderManVisible();
};
