import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import MainPage from "./components/SmallNavigation/MainPage";

const root  = document.getElementById('root');

ReactDOM.render(
   <MainPage/>,
root);
registerServiceWorker();
