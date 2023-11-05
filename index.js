

let hasBlackJack = false
let isAlive = true

let firstcard = 10
let secondCard = 1
let thirdCard = 11
let allCardsArray = [
  firstcard, secondCard, thirdCard
]
let sum = firstcard + secondCard

let cardsEl = document.querySelector("#cards-el")
let sumEl = document.querySelector("#sum-el")

function sendMessage(message) {
  let massageEl = document.querySelector("#message-el")
  massageEl.textContent = message
  console.log(massageEl)
}

function startGame(){
  renderGame()
}

function renderGame() {
  cardsEl.textContent = "Cards: " + allCardsArray[0] + " and " + allCardsArray[1]
  sumEl.textContent = "Sum: " + sum
  sendMessage("Good luck!")

  if (sum <= 20) {
    sendMessage("Do you want to draw a new card?")
  }
  else if (sum === 21) {
    sendMessage("Whohooooo! You've got Blackjack!")
    hasBlackJack = true
  }
  else {
    sendMessage("You're out of the game!")
    isAlive = false
  }
}

function newCard() {
  sendMessage("Drawing a new card from the deck!")
  sum += allCardsArray[2]
  cardsEl.textContent = "Cards: " + allCardsArray[0] + " and " + allCardsArray[1] + " and " + allCardsArray[2]
  sumEl.textContent = "Sum: " + sum
  renderGame()
}


