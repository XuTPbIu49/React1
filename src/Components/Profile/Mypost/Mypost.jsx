import React from 'react';
import s from './Mypost.module.css';
import Post from './Post/Post';


let Mypost = () => {
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
            <div className={s.Post}>
                <Post massage='Hi, Pidor' LikesCount='😍2'/>
                <Post massage='LoL' LikesCount='😍5'/>
                <Post massage='her' LikesCount='😍0'/>
            </div>
        </div>
    )
}

export default Mypost;