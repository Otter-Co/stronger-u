import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import './index.css';
import App from './app/app';
import rootReducer from './app/state/rootReducer';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(ReduxThunk),
        window["__REDUX_DEVTOOLS_EXTENSION__"] && window["__REDUX_DEVTOOLS_EXTENSION__"]()
    )
);

ReactDOM.render(
    (
        <Provider store={ store }>
            <App />
        </Provider>
    ),
    document.getElementById('root')
);
