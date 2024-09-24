import React from 'react';
import styles from '../styles/Home.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoHighlight}>R</span>ecycLab
        </div>
        <button className={styles.logoutBtn}>Déconnexion</button>
      </header>
      <main>
        <h1 className={styles.title}>Ensemble pour un avenir plus propre !</h1>
        <div className={styles.imageRow}>
          <div className={styles.imagePlaceholder}> </div>
          <div className={styles.imagePlaceholder}></div>
          <div className={styles.imagePlaceholder}></div>
        </div>
        <h2 className={styles.subtitle}>Rejoignez-nous dans notre mission !</h2>
        <p className={styles.missionText}>
          Chaque geste compte : en triant vos déchets et en adoptant des pratiques durables, 
          vous contribuez à préserver notre planète pour les générations futures.
        </p>
      </main>
    </div>
  );
};

export default HomePage;