const game = {
    lockMode: false,
    firstCard: null,
    secondCard: null,

    setCard: function(id) {
        let card = this.cards.filter(card => card.id === id)[0]
        if(card.flipped || this.lockMode) {
            return false
        }

        if(!this.firstCard) {
            this.firstCard = card
            this.firstCard.flipped = true
            return true
        } else {
            this.secondCard = card
            this.secondCard.flipped = true
            this.lockMode = true
            return true
        }

    },

    checkMatch: function(){
        if(!this.firstCard || !this.secondCard){
            return false
        }
        return this.firstCard.icon === this.secondCard.icon
    },

    unflipCards: function() {
        this.firstCard.flipped = false
        this.secondCard.flipped = false
        this.clearCards()
    },

    checkGameOver: function() {
        return this.cards.filter(card => !card.flipped).length == 0
    },

    clearCards: function() {
        this.firstCard = null
        this.secondCard = null
        this.lockMode = false
    },

    cards: null,

    createCardsFromAssets: function(theme) {
        this.cards = []
    
        theme.forEach(card => {
            this.cards.push(this.createPairFromCard(card))
        })
    
        this.cards = this.cards.flatMap(pair => pair)
        this.suffle()
        return this.cards
    },
    
    createPairFromCard: function(card) {
    
        return [{
            id: this.createIdWithCard(card),
            icon: card,
            flipped: false
        }, {
            id: this.createIdWithCard(card),
            icon: card,
            flipped: false
        }]
    
    },
    
    createIdWithCard: function(card) {
        return card + parseInt(Math.random() * 1000)
    },

    suffle: function() {
        let currentIndex = this.cards.length
        let randomIndex = 0 
    
        while(currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--
            [this.cards[currentIndex], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[currentIndex]]
        }
    },
}