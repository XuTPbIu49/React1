import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
    {id: 1, name: "Олег"},
    {id: 2, name: "Саня"},
    {id: 3, name: "Валера"},
    {id: 4, name: "Олень"},
    {id: 5, name: "Тракторист"},
    {id: 6, name: "Ubivator3000"}
];
let messages = [
    {id: 1, message: "Привет"},
    {id: 2, message: "Где мои деньги"},
    {id: 3, message: "Гавнюююк!!!!"},
    {id: 4, message: "Аванс пришел!!!!"},
    {id: 5, message: "NeN"}
];
let posts = [
    {id: 1, message: "Hi, Pidor", LikesCount: '😍2'},
    {id: 2, message: "LoL", LikesCount: '😍5'},
    {id: 3, message: "her", LikesCount: '😍0'}
];

ReactDOM.render(
  // <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
