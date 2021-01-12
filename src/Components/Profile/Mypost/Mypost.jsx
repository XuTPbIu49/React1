import React from 'react';
import s from './Mypost.module.css';
import Post from './Post/Post';

const Mypost = (props) => {
    let postsElements =
        props.posts.map(p => <Post massage={p.message} LikesCount={p.LikesCount}/>);
    return (
        <div className={s.item}>
            <div className={s.addpost}>
                <h4>My Posts</h4>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Добавить</button>
                    </div>
                </div>
            </div>
            <div className={s.post}>
                {postsElements}
            </div>
        </div>
    )
}

export default Mypost;