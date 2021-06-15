import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

componentDidMount() {
  const script = document.createElement("script");
  script.src = "C:\Users\OCH\Documents\Amplify\amplifySecond\amplifysecond\script\amplifyPush.sh";
  script.async = true;
  script.onload = () => this.scriptLoaded();

  this.div.appendChild(script);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
