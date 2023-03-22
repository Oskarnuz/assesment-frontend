import React from 'react';
import Image from '../../assets/image.jpeg'
import styles from '../Profile/Profile.module.css' 

const Profile = () => {
  return (
    <React.Fragment>
      <main className={styles.profile__ctn}>
        <section className={styles.profile}>
          <div className={styles.profile__title}>
            <h1>Oscar Javier Nuñez</h1>
          </div>
          <div className={styles.profile__img}>
            <img src={Image} alt="profile" />
          </div>
          <div className={styles.profile__info}>      
            <div className={styles.profile__description}>
              <p>Technologist in Industrial Electronics, specialist in Quality Management Systems and Metrology. Currently a student of the Make it Real Top Program "Full Stack Web Developer". Committed to my personal growth and professional development.</p>
            </div>
            <div className={styles.profile__list}>
              <h1>Learned in the Program:</h1>
              <ul>
                <li>I have deepened my knowledge in tools and concepts of HTML, CSS, Javascript and React.</li>
                <li>Thanks to the soft skills classes, I understand the conditions of this profession, I apply and strengthen these skills in myself.</li>
                <li>I develop challenges, missions and projects with more fluidity, organization and logical thinking.</li>
              </ul>
            </div>
            <div className={styles.profile__contact}>
              <p>oscar.nunez07@hotmail.com</p>
              <a href="https://github.com/Oskarnuz">https://github.com/Oskarnuz</a>
            </div>
          </div>

        </section>
      </main>
    </React.Fragment>
  );
}
 
export default Profile;

