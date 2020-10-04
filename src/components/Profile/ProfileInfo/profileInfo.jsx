// @flow
import React from 'react';
import s from './profileInfo.module.css';

const ProfileInfo = () => {
    return  <div className={s.background}>

        <div>
            <img className={s.imgHeader} src='https://avatars.mds.yandex.net/get-pdb/1982708/433476a3-3399-447c-92f1-b655afef4989/s1200' />
        </div>
        <div>
            <img className={s.imgHeaderAvatar} src='https://boxideas.ru/wp-content/uploads/2019/02/777e5bb92bbd7ddfefef003330560f50.png' />
        </div>

    </div>
}

export default ProfileInfo;