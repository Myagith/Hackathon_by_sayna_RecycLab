import React, { useState } from 'react';
import '../styles/SignupForm.css';

const SignupPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [commune, setCommune] = useState('');
  const [status, setStatus] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("Veuillez accepter les termes de confidentialité.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    console.log('Inscription:', { firstName, lastName, email, password, commune, status });
  };

  return (
    <div className="signup-page">
      <div className="header">
        <h2>S'inscrire</h2>
        <h2>C'est simple et rapide</h2>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="name-row">
            <div className="form-group">
              <label className="text">Nom :</label>
              <input 
                type="text" 
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)} 
                placeholder="Entrez votre nom" 
                required 
              />
            </div>
            <div className="form-group">
              <label className="text">Prénom :</label>
              <input 
                type="text" 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)} 
                placeholder="Entrez votre prénom" 
                required 
              />
            </div>
          </div>

          <div className="form-group">
            <label className="text">Commune :</label>
            <input 
              type="text" 
              value={commune} 
              onChange={(e) => setCommune(e.target.value)} 
              placeholder="Entrez votre commune" 
              required 
            />
          </div>
          <div className="form-group">
            <label className="text">Email :</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Entrez votre email" 
              required 
            />
          </div>
          <div className="form-group">
            <label className="text">Mot de passe :</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Entrez votre mot de passe" 
              required 
            />
          </div>
          <div className="form-group">
            <label className="text">Confirmer le mot de passe :</label>
            <input 
              type="password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              placeholder="Confirmez votre mot de passe" 
              required 
            />
          </div>
          
          <div className="form-group">
            <label>Statut :</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)} required>
              <option value="" disabled>Sélectionnez votre statut</option>
              <option value="utilisateur">Utilisateur</option>
              <option value="actionnaire">Actionnaire</option>
            </select>
          </div>

          <div className="form-group checkbox-group">
            <input 
              type="checkbox" 
              checked={termsAccepted} 
              onChange={(e) => setTermsAccepted(e.target.checked)} 
              required 
             id="terms" /* Ajout d'un ID pour l'accessibilité */
           />
           <label htmlFor="terms"> J'accepte les <a href="/confidentialite">termes de confidentialité</a>.</label>
          </div>

          <button type="submit">S'inscrire</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
