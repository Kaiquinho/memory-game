const FRONT = "card_front"
const BACK = "card_back"
const CARD = "card"
const ICON = "icon"




//Criando modelo das cartas


startGame();

function startGame(){
    // game.creatCardsFromTechs(); -> Colocamos ela como argumento da linha abaixo
    initializeCards(game.creatCardsFromTechs());
}
function initializeCards(cards){
    let gameBoard = document.getElementById("gameBoard");
    gameBoard.innerHTML = '';
    game.cards.forEach(card => {

        let cardElement = document.createElement('div')
        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;

        creatCardContent(card, cardElement);

        //colocando carta no tabuleiro
        cardElement.addEventListener('click', flipCard())
        gameBoard.appendChild(cardElement);



    })

}
function creatCardContent(card, cardElement){

    creatCardFace(FRONT, card, cardElement);
    creatCardFace(BACK, card, cardElement);

}
function creatCardFace(face, card, element){

    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);
    if(face === FRONT){
        let iconElement = document.createElement('img'); 
        iconElement.classList.add(ICON)
        iconElement.src = "./assets/imgs/" + card.icon + ".png"
        cardElementFace.appendChild(iconElement)
    }else{
        cardElementFace.innerHTML = "&lt/&gt";
    }
    element.appendChild(cardElementFace);
}



// creatCardsFromTechs(techs);


function flipCard(){
    
    if(game.setCard(this.id)){

        this.classList.add("flip");
        if(game.secondCard){
        if(game.checkMatch()){
            game.clearCards();
            if(game.checkGameOver()){
                let gameOverLayer = document.getElementById("gameOver");
                gameOverLayer.style.display = 'flex';
            }
        }else{
            setTimeout(()=>{

            
                let firstCardView = document.getElementById(game.firstCard.id);
                let secondCardView = document.getElementById(game.secondCard.id);
                
                firstCardView.classList.remove('flip');
                secondCardView.classList.remove('flip');
                game.unflipCards();
                }, 1000);
            };
        }
    }
    
}
function restart(){
    game.clearCards();
    startGame();
    let gameOverLayer = document.getElementById("gameOver");
                gameOverLayer.style.display = 'none';

}