import React from 'react';
import logo from './logo.svg';
import './Tabl.css';
let Tabl = () => {
    return (
        <ul className="Tabl">
            <li >
            <img src={logo} className="Sidebar-logo" alt="logo" /> Пункт 1
        </li>
            <li>
                <img src={logo} className="Sidebar-logo" alt="logo" />
            </li>
            <li>
                Пункт 2
        </li>
        </ul>
    );
}
export default Tabl;