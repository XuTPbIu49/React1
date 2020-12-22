import React from 'react';
import s from './Navigations.module.css';

let Navigations = () =>{
    return (
        <nav className={s.nav}>
        <div>
         <a href="/Profile">Профиль</a>
        </div>
        <div>
         <a href="/Dialogs">Сообщения</a>
        </div>
        <div>
         <a href="Music">Музыка</a>
        </div>
        <div>
         <a href="Video">Видео</a>
        </div>
        <div>
         <a href="News">Новости</a>
        </div>
      </nav>
    );
}
export default Navigations;