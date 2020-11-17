import React from 'react';
import photo from "../images/malecon.jpg";

const Profile = () => {
  return (
    <main className="main">
      <img src={ photo } alt="Top photo" className="main__top-image" />
      <div className="main__user">
        <img src="https://cdn.piccollage.com/imageassets/cfa1686c8b926919fc359e3886684b6e/original.png" alt="User photo" className="main__user-ava" />
        <div className="main__user-info">
          <p className="main__user-name">Aleksanchello</p>
          <p className="main__user-birth-day">Date of Birth: 15.05.1990</p>
          <p className="main__user-city">City: City</p>
          <p className="main__user-education">Education: Ya.Praktikum</p>
          <p className="main__user-site">Website: <a href="https://github.com/perkenton" className="main__user-site-link">www.github.com/perkenton</a></p>
        </div>
      </div>

      <div className="main__posts">
        <div className="main__new-post">

        </div>
        <div className="main__post">

        </div>
      </div>

    </main>
  );
}

export default Profile;