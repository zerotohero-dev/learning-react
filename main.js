import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Prop is a property, or an attribute.
// You can (I think) pass props as methods too.
ReactDOM.render(<App
    txt="this is the props text"
    cat={5}
/>, document.getElementById('app'));
