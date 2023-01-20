const cards = document.querySelectorAll(".card");
let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;


function flipCard({target: clickedCard}) {
    if(cardOne !== clickedCard && !disableDeck) {
        clickedCard.classList.add("flip");
        if(!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src,
        cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}
function matchCards(img1, img2) {
    console.log(img1);
    if(img1 === img2) {
        matched++;
        console.log("redirect");
        if(matched == 4) {
            setTimeout(() => {
                return shuffleCard();
            }, 1000);
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        if (img1 == "http://127.0.0.1:5500/images/img-1.jpeg") {
            console.log("PPL");
            window.open("http://127.0.0.1:5500/html/cv.html", '_target'); 
        }
        if (img1 == "http://127.0.0.1:5500/images/img-2.jpeg") {
            window.open("http://127.0.0.1:5500/html/index.html", '_target'); 
            
        }
        if (img1 == "http://127.0.0.1:5500/images/img-3.jpeg") {
            window.open("http://127.0.0.1:5500/html/projets.html", '_target'); 
        }
        if (img1 == "http://127.0.0.1:5500/images/img-4.jpeg") {
            window.open("http://127.0.0.1:5500/html/index.html", '_target'); 
        }
        return disableDeck = false;
    }
    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);
    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}
function shuffleCard() {
    matched = 0;
    disableDeck = false;
    cardOne = cardTwo = "";
    let arr = [1, 2, 3, 4, 1, 2, 3, 4];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    cards.forEach((card, i) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        imgTag.src = `../images/img-${arr[i]}.jpeg`;
        card.addEventListener("click", flipCard);
    });
}
shuffleCard();
    
cards.forEach(card => {
    card.addEventListener("click", flipCard);
});