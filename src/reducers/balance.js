import * as constants from '../actions/constants';

const balance = (state = 0, actions) => {
	switch (actions.type) {
		case constants.SET_BALANCE:
			return actions.balance;
		case constants.DEPOSIT:
			return state + actions.deposit;
		case constants.WITHDRAW:
			return state - actions.withdrawal;
		default:
			return state;
	}
};

export default balance;
