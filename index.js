// check winner

let posnOne = document.querySelector("#one");
let posnTwo = document.querySelector("#two");
let posnThree = document.querySelector("#three");
let posnFour = document.querySelector("#four");
let posnFive = document.querySelector("#five");
let posnSix = document.querySelector("#six");
let posnSeven = document.querySelector("#seven");
let posnEight = document.querySelector("#eight");
let posnNine = document.querySelector("#nine");

let currentPlayer = 'one';

console.log(posnOne.innerText)

console.log(posnTwo.innerText)

function resetgame() {
  posnOne.innerText = "1";
  posnTwo.innerText = "2";
  posnThree.innerText = "3";
  posnFour.innerText = "4";
  posnFive.innerText = "5";
  posnSix.innerText = "6";
  posnSeven.innerText = "7";
  posnEight.innerText = "8";
  posnNine.innerText = "9";
}
function checkwinner() {
  if (
    (posnOne.innerText == "⚫" &&
      posnTwo.innerText == "⚫" &&
      posnThree.innerText == "⚫") ||
    (posnFour.innerText == "⚫" &&
      posnFive.innerText == "⚫" &&
      posnSix.innerText == "⚫") ||
    (posnSeven.innerText == "⚫" &&
      posnEight.innerText == "⚫" &&
      posnNine.innerText == "⚫") ||
    (posnOne.innerText == "⚫" &&
      posnFour.innerText == "⚫" &&
      posnSeven.innerText == "⚫") ||
    (posnTwo.innerText == "⚫" &&
      posnFive.innerText == "⚫" &&
      posnEight.innerText == "⚫") ||
    (posnThree.innerText == "⚫" &&
      posnSix.innerText == "⚫" &&
      posnNine.innerText == "⚫") ||
    (posnOne.innerText == "⚫" &&
      posnFive.innerText == "⚫" &&
      posnNine.innerText == "⚫") ||
    (posnThree.innerText == "⚫" &&
      posnFive.innerText == "⚫" &&
      posnSeven.innerText == "⚫")
  ) {
    resetgame();
    alert("user1 is the winner");
  } else if (
    (posnOne.innerText == "🟡" &&
      posnTwo.innerText == "🟡" &&
      posnThree.innerText == "🟡") ||
    (posnFour.innerText == "🟡" &&
      posnFive.innerText == "🟡" &&
      posnSix.innerText == "🟡") ||
    (posnSeven.innerText == "🟡" &&
      posnEight.innerText == "🟡" &&
      posnNine.innerText == "🟡") ||
    (posnOne.innerText == "🟡" &&
      posnFour.innerText == "🟡" &&
      posnSeven.innerText == "🟡") ||
    (posnTwo.innerText == "🟡" &&
      posnFive.innerText == "🟡" &&
      posnEight.innerText == "🟡") ||
    (posnThree.innerText == "🟡" &&
      posnSix.innerText == "🟡" &&
      posnNine.innerText == "🟡") ||
    (posnOne.innerText == "🟡" &&
      posnTwo.innerText == "🟡" &&
      posnThree.innerText == "🟡") ||
    (posnOne.innerText == "🟡" &&
      posnTwo.innerText == "🟡" &&
      posnThree.innerText == "🟡")
  ) {
    resetgame();
    alert("user2 is the winner");
  }
}

function updateval(e)
{
console.log(e.target.id)


  e.preventDefault();
  // apan bas input box madhun value ghetli.
  const input = e.target.querySelector("input");
  const value = input.value;
 input.value = '';


    if((currentPlayer=='one'&&e.target.id == 'userTwoForm')||(currentPlayer=='two'&&e.target.id == 'userOneForm')){
        alert('not your turn');
        return;
    }
   

  if (value == 1) {
    if(posnOne.innerText!=1){
        alert('value already taken enter different value')
        return;
    }

    if (e.target.id === "userOneForm") {
      posnOne.innerText = "⚫";
    } else if (e.target.id === "userTwoForm") {
      posnOne.innerText = "🟡";
    }
  }
  if (value == 2) {

     if(posnTwo.innerText!=2){
        alert('value already taken enter different value')
        return;
    }

    if (e.target.id === "userOneForm") {
      posnTwo.innerText = "⚫";
    } else if (e.target.id === "userTwoForm") {
      posnTwo.innerText = "🟡";
    }
  }
  if (value == 3) {

     if(posnThree.innerText!=3){
        alert('value already taken enter different value')
        return;
    }
    if (e.target.id === "userOneForm") {
      posnThree.innerText = "⚫";
    } else if (e.target.id === "userTwoForm") {
      posnThree.innerText = "🟡";
    }
  }
  if (value == 4) {
      if(posnFour.innerText!=4){
        alert('value already taken enter different value')
        return;
    }
    if (e.target.id === "userOneForm") {
      posnFour.innerText = "⚫";
    } else if (e.target.id === "userTwoForm") {
      posnFour.innerText = "🟡";
    }
  }
  if (value == 5) {
     if(posnFive.innerText!=5){
        alert('value already taken enter different value')
        return;
    }
    if (e.target.id === "userOneForm") {
      posnFive.innerText = "⚫";
    } else if (e.target.id === "userTwoForm") {
      posnFive.innerText = "🟡";
    }
  }
  if (value == 6) {
     if(posnSix.innerText!=6){
        alert('value already taken enter different value')
        return;
    }
    if (e.target.id === "userOneForm") {
      posnSix.innerText = "⚫";
    } else if (e.target.id === "userTwoForm") {
      posnSix.innerText = "🟡";
    }
  }
  if (value == 7) {
     if(posnSeven.innerText!=7){
        alert('value already taken enter different value')
        return;
    }
    if (e.target.id === "userOneForm") {
      posnSeven.innerText = "⚫";
    } else if (e.target.id === "userTwoForm") {
      posnSeven.innerText = "🟡";
    }
  }
  if (value == 8) {
    if(posnEight.innerText!=8){
        alert('value already taken enter different value')
        return;
    }
    if (e.target.id === "userOneForm") {
        posnEight.innerText = "⚫";
    } else if (e.target.id === "userTwoForm") {
        posnEight.innerText = "🟡";
    }
  }
  if (value == 9) {
     if(posnNine.innerText!=9){
        alert('value already taken enter different value')
        return;
    }
    if (e.target.id === "userOneForm") {
      posnNine.innerText = "⚫";
    } else if (e.target.id === "userTwoForm") {
      posnNine.innerText = "🟡";
    }
  }
  checkwinner();

  if(currentPlayer=='one'){
    currentPlayer='two';
  }else{
    currentPlayer='one';
  }
}

// // to check winner
// let posn = document.querySelector("#useroneval");
// console.log(posn.value);
