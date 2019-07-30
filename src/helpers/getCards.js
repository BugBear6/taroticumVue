import getCardObject from './getCardObject';

// returns number from 1 to 68
const getNumber = () => {
	return Math.floor(Math.random() * 68) + 1;
};

const getUniqueNumber = (arrNumbersTaken = []) => {
	let number = getNumber();
	if (arrNumbersTaken.indexOf(number) > -1) {
		number = getUniqueNumber(arrNumbersTaken);
	}
	return number;
};

const getSingleCard = () => {
	const cardNumber = getNumber();
	return getCardObject(cardNumber);
};

const getFiveCards = () => {
	const arrBlank = new Array(5).fill('');
	const arrNumbersTaken = [];
	const cardsNumbers = arrBlank.reduce(result => {
		const newNumber = getUniqueNumber(arrNumbersTaken);
		const cardObject = getCardObject(newNumber);
		arrNumbersTaken.push(newNumber);
		result.push(cardObject);
		return result;
	}, []);
	return cardsNumbers;
};

export default (mode) => {
	if (mode === 'single') {
		return getSingleCard();
	}
	return getFiveCards();
};
