import React from 'react';
import style from './Profile1.module.css';
import Mypost from "./Mypost/Mypost";


let Profile = () => {
  return (
    <div className={style.content}>
      <div >
        <div>
          <img className={style.bar} src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" />
        </div>
        <div className={style.InfoProfile}>
          <img className={style.avatar} src="https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg" />
          <div className={style.InfoUser}>info</div>
        </div>
      </div>
        <Mypost/>
    </div>

  );
}

export default Profile;