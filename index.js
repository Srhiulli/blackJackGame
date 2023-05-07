

let hasBlackJack = false
let isAlive = true


let firstcard = 10
let secondCard = 1
let sum = firstcard + secondCard

let cardsEl = document.querySelector("#cards-el")
let sumEl = document.querySelector("#sum-el")


function startGame() {

  cardsEl.textContent = "Cards: " + firstcard + " and " + secondCard
  sumEl.textContent = "Sum: " + sum

  let message = ""
  let massageEl = document.querySelector("#message-el")
  massageEl.textContent = "Good Luck!"

  if (sum <= 20) {
    message = "Do you want to draw a new card?"
    let ButtonMessage = document.querySelector("#button-start-game-one-more-card")
    ButtonMessage.insertAdjacentHTML("afterend", '<button class="button-El-style" id="button-start-game-one-more-card" onclick="addOneMoreCardButton()">Get one more card</button>');
    console.log("New button ok")

  } else if (sum === 21) {
    message = "Whohooooo! You've got Blackjack!"
    hasBlackJack = true

  }
  else {
    message = "You're out of the game!"

    isAlive = false
  }

  massageEl.texteContent = message
}

function addOneMoreCardButton() {
  let thirdCard = 10
  sum += thirdCard
  cardsEl.textContent = "Cards: " + firstcard + " and " + secondCard + " and " + thirdCard
  sumEl.textContent = "Sum: " + sum
}


