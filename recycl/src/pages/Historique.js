import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from '../styles/Home.module.css';
import '../styles/historique.css';
const Historique = () => {
  const historiqueItems = [
    { date: '13/02/2024', location: 'Cocody' },
    { date: '31/01/2024', location: 'Cocody' },
    { date: '30/01/2024', location: 'Cocody' },
    { date: '27/01/2024', location: 'Cocody' },
    { date: '23/01/2024', location: 'Cocody' },
    { date: '12/01/2024', location: 'Cocody' },
  ];

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
        <section className={styles.historique}>
          {historiqueItems.map((item, index) => (
            <div key={index} className={styles.historiqueItem}>
              <p>
                <strong>Ramassage</strong> <br />
                Vous avez effectué un ramassage le {item.date} dans la commune de {item.location}
              </p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Historique;
