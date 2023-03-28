let windowHeight = 0;
let windowWidth = 0;
let lifes = 1;
let time = 10;

let createAlienTime = 1500;

let level = window.location.search;
level = level.replace("?", "");

if (level === "facil") {
  createAlienTime;
} else if (level === "medio") {
  createAlienTime = 1000;
} else if (level === "dificil") {
  createAlienTime = 750;
}

const adjustGameStageSize = () => {
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;

  console.log(windowHeight, windowWidth);
};

adjustGameStageSize();

const randomSize = () => {
  let className = Math.floor(Math.random() * 3);

  switch (className) {
    case 0:
      return "alien1";
    case 1:
      return "alien2";
    case 2:
      return "alien3";
  }
};

const randomPosition = () => {
  if (document.getElementById("alien")) {
    document.getElementById("alien").remove();

    if (lifes > 3) {
      window.location.href = "end_of_the_game.html";
    } else {
      document.getElementById("l" + lifes).src = "imgs/coracao_vazio.png";
      lifes++;
    }
  }

  let positionX = Math.floor(Math.random() * windowWidth) - 90;
  let positionY = Math.floor(Math.random() * windowHeight) - 90;

  positionX = positionX < 0 ? 0 : positionX;
  positionY = positionY < 0 ? 0 : positionY;

  console.log(positionX, positionY);

  let alien = document.createElement("img");
  alien.src = "imgs/Alien.png";
  alien.className = randomSize();
  alien.style.left = positionX + "px";
  alien.style.top = positionY + "px";
  alien.style.position = "absolute";
  alien.id = "alien";
  alien.onclick = function () {
    this.remove();
  };

  document.body.appendChild(alien);
};
let createAlien = setInterval(() => {
  randomPosition();
}, createAlienTime);

document.getElementById("stopwatch").innerHTML = time;

let stopWatch = setInterval(function () {
  time -= 1;
  if (time <= 0) {
    clearInterval(stopWatch);
    clearInterval(createAlien);
    window.location.href = "victory.html";
  }
  document.getElementById("stopwatch").innerHTML = time;
}, 1000);