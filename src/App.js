import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navigations from './Components/Navigations/Navigations';
import Profile from './Components/Profile/Profile';
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Video from "./Components/Video/Video";




function App() {
    return (
        <BrowserRouter>
        <div className='app-gur'>
            <Header/>
            <Navigations/>
            <div className='app-gur-content'>
                <Route path='/Profile' component={Profile}/>
                <Route path='/Dialogs' component={Dialogs}/>
                <Route path='/Music' component={Music}/>
                <Route path='/Video' component={Video}/>
                <Route path='/News' component={News}/>
            </div>
        </div>
        </BrowserRouter>
    );
}


export default App;
