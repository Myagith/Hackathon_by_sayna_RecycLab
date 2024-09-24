import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from '../styles/Home.module.css';

import image1 from '../images/image1.jpg'; 
import image2 from '../images/image2.jpg'; 
import image4 from '../images/image4.jpg'; 
import Footer from '../pages/Footer'; 


const HomePage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoHighlight}>R</span>ecycLab
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}><Link to="/">Accueil</Link></li>
            <li className={styles.navItem}><Link to="/Signaler">Signaler</Link></li>
            <li className={styles.navItem}><Link to="/Historique">Historique</Link></li>
            <li className={styles.navItem}><Link to="/calendar">Calendrier</Link></li>
            <li className={styles.navItem}><Link to="/avis">Avis d'utilisateur</Link></li>
          </ul>
        </nav>

        <Link to="/Login">
          <button className={styles.logoutBtn}>Connexion</button>
        </Link>
      </header>
      <main>
        <h1 className={styles.title}>Ensemble pour un avenir plus propre !</h1>
        <div className={styles.imageRow}>
        <div className={styles.imagePlaceholder}>
            <img src={image1} alt="Description de l'image 1" />
          </div>
          <div className={styles.imagePlaceholder}>
            <img src={image2} alt="Description de l'image 2" />
          </div>
          <div className={styles.imagePlaceholder}>
            <img src={image4} alt="Description de l'image 4" />
          </div>
        </div>
        <h2 className={styles.subtitle}>Rejoignez-nous dans notre mission !</h2>
        <p className={styles.missionText}>
          Chaque geste compte : en triant vos déchets et en adoptant des pratiques durables, 
          vous contribuez à préserver notre planète pour les générations futures.
        </p>
      </main>
      <Footer />
    </div>

  );
};

export default HomePage;
