import React from 'react';
import s from './Profile.module.css';
import Mypost from "./Mypost/Mypost";


const Profile = () => {
    return (
        <div>
            <div className={s.InfoProfile}>
                <img className={s.bar}
                     src="https://cdn.pixabay.com/photo/2019/06/02/22/08/narrow-boats-4247673_960_720.jpg"/>
                <img className={s.avatar}
                     src="http://www.youloveit.ru/uploads/posts/2020-04/1586360554_youloveit_ru_dipper_gravity_falls_na_avu01.jpg"/>
                <div className={s.InfoUser}>
                    <div className={s.UserName}>
                        Имя Пользователя
                    </div>
                    <div className={s.posts}>
                        <Mypost/>
                    </div>
                    <div className={s.info}>
                        Информация!
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Profile;