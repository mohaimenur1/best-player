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
  console.log(typeof countAllLi);
  console.log(li);
  return ul;
}

//per player function

function inputValueById(inputId) {
  const inputValue = document.getElementById(inputId);
  let inputValueString = inputValue.value;
  let inputValueNumber = parseInt(inputValueString);
  inputValue.value = inputValueNumber;
  // if (inputValueString === "") {
  //   return alert("Please provide only number");
  // } else {
  return inputValueNumber;
  // }
}

function totalExpenseValue(totalExpenseId) {
  const totalExpenseValue = document.getElementById(totalExpenseId);
  let totalExpenseValueString = totalExpenseValue.innerText;
  let totalExpenseValueNumber = parseInt(totalExpenseValueString);
  totalExpenseValue.innerText = totalExpenseValueNumber;

  return totalExpenseValueNumber;
}

function setTheNewTotal(totalExpense, newTotal) {
  let previousTotalExpense = document.getElementById(totalExpense);
  let previousTotalExpenseString = previousTotalExpense.innerText;
  let newPreviousTotalExpense = parseInt(previousTotalExpenseString);
  previousTotalExpense.innerText = newTotal;
  return newPreviousTotalExpense;
}
