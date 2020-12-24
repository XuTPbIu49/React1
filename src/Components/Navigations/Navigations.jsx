import React from 'react';
import s from './Navigations.module.css';
import {NavLink} from "react-router-dom";

let Navigations = () =>{
    return (
        <nav className={s.nav}>
        <div>
         <NavLink to="/Profile" activeClassName={s.active}>Профиль</NavLink>
        </div>
        <div>
         <NavLink to="/Dialogs" activeClassName={s.active}>Сообщения</NavLink>
        </div>
        <div>
         <NavLink to="Music" activeClassName={s.active}>Музыка</NavLink>
        </div>
        <div>
         <NavLink to="Video" activeClassName={s.active}>Видео</NavLink>
        </div>
        <div>
         <NavLink to="News" activeClassName={s.active}>Новости</NavLink>
        </div>
      </nav>
    );
}
export default Navigations;