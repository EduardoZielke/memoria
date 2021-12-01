const FRONT = 'card_front'
const BACK = 'card_back'
const CARD = 'card'
const ICON = 'icon'

let gameBoard = document.querySelector('.gameBoard')

function startGame() {
    let pacote = document.querySelector('.pacote')
    let gameOverLayer = document.getElementById('gameOver')
    pacote.style.display = 'none'
    gameOverLayer.style.display = 'none'

    initializeCards(game.createCardsFromAssets(choosedTheme.theme))

    gameBoard.classList.remove('gameBoard')
    gameBoard.offsetWidth
    gameBoard.classList.add('gameBoard')
}


function initializeCards(cards) {
    gameBoard.innerHTML = ''

    cards.forEach(card => {

        let cardElement = document.createElement('div')
        cardElement.id = card.id
        cardElement.classList.add(CARD)
        cardElement.dataset.icon = card.icon

        createCardContent(card, cardElement)
        cardElement.addEventListener('click', flipCard)
        gameBoard.appendChild(cardElement)

    })

}

function createCardContent(card, cardElement) {

    createCardFace(FRONT, card, cardElement)
    createCardFace(BACK, card, cardElement)

}

function createCardFace(face, card, element) {

    let cardElementFace = document.createElement('div')
    cardElementFace.classList.add(face)

    if (face === FRONT) {
        let iconElement = document.createElement('img')
        iconElement.classList.add(ICON)
        iconElement.id = 'img'
        iconElement.src = `./assets/${choosedTheme.path}/${card.icon}.png`
        cardElementFace.appendChild(iconElement)
        cardElementFace.appendChild(iconElement)
    } else {
        cardElementFace.innerHTML = '&lt/&gt'
    }
    element.appendChild(cardElementFace)
}

function flipCard() {
    if (game.setCard(this.id)) {
        this.classList.add('flip')
        if (game.secondCard) {

            if (game.checkMatch()) {
                game.clearCards()

                if (game.checkGameOver()) {
                    document.getElementById('gameOver').style.display = "flex"
                }
            } else {
                setTimeout(() => {
                    let firstCardView = document.getElementById(game.firstCard.id)
                    let sencondCardView = document.getElementById(game.secondCard.id)
                    firstCardView.classList.remove('flip')
                    sencondCardView.classList.remove('flip')
                    game.unflipCards()
                }, 1500)
            }

        }
    }

}