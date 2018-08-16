import React, { Component } from 'react';
import Wallet from './Wallet';
import Loot from './Loot';

class App extends Component {
	render() {
		return (
			<div>
				<h1>Loot check</h1>
				<h2>React BDD</h2>
				<hr />
				<Wallet />
				<hr />
				<Loot />
			</div>
		);
	}
}

export default App;
