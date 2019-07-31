import { getCardObject } from './getCardObject';

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

const sortByNumber = (objA, objB) => {
	return objA.number - objB.number;
};

export const getAllCards = () => {
	const cardsObj = getCardObject();
	const cardsArr = Object.keys(cardsObj).map(key => cardsObj[key]);
	const majorArr = cardsArr.filter(({arcana}) => arcana === 'Major').sort(sortByNumber);
	const eyesArr = cardsArr.filter(({color}) => color === 'Eyes').sort(sortByNumber);
	const crescentsArr = cardsArr.filter(({color}) => color === 'Crescents').sort(sortByNumber);
	const hourglassessArr = cardsArr.filter(({color}) => color === 'Hourglasses').sort(sortByNumber);
	const rosesArr = cardsArr.filter(({color}) => color === 'Roses').sort(sortByNumber);
	const skullsArr = cardsArr.filter(({color}) => color === 'Skulls').sort(sortByNumber);
	return majorArr.concat(
		eyesArr,
		crescentsArr,
		hourglassessArr,
		rosesArr,
		skullsArr
	);
};

export const getCards = (mode) => {
	if (mode === 'single') {
		return getSingleCard();
	}
	return getFiveCards();
};
