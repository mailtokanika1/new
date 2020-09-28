//import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

//ReactDOM.render(
 // <React.StrictMode>
  //  <App />
  //</React.StrictMode>,
  //document.getElementById('root')
//);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Navigation from './navigation.js';
import Main from './main.js';
//import Header from './header.js'
//import About from './about.js'
import FlippingCardPage from './card.js'

class App extends Component{
  render(){
    return(
      <div>
      <Navigation />
      <Main />
     
      {/*<Header title="THANK YOU OR YOUR CONSIDERATION." text=" I look forward to hearing from you."/>*/}
      </div>
    );
  }
}
ReactDOM.render(<App />,document.getElementById('root'));
