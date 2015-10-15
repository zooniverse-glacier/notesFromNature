/*
TODO:
- Form validations: Prompt, "Are you sure? There are n empty fields." Sanity: start date <= end date, etc.
- Form submit logic
- Do Herbarium next
- Toggle/Wizard
- Local storage/Ditto: Last n entries in forms and form states
- When Adler ingests crabs finish wiring
- Navbar: User name shows when logged in, count, off button link
- Help examples
- Clean repo
- Fix image size: first fit vertically THEN fit horizontally
- Fix scaling on window resize?
*/
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
