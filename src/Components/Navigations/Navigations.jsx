import React from 'react';
import s from './Navigations.module.css';
import {NavLink} from "react-router-dom";
import ProfImg from "../../im/profile.png";
import MessImg from "../../im/message.png";
import MusImg from "../../im/music.png";

let Navigations = () =>{
    return (
        <div className={s.nav}>
        <div>
         <NavLink to="/profile" activeClassName={s.active}>
             <img src={ProfImg} alt="404"/>
             Профиль
         </NavLink>
        </div>
        <div>
         <NavLink to="/dialogs" activeClassName={s.active}><img src={MessImg}/>Сообщения</NavLink>
        </div>
        <div>
         <NavLink to="/music" activeClassName={s.active}><img src={MusImg}/>Музыка</NavLink>
        </div>
        <div>
         <NavLink to="/video" activeClassName={s.active}>Видео</NavLink>
        </div>
        <div>
         <NavLink to="/news" activeClassName={s.active}>Новости</NavLink>
        </div>
      </div>
    );
}
export default Navigations;