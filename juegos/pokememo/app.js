document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'abra',
            img: 'img/abra.png'
        },
        {
            name: 'abra',
            img: 'img/abra.png'
        },
        {
            name: 'charmander',
            img: 'img/charmander.png'
        },
        {
            name: 'charmander',
            img: 'img/charmander.png'
        },
        {
            name: 'bulbasaur',
            img: 'img/bulbasaur.png'
        },
        {
            name: 'bulbasaur',
            img: 'img/bulbasaur.png'
        },
        {
            name: 'oddish',
            img: 'img/oddish.png'
        },
        {
            name: 'oddish',
            img: 'img/oddish.png'
        },
        {
            name: 'caterpee',
            img: 'img/caterpee.png'
        },
        {
            name: 'caterpee',
            img: 'img/caterpee.png'
        },
        {
            name: 'squirtle',
            img: 'img/squirtle.png'
        },
        {
            name: 'squirtle',
            img: 'img/squirtle.png'
        }
        
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    const cardsWon = []

    //create your board
    function createBoard(){
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src','img/pokeball.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }


    //check for matches
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]){
            alert('Bien! Atrapaste a este pokemon!')
            cards[optionOneId].setAttribute('src', 'img/blanco.png')
            cards[optionTwoId].setAttribute('src', 'img/blanco.png')
            cards[optionOneId].removeEventListener("click", flipCard); 
            cards[optionTwoId].removeEventListener("click", flipCard);
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'img/pokeball.png')
            cards[optionTwoId].setAttribute('src', 'img/pokeball.png')
            alert('El pokemon se te escapó amigx!')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Ganaste! You catch them all!'
        }
    }


    //flip your card
    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 100)
        }
    }


    createBoard()
})