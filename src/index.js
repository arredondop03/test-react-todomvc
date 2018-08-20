import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //if we have a component in a variable 
//we can use it as a tag name later
import registerServiceWorker from './registerServiceWorker';



//Here is the entry point of the app and where the app is inserted
//to the page
ReactDOM.render(<App />, document.getElementById('root'));
//grab the element that has the id root and render app component
registerServiceWorker();
