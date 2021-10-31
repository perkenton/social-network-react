import React from 'react';
import photo from '../../../images/malecon.jpg';
import userPhoto from '../../../images/user-photo.png';
import styles from './ProfileInfo.module.scss';

const ProfileInfo = () => {
  return (
    <>
      <div className={ styles.profile__topImageWrapper }>
        <img src={ photo } alt="Top photo" className={ styles.profile__topImage } />
      </div>

      <div className={ styles.profile__user}>
        <img src={ userPhoto } alt="User photo" className={ styles.profile__userPhoto } />
        <div className={ styles.profile__userInfo }>
          <p className={ styles.profile__userName }>Aleksanchello</p>
          <p className={ styles.profile__userBirthday }>Date of Birth: 15.05.1990</p>
          <p className={ styles.profile__userCity }>City: City</p>
          <p className={ styles.profile__userEducation }>Education: Ya.Praktikum</p>
          <p className={ styles.profile__userSite }>
            Website: <a href="https://github.com/perkenton" className={ styles.profile__userSiteLink }>www.github.com/perkenton</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default ProfileInfo;