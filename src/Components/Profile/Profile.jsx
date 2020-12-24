import React from 'react';
import s from './Profile.module.css';
import Mypost from "./Mypost/Mypost";


let Profile = () => {
    return (
        <div>
            <div className={s.InfoProfile}>
                <img className={s.bar}
                     src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"/>
                <img  className={s.avatar}
                    src="http://www.youloveit.ru/uploads/posts/2020-04/1586360554_youloveit_ru_dipper_gravity_falls_na_avu01.jpg"/>
                <div className={s.InfoUser}>info</div>
            </div>
            <div className={s.posts}>
                <Mypost/>
            </div>
        </div>

    );
}

export default Profile;