import cards from './cards';

const rootPath = '/taroticum/img/tarot-cards/';
// const rootPath = '/img/tarot-cards/';

const getCardFileName = cardNumber => {
	return `card_${cardNumber}.jpg`;
};

export const getCardUrl = cardId => {
	return `${rootPath}${getCardFileName(cardId)}`;
};

export const getCardBackUrl = () => {
	return `${rootPath}back.jpg`;
};


export const getCardObject = cardNumber => {
	if (cardNumber) {
		const cardObj = Object.assign({}, cards[cardNumber]);
		return cardObj;
	}
	return Object.assign({}, cards);
};
