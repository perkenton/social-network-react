import React from 'react';
import photo from '../../../images/malecon.jpg';
import userPhoto from '../../../images/user-photo.png';
import styles from './ProfileInfo.module.scss';

const ProfileInfo = () => {
  return (
    <>
      <div className={ styles.topImageWrapper }>
        <img src={ photo } alt="Top photo" className={ styles.topImage } />
      </div>

      <div className={ styles.userInfoBlock}>
        <img src={ userPhoto } alt="User photo" className={ styles.userPhoto } />
        <div>
          <p className={ styles.userName }>Aleksanchello</p>
          <p className={ styles.userInfoItem }>
            <span className={ styles.secondaryText }>Дата рождения </span>
            <span className={ styles.primaryText }>01.01.1970</span>
          </p>
          <p className={ styles.userInfoItem }>
            <span className={ styles.secondaryText }>Город </span>
            <span className={ styles.primaryText }>Гдетоград</span>
          </p>
          <p className={ styles.userInfoItem }>
            <span className={ styles.secondaryText }>Образование </span>
            <span className={ styles.primaryText }>Ya.Praktikum</span>
          </p>
          <p className={ styles.userInfoItem }>
            <span className={ styles.secondaryText }>Сайт </span>
            <a href="https://github.com/perkenton" className={ styles.siteLink }>www.github.com/perkenton</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default ProfileInfo;