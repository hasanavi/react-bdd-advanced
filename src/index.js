import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import App from './components/App';

const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
	<Provider store={store}>
		<App />
	</Provider>
);

render(app, document.getElementById('root'));
