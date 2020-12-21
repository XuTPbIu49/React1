import React from 'react';
import style from './Mypost.module.css';
import Post from './Post/Post';


let Mypost = () => {
  return (
      <div className={style.item}>
        my post
        <div>
       <textarea></textarea>
       <button>Добавить</button>
       </div>
       <div className={style.Post}>
         <Post massage='Hi, Pidor' />
         <Post massage='LoL'/>
         <Post massage='her'/>
       </div>
      </div>
  )
}

export default Mypost;