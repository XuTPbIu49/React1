import React from 'react';
import s from './Mypost.module.css';
import Post from './Post/Post';


let Mypost = () => {
  return (
      <div className={s.item}>
        my post
        <div>
       <textarea></textarea>
       <button>Добавить</button>
       </div>
       <div className={s.Post}>
         <Post massage='Hi, Pidor' LikesCount='😍2' />
         <Post massage='LoL' LikesCount='😍5'/>
         <Post massage='her' LikesCount='😍0'/>
       </div>
      </div>
  )
}

export default Mypost;