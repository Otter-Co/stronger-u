import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as redux from 'redux';
import './index.css';
import App from './app/app';
import rootReducer from './app/state/rootReducer';

const store = redux.createStore(rootReducer);

ReactDOM.render(
    (
        <Provider store={ store }>
            <App />
        </Provider>
    ),
    document.getElementById('root')
);
