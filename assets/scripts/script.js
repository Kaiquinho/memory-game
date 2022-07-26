const front = "card_front"
const back = "card_back"

let techs = ['bootstrap', 'css', 'electron', 'firebase', 'html', 'javascript', 
            'jquery', 'mongo', 'node', 'react'];


//Criando modelo das cartas
let cards = null;

startGame();

function startGame(){
    cards = creatCardsFromTechs(techs);
    shuffleCards(cards);
    console.log(cards)
}

function shuffleCards(cards){ //shuffle = embaralhar
    let currentIndex = cards.length;
    let randomIndex = 0;

    while(currentIndex !== 0){

        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--;

        [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]]
    }
}

creatCardsFromTechs(techs);
function creatCardsFromTechs(techs){
    let cards = [];

    for(let tech of techs){
        cards.push(creatPairFromTech(tech));
    }
    return cards.flatMap(pair => pair);
}

function creatPairFromTech(tech){
    return [{
        id: creatIdWithTech(tech),
        icon: tech,
        flipped: false,
    }, {
        id: creatIdWithTech(tech),
        icon: tech,
        flipped: false,
    }] 
}

function creatIdWithTech(tech){
    return tech + parseInt(Math.random() * 1000);
}

 