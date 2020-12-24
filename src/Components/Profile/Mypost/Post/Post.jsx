import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
  return (    
      <div className={s.item}>
        <img src='http://www.youloveit.ru/uploads/posts/2020-04/1586360559_youloveit_ru_dipper_gravity_falls_na_avu13.jpg'/>
        {props.massage}
        <div>
          <span>Like</span> {props.LikesCount}
        </div>
      </div>      
  );
}

export default Post;