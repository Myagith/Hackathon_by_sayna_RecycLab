import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../styles/CalendarPage.css'; // Fichier CSS pour styliser la page
import 'react-calendar/dist/Calendar.css'; // Styles spécifiques au calendrier
import styles from '../styles/Home.module.css';

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
