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
    <section className="vh-100" style={{ backgroundColor: '#508bfc' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Se connecter</h3>

                <form className="login-page-form">
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="identifier"
                      className="form-control form-control-lg"
                      placeholder="Entrez votre email ou numéro de téléphone"
                    />
                    <label className="form-label" htmlFor="identifier">Adresse e-mail ou numéro de téléphone</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="password"
                      className="form-control form-control-lg"
                      placeholder="Entrez votre mot de passe"
                    />
                    <label className="form-label" htmlFor="password">Mot de passe</label>
                  </div>
                  <div className="form-check d-flex justify-content-start mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="form1Example3"
                    />
                    <label className="form-check-label" htmlFor="form1Example3">
                      Se souvenir du mot de passe
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg btn-block">Se connecter</button>
                </form>

                <hr className="my-4"/>
                <div className='autre'>Ou connectez-vous avec</div>
                <div className="login-social-buttons">
  <button className="btn btn-lg btn-block btn-primary" onClick={handleGoogleLogin} style={{ backgroundColor: '#dd4b39', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <img src={googleLogo} alt="Google" className="social-logo me-2" style={{ marginRight: '10px', height: '24px' }} />
    Se connecter avec Google
  </button>
  <button className="btn btn-lg btn-block btn-primary" onClick={handleFacebookLogin} style={{ backgroundColor: '#3b5998', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <img src={facebookLogo} alt="Facebook" className="social-logo me-2" style={{ marginRight: '10px', height: '24px' }} />
    Se connecter avec Facebook
  </button>
</div>


                <div className="login-form-links mt-3">
                  <Link to="/signup" className="login-create-account">Créer un compte ?</Link>
                  <span className="login-link-separator">•</span>
                  <Link to="/forgot-password" className="login-forgot-password">Mot de passe oublié ?</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
