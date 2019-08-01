import cards from './cards';

export const getCardFileName = cardNumber => {
	return `card_${cardNumber}.jpg`;
};

export const getCardObject = cardNumber => {
	if (cardNumber) {
		const cardObj = Object.assign({}, cards[cardNumber]);
		return cardObj;
	}
	return Object.assign({}, cards);
};
