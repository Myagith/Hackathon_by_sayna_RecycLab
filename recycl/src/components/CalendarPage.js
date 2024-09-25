import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom'; 
import styles from '../styles/Home.module.css';
import '../styles/CalendarPage.css'; // Fichier CSS pour styliser la page
import 'react-calendar/dist/Calendar.css'; // Styles spécifiques au calendrier


const CalendarPage = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    console.log("Date sélectionnée:", newDate);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoHighlight}>R</span>ecycLab
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}><Link to="/">Accueil</Link></li>
            <li className={styles.navItem}><Link to="/SignalPage">Signaler</Link></li>
            <li className={styles.navItem}><Link to="/Historique">Historique</Link></li>
            <li className={styles.navItem}><Link to="/calendar">Calendrier</Link></li>
            <li className={styles.navItem}><Link to="/avis">Avis d'utilisateur</Link></li>
          </ul>
        </nav>

        <button className={styles.logoutBtn}>Déconnexion</button>
      </header>
    <div className="calendar-page">
      
      <div className="calendar-container">
        <Calendar
          onChange={handleDateChange}
          value={date}
        />
      </div>
      <p>Date sélectionnée : {date.toDateString()}</p>
    </div>
    </div>
  );
};

export default CalendarPage;
