import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
	const app = shallow(<App />);

	it('renders property', () => {
		expect(app).toMatchSnapshot();
	});

	it('contains a Wallet component', () => {
		// console.log(app.debug());

		expect(app.find('Connect(Wallet)').exists()).toBe(true);
	});

	it('contains a connected Loot component', () => {
		expect(app.find('Connect(Loot)').exists()).toBe(true);
	});
});
