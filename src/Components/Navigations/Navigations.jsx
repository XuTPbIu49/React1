import React from 'react';
import s from './Navigations.module.css';
import {NavLink} from "react-router-dom";

let Navigations = () =>{
    return (
        <nav className={s.nav}>
        <div>
         <NavLink to="/profile" activeClassName={s.active}>Профиль</NavLink>
        </div>
        <div>
         <NavLink to="/dialogs" activeClassName={s.active}>Сообщения</NavLink>
        </div>
        <div>
         <NavLink to="/music" activeClassName={s.active}>Музыка</NavLink>
        </div>
        <div>
         <NavLink to="/video" activeClassName={s.active}>Видео</NavLink>
        </div>
        <div>
         <NavLink to="/news" activeClassName={s.active}>Новости</NavLink>
        </div>
      </nav>
    );
}
export default Navigations;