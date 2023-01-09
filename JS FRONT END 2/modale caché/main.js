

let square= document.querySelector("carre");
let button = document.querySelector("button");
let body = document.getElementById("body");

/* quand on clique sur le bouton, la case apparait et le fond d'écran devient gris */
button.addEventListener("click", () => {
    carre.style.display = "block"
    body.style.backgroundColor = "grey"

})

/* quand on clique en dehors du bouton, la case disparait et le fond d'écran redevient blanc */
button.addEventListener("blur", () => {
    carre.style.display = "none"
    body.style.backgroundColor = "white"

})






