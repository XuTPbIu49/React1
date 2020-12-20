import React from 'react';
import style from './Mypost.module.css';


let Mypost = () => {
  return (
      <div className={style.item}>
        my post
       <div className={style.item}>
          newpost
      </div>
      <div className={style.item}>
        post1
      </div>
      <div className={style.item}>
        post2
      </div>
      <div className={style.item}>
        post3
      </div>
      </div>
  );
}

export default Mypost;