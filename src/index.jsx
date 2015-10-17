import React from "react";
import ReactDOM from "react-dom";
import Transcriber from 'components/transcriber';
import transcriberStore from 'reducers/transcriber_reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(transcriberStore);

ReactDOM.render(
    <Provider store={store}>
        <Transcriber />
    </Provider>,
    document.getElementById('nfn')
);
