import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const App = () => {
    return (
        <div> Hello, world. </div>
    )
}

ReactDom.render(<App/>, document.getElementById('main'))