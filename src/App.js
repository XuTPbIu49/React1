import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navigations from './Components/Navigations/Navigations';
import Profile from './Components/Profile/Profile';
import Dialogs from "./Components/Dialogs/Dialogs";


function App() {
    return (
        <div className='app-gur'>
            <Header/>
            <Navigations/>
            <div className='app-gur-content'>
                {/*<Profile />*/}
                <Dialogs/>
            </div>
        </div>
    );
}


export default App;
