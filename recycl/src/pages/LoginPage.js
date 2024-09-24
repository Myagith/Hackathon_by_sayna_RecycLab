import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginForm.css'; // Assurez-vous que le chemin est correct

const LoginPage = () => {
  return (
    <div className="login-container">
      <h1 className="login-title">Bienvenue sur Recyclab ! Connectez-vous.</h1>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="identifier">Adresse e-mail ou numéro de tél</label>
          <input
            type="text"
            id="identifier"
            placeholder="Entrez votre email ou numéro de téléphone"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            placeholder="Entrez votre mot de passe"
          />
        </div>
        <button type="submit" className="login-button">Se connecter</button>
      </form>
      <div className="form-links">
        <Link to="/signup" className="create-account">Créer un compte?</Link>
        <span className="link-separator">•</span>
        <Link to="/forgot-password" className="forgot-password">Mot de passe oublié ?</Link>
      </div>
    </div>
  );
};

export default LoginPage;