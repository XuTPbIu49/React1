import React from 'react';
import s from './Profile.module.css';
import Mypost from "./Mypost/Mypost";


const Profile = () => {
    return (
        <div>

            <div className={s.InfoProfile}>
                    <div className={s.InfoUser}>
                        <img className={s.avatar}
                             src="http://www.youloveit.ru/uploads/posts/2020-04/1586360554_youloveit_ru_dipper_gravity_falls_na_avu01.jpg"/>
                    <div className={s.UserName}>
                        Имя Пользователя
                    </div>
                    <div className={s.info}>
                        info
                    </div>
                </div>
                <div className={s.posts}>
                    <Mypost/>
                </div>
            </div>
        </div>

    );
}
export default Profile;