import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
  return (    
      <div className={s.item}>
        <img src='https://lh3.googleusercontent.com/proxy/wizLGTTXL44QJbBCxmpY6d5LsyHyZ7x1oDgdmKa1ihzJRjpf4ZZMW4RlxTGX-A-HZF7VaTStHQkJtTWyt_uv8HuQ5Zvxp2YU1K-HB8ZB-kPuo-Fsen9cOVLQqu53eb6wI4YzGwkkTECJyyEnWqlEYX39lIcPaEZiT3fTXBUPVw'/>
        {props.massage}
        <div>
          <span>Like</span> {props.LikesCount}
        </div>
      </div>      
  );
}

export default Post;