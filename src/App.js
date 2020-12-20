import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navigations from './Components/Navigations/Navigations';
import Profile from './Components/Profile/Profile';



function App() {
  return (
    <div className='app-gur'>
      <Header />
      <Navigations />
      <Profile />
    </div>
  );
}




export default App;
