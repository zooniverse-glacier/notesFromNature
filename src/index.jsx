import 'babel-core/polyfill';
import React from "react";
import thunkMiddleware from 'redux-thunk';
import ReactDOM from 'react-dom';
import Transcriber from 'components/transcriber';
import transcriberStore from 'reducers/transcriber_reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(transcriberStore);

ReactDOM.render(
    <Provider store={store}>
        <Transcriber />
    </Provider>,
    document.getElementById('nfn')
);
