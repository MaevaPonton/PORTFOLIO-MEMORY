/* combinaison de deux touches appuyées et trois touches appuyées */

let text1 = document.querySelector(".text1");
let text2 = document.querySelector(".text2");
let body = document.getElementById ("body");

document.addEventListener ("keydown",(e) => {
    if (e.ctrlKey === true && e.key === "m"){
        text2.style.display = "block"
    }
})

document.addEventListener ("keydown",(e) => {
    if (e.ctrlKey === true && e.key === "m" && e.altKey === true ){
        text2.style.display = "block"
        body.style.color = "green"
    }
})
