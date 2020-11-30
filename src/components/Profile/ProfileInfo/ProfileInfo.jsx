import React from 'react';
import photo from '../../../images/malecon.jpg';
import userPhoto from '../../../images/user-photo.png';
import './ProfileInfo.scss';

const ProfileInfo = () => {
  return (
    <>
      <div className="profile__top-image-wrapper">
        <img src={ photo } alt="Top photo" className="profile__top-image" />
      </div>

      <div className="profile__user">
        <img src={ userPhoto } alt="User photo" className="profile__user-photo" />
        <div className="profile__user-info">
          <p className="profile__user-name">Aleksanchello</p>
          <p className="profile__user-birth-day">Date of Birth: 15.05.1990</p>
          <p className="profile__user-city">City: City</p>
          <p className="profile__user-education">Education: Ya.Praktikum</p>
          <p className="profile__user-site">Website: <a href="https://github.com/perkenton" className="profile__user-site-link">www.github.com/perkenton</a></p>
        </div>
      </div>
    </>
  );
}

export default ProfileInfo;