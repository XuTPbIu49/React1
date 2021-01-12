import React from "react";
import s from "./ProfileInfo.module.css"
import defavatar from "../../../im/avatar.jpg";


const ProfileInfo = () => {
    return (
    <div className={s.InfoProfile}>
        <div className={s.InfoUser}>
            <img className={s.avatar}
                 src={defavatar}/>
            <div className={s.UserName}>
                Имя Пользователя
            </div>
            <div className={s.info}>
                info
            </div>
        </div>
    </div>
    );
}
export default ProfileInfo;