import React, { useState } from 'react';
import styles from '../styles/DescriptionForm.module.css'; // Assure-toi de créer ce fichier CSS

const DescriptionForm = ({ onSubmit }) => {
  const [issue, setIssue] = useState(''); // Changement de l'état pour la sélection
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ issue, date, time }); // Envoi du choix de l'utilisateur
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label className={styles.label}>Type de problème :</label>
        <select
          className={styles.select}
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
        >
          <option value="" disabled>Sélectionnez une option</option>
          <option value="poubelle endommage">Poubelle endommagée</option>
          <option value="berne pleine">Berne pleine</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Date :</label>
        <input
          className={styles.input}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Heure :</label>
        <input
          className={styles.input}
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <button className={styles.submitButton} type="submit">Valider</button>
    </form>
  );
};

export default DescriptionForm;
