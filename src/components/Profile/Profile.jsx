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
              <p>Tecnologo en Electronica Industrial, especialista en Sistemas de Gestion de Calidad y Metrología. Actualmente estudiante del programa Top de <span>Make it Real</span> "Full Stack Web Developer". Comprometido con mi crecimiento personal y desarrollo profesional.</p>
            </div>
            <div className={styles.profile__list}>
              <h1>Aprendido en el Programa:</h1>
              <ul>
                <li>He profundizado mi conocimiento en herramientas y conceptos de HTML, CSS, Javascript y React.</li>
                <li>Gracias a las clases de habilidades blandas, entiendo las condiciones de esta profesion, aplico y fortalezco en mi dichas habilidades.</li>
                <li>Desarrollo retos, misiones y proyectos con mas fluidez, organización y pensamiento lógico.</li>
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

