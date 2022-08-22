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
document.getElementById("add-btn-1").addEventListener("click", function () {
  console.log("add button clicked");
  //text showing

  const palyerName = addTexttoSidebar("player-name-1");
  let newListCreated = createElementWithPlayerName(palyerName);
  // if (document.getElementById("add-btn-1"))
});

//p2
document.getElementById("add-btn-2").addEventListener("click", function () {
  console.log("add button clicked");
  //text showing
  const palyerName = addTexttoSidebar("player-name-2");
  let newListCreated = createElementWithPlayerName(palyerName);
});

//p3
document.getElementById("add-btn-3").addEventListener("click", function () {
  console.log("add button clicked");
  //text showing
  const palyerName = addTexttoSidebar("player-name-3");
  let newListCreated = createElementWithPlayerName(palyerName);
});

//p-4
document.getElementById("add-btn-4").addEventListener("click", function () {
  console.log("add button clicked");
  //text showing
  const palyerName = addTexttoSidebar("player-name-4");
  let newListCreated = createElementWithPlayerName(palyerName);
});

//p-5
document.getElementById("add-btn-5").addEventListener("click", function () {
  console.log("add button clicked");
  //text showing
  const palyerName = addTexttoSidebar("player-name-5");
  let newListCreated = createElementWithPlayerName(palyerName);
});

//p-6
document.getElementById("add-btn-6").addEventListener("click", function () {
  console.log("add button clicked");
  //text showing
  const palyerName = addTexttoSidebar("player-name-6");
  let newListCreated = createElementWithPlayerName(palyerName);
});
