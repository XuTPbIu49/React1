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
            <div className='app-wrapper'>
                <div className="app-wrapper-head">
                    <Header/>
                    <div className="app-wrapper-navi">
                        <Navigations/>
                        <div className='app-wrapper-content'>
                            <Route path='/profile' component={Profile}/>
                            <Route /*exact*/ path='/dialogs' component={Dialogs}/>
                            <Route path='/music' component={Music}/>
                            <Route path='/video' component={Video}/>
                            <Route path='/news' component={News}/>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
