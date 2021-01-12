import React from 'react';
import './App.css';
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import Header from './Components/Header/Header';
import Navigations from './Components/Navigations/Navigations';
import Profile from './Components/Profile/Profile';
import Dialogs from "./Components/Dialogs/Dialogs";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Video from "./Components/Video/Video";
import Settings from "./Components/Settings/Settings";
import imgset from "./im/pngegg.png";
import s from "./Components/Navigations/Navigations.module.css";
//import logo from './logo.svg';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <div className="app-wrapper-head">
                    <Header/>
                    <div className="app-wrapper-navi">
                        <Navigations/>
                        <div className='app-wrapper-content'>
                            <Route path='/profile' render={ () => <Profile posts={props.posts}/> }/>
                            <Route /*exact*/ path='/dialogs' render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages}/> }/>
                            <Route path='/music' component={Music}/>
                            <Route path='/video' component={Video}/>
                            <Route path='/news' component={News}/>
                            <Route path='/settings' component={Settings}/>
                            <div className='app-wrapper-setting'>
                                <NavLink to="/settings" activeClassName={s.active}>
                                    <img src={imgset} alt="404"/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
