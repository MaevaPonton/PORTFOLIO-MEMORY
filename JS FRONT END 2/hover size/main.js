
/* clic et survol de la souris */

let cards = document.querySelectorAll(".card");

for(let card of cards) { card.addEventListener ("mouseover",() => {
    card.style.borderColor = "red"
    card.style.filter = "none"
}) }

for(let card of cards) { card.addEventListener ("mousedown",() => {
    card.style.width = "400px"
}) }

for(let card of cards) { card.addEventListener ("mouseup",() => {
    card.style.width = "200px"
}) }

