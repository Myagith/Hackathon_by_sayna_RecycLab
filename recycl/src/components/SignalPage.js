import React, { useState } from "react";
import CameraCapture from "../pages/CameraCapture";
import DescriptionForm from '../pages/DescriptionForm';
import LocationPicker from "../pages/LocationPicker";
import { Link } from 'react-router-dom'; 
import styles from '../styles/Home.module.css';
import   '../styles/signal.css';

const SignalPage = () => {
    const [location, setLocation] = useState(null);
    const [image, setImage] = useState(null);

    const handleSubmit = () => {
        // Envoyer les données à l'API ou à un service backend
        console.log("Signalement envoyé :", { location, image });
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
                        <li className={styles.navItem}><Link to="/Signalpage">Signaler</Link></li>
                        <li className={styles.navItem}><Link to="/Historique">Historique</Link></li>
                        <li className={styles.navItem}><Link to="/calendar">Calendrier</Link></li>
                        <li className={styles.navItem}><Link to="/avis">Avis d'utilisateur</Link></li>
                    </ul>
                </nav>

                <Link to="/Login">
                    <button className={styles.logoutBtn}>Connexion</button>
                </Link>
            </header>

            <div className="signalpag">
                <h1>Signalement de Décharge</h1>
                <CameraCapture onCapture={setImage} />
                <DescriptionForm onSubmit={handleSubmit} />
                <LocationPicker setLocation={setLocation} />
                {image && <img src={image} alt="Captured" />}
                <button onClick={handleSubmit} className="envok">Envoyer le Signalement</button>
            </div>
        </div>
    );
};

export default SignalPage;
