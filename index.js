// Code your solutions in this file

function writeCards(forTheHomies, event) {
    let thankYouCards = []
  for (let i = 0; i < forTheHomies.length; i++) {
    thankYouCards.push(`Thank you, ${forTheHomies[i]}, for the wonderful ${event} gift!`)
  }

  return thankYouCards;
}

// for while loop

function countDown(startWith) {
    while (startWith > 0) {
        console.log(startWith);
        startWith -= 1;
    }
    console.log(startWith);
}

