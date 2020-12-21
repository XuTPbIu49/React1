import React from 'react';
import s from './Profile.module.css';
import Mypost from "./Mypost/Mypost";


let Profile = () => {
    return (
        <div>
            <div>
                <div>
                    <img className={s.bar}
                         src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"/>
                </div>
                <div className={s.InfoProfile}>
                    <img className={s.avatar}
                         src="https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg"/>
                    <div className={s.InfoUser}>info</div>
                </div>
            </div>
            <Mypost/>
        </div>

    );
}

export default Profile;