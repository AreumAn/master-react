import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer, { rootSage } from './modules';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, ReduxThunk, sagaMiddleware )));
sagaMiddleware.run(rootSage);

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

