

let hasBlackJack = false
let isAlive = true


let firstcard = 10
let secondCard = 1
let sum = firstcard + secondCard

let cardsEl = document.querySelector("#cards-el")
let sumEl = document.querySelector("#sum-el")

function sendMessage(message){
  let massageEl = document.querySelector("#message-el")
  massageEl.textContent = message
  console.log(massageEl)
}

function startGame() {
  cardsEl.textContent = "Cards: " + firstcard + " and " + secondCard
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
  console.log(3213132121)

  sendMessage("Good luck!")

  let thirdCard = 10
  sum += thirdCard
  cardsEl.textContent = "Cards: " + firstcard + " and " + secondCard + " and " + thirdCard
  sumEl.textContent = "Sum: " + sum
}


