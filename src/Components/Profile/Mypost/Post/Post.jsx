import React from 'react';
import style from './Post.module.css';


const Post = (props) => {
  return (    
      <div className={style.item}>
        <img src='https://lh3.googleusercontent.com/proxy/p_st5ZgKcK95aSGhasMNTBXWDYmX8D-3IJfcOqchIlGgxwHuXC-GqMipxXsIpbjUULwg_9sUbvKCe6J3jEVdQgz0wRN0i4xAdrhOPMbYQVuaRr1IYQIAuVPdxR27yjOCAjBU1hGCW_AiVRnJ9i-dG4jiOIL3iz5sH3ou3k5Cxw'/>
        {props.massage}
        <div>
          <span>😍Like</span>
        </div>
      </div>      
  );
}

export default Post;