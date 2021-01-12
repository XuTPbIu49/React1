import React from 'react';
import s from './Post.module.css';
import defavatar from "../../../../im/avatar.jpg";

const Post = (props) => {
  return (    
      <div className={s.item}>
        <img src={defavatar}/>
        {props.massage}
        <div>
          <span>Like</span> {props.LikesCount}
        </div>
      </div>      
  );
}

export default Post;