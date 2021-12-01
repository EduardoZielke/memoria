const btns = document.querySelectorAll('.btnChoose')
const board = document.querySelector('.board')

let futebol = [
    'bruno',
    'cristiano',
    'daniel',
    'diego',
    'gabigol',
    'musto',
    'palacios',
    'rodinei',
    'ronaldinho',
    'vampeta'
]

let tecnologias = [
    'bootstrap',
    'electron',
    'css',
    'firebase',
    'html',
    'javascript',
    'jquery',
    'mongo',
    'node',
    'react'
]

let animais = [
    'cachorro',
    'cavalo',
    'elefante',
    'galinha',
    'gato',
    'ourico',
    'touro',
    'tucano',
    'urso',
    'veado'
]

addEventListener('DOMContentLoaded', ()=>{
    futebol.forEach(jogador => {
        board.innerHTML += ` 
        <div class="card_theme">
            <div class="card_front_theme">
                <img src="./assets/Futebol/${jogador}.png" id="img">
            </div>
        </div>`
    })
})

btns.forEach(btn => {
    btn.addEventListener('click', orientandoCartas)
})

function orientandoCartas(){
    btnActive(this)

    let theme = this.value
    switch(theme) {
        case 'Futebol':
            showingCards(futebol, 'Futebol')
            choosedTheme.theme = futebol
            choosedTheme.path = 'Futebol'
            break
        case 'Tecnologias':
            showingCards(tecnologias, 'Tecnologias')
            choosedTheme.theme = tecnologias
            choosedTheme.path = 'Tecnologias'
            break
        case 'Animais':
            showingCards(animais, 'Animais')
            choosedTheme.theme = animais
            choosedTheme.path = 'Animais'
            break
        default:
            console.log('Nenhum selecionado')
            break
    }
}

let choosedTheme = {
    theme: futebol,
    path: 'Futebol'
}

function showingCards(cards, path) {
    board.innerHTML = ''
    cards.forEach(card => {
        createThemeCards(card, path)
    })

}

function createThemeCards(card, path) {

    let element = document.createElement('div')
    element.classList.add('card_theme')
    let viewCard = document.createElement('div')
    viewCard.classList.add('card_front_theme')
    let imgTheme = document.createElement('img')
    imgTheme.src = `./assets/${path}/${card}.png`
    imgTheme.id = 'img'

    viewCard.appendChild(imgTheme)
    element.appendChild(viewCard)

    board.appendChild(element)
}

function btnActive(button) {
    btns.forEach(btn => {
        btn.classList.remove('active')
    })

    button.classList.add('active')
}

btns.forEach(botao => {
    botao.addEventListener('click', function(){
        board.classList.remove('board')
        board.offsetWidth
        board.classList.add('board')
    })
})



