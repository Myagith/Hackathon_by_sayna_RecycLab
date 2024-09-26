import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, googleProvider, facebookProvider } from '../config/firebaseConfig'; 
import { signInWithPopup } from 'firebase/auth';
import googleLogo from '../images/google.jpeg'; 
import facebookLogo from '../images/facebook.jpeg';

import '../styles/LoginForm.css';

const LoginPage = () => {
  const navigate = useNavigate(); // Initialise le hook de navigation

  // Connexion avec Google
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('Connexion réussie avec Google:', result.user);
      navigate('/'); // Redirection après connexion réussie
    } catch (error) {
      console.error('Erreur lors de la connexion avec Google:', error);
      alert('Erreur lors de la connexion avec Google. Veuillez réessayer.');
    }
  };

  // Connexion avec Facebook
  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      console.log('Connexion réussie avec Facebook:', result.user);
      navigate('/'); // Redirection après connexion réussie
    } catch (error) {
      console.error('Erreur lors de la connexion avec Facebook:', error);
      alert('Erreur lors de la connexion avec Facebook. Veuillez réessayer.');
    }
  };

  return (
    <div className="login-page-container">
      <h2>Connexion</h2>

      <form className="login-page-form">
        <div className="login-form-group">
          <label htmlFor="identifier">Adresse e-mail ou numéro de téléphone</label>
          <input
            type="text"
            id="identifier"
            placeholder="Entrez votre email ou numéro de téléphone"
          />
        </div>
        <div className="login-form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            placeholder="Entrez votre mot de passe"
          />
        </div>
        <button type="submit" className="login-page-button">
          Se connecter
        </button>
      </form>

      <div className="login-social-buttons">
        <button className="login-google-button" onClick={handleGoogleLogin}>
          <img src={googleLogo} alt="Google" className="social-logo" /> {/* Logo Google */}
        </button>
        <button className="login-facebook-button" onClick={handleFacebookLogin}>
          <img src={facebookLogo} alt="Facebook" className="social-logo" /> {/* Logo Facebook */}
        </button>
      </div>

      <div className="login-form-links">
        <Link to="/signup" className="login-create-account">
          Créer un compte ?
        </Link>
        <span className="login-link-separator">•</span>
        <Link to="/forgot-password" className="login-forgot-password">
          Mot de passe oublié ?
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
