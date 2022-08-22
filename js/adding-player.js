function addTexttoSidebar(polayerName) {
  const playerNameId = document.getElementById(polayerName);
  const playerNameString = playerNameId.innerText;
  console.log(playerNameString);
  return playerNameString;
}

function createElementWithPlayerName(playerName) {
  let ul = document.getElementById("ul-id");
  const li = document.createElement("li");

  li.appendChild(document.createTextNode(playerName));
  li.className = "li-item";
  ul.appendChild(li);
  let countAllLi = document.querySelectorAll(".li-item").length;

  if (countAllLi > 5) {
    alert("you can not add more than that!");
    ul.removeChild(li);
  }
  console.log(countAllLi);
  console.log(li);
  return li;
}

// function countLiElement(){

// }

// p1
const addBtn1 = document.getElementById("add-btn-1");
let btnDisable = document.querySelector(".btn-dis");

addBtn1.addEventListener("click", function () {
  console.log("add button clicked");
  //text showing

  const palyerName = addTexttoSidebar("player-name-1");
  let newListCreated = createElementWithPlayerName(palyerName);

  let result = btnDisable.classList.contains("disabled");
  if (result) {
    addBtn1.classList.remove("disabled");
  } else {
    addBtn1.classList.add("disabled");
  }
});

//p2
const addBtn2 = document.getElementById("add-btn-2");
let btnDisable2 = document.querySelector(".btn-dis-2");

addBtn2.addEventListener("click", function () {
  console.log("add button clicked");
  //text showing
  const palyerName = addTexttoSidebar("player-name-2");
  let newListCreated = createElementWithPlayerName(palyerName);
  let result = btnDisable2.classList.contains("disabled");
  if (result) {
    btnDisable2.classList.remove("disabled");
  } else {
    btnDisable2.classList.add("disabled");
  }
});

//p3
const addBtn3 = document.getElementById("add-btn-3");
let btnDisable3 = document.querySelector(".btn-dis-3");
addBtn3.addEventListener("click", function () {
  console.log("add button clicked");
  //text showing
  const palyerName = addTexttoSidebar("player-name-3");
  let newListCreated = createElementWithPlayerName(palyerName);
  let result = btnDisable3.classList.contains("disabled");
  if (result) {
    btnDisable3.classList.remove("disabled");
  } else {
    btnDisable3.classList.add("disabled");
  }
});

//p-4
const addBtn4 = document.getElementById("add-btn-4");
let btnDisable4 = document.querySelector(".btn-dis-4");
addBtn4.addEventListener("click", function () {
  console.log("add button clicked");
  //text showing
  const palyerName = addTexttoSidebar("player-name-4");
  let newListCreated = createElementWithPlayerName(palyerName);
  let result = btnDisable4.classList.contains("disabled");
  if (result) {
    btnDisable4.classList.remove("disabled");
  } else {
    btnDisable4.classList.add("disabled");
  }
});

//p-5

let btnDisable5 = document.querySelector(".btn-dis-5");
document.getElementById("add-btn-5").addEventListener("click", function () {
  console.log("add button clicked");
  //text showing
  const palyerName = addTexttoSidebar("player-name-5");
  let newListCreated = createElementWithPlayerName(palyerName);
  let result = btnDisable5.classList.contains("disabled");
  if (result) {
    btnDisable5.classList.remove("disabled");
  } else {
    btnDisable5.classList.add("disabled");
  }
});

//p-6
let btnDisable6 = document.querySelector(".btn-dis-6");
document.getElementById("add-btn-6").addEventListener("click", function () {
  console.log("add button clicked");
  //text showing
  const palyerName = addTexttoSidebar("player-name-6");
  let newListCreated = createElementWithPlayerName(palyerName);
  let result = btnDisable6.classList.contains("disabled");
  if (result) {
    btnDisable6.classList.remove("disabled");
  } else {
    btnDisable6.classList.add("disabled");
  }
});
