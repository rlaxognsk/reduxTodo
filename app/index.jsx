import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './components/App.jsx';

import { addTodo } from './actions';

const store = createStore(
    rootReducer
);

render(
    <Provider store={ store }>
        <App/>
    </Provider>,
    document.getElementById( 'root' )
);

document.getElementById( 'Show' ).addEventListener( 'click', e => {
    console.log( store.getState() );
} );