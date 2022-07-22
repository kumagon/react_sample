import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const a = 100;
    const b = 200;
    const c = a + b;
    return <h1>{c}</h1>;
};
ReactDOM.render(<App />, document.getElementById('app'));
