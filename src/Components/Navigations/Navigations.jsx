import React from 'react';
import s from './Navigations.module.css';

let Navigations = () =>{
    return (
        <nav className={s.nav}>
        <div>
         <a href="">Профиль</a>
        </div>
        <div>
         <a href="">Сообщения</a>
        </div>
        <div>
         <a href="">Музыка</a>
        </div>
        <div>
         <a href="">Видео</a>
        </div>
        <div>
         <a href="">Новости</a>
        </div>
      </nav>
    );
}
export default Navigations;