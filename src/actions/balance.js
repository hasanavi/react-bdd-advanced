import * as constants from './constants';

const setBalance = (balance) => {
	return {
		type: constants.SET_BALANCE,
		balance
	};
};

export { setBalance };
