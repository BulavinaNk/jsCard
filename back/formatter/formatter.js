module.exports = {
    getCard(card) {
        return {
            id: card._id,
            title: card.title,
            desc: card.desc,
            date: card.date
        }
    },
    getCards(cards){
        return cards.map(this.getCard);
    }
};