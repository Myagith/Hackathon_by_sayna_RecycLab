import React, { useState } from 'react';
import '../styles/SignupForm.css';

const SignupPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [commune, setCommune] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour gérer l'inscription ici (API call, validation, etc.)
    if (password === confirmPassword) {
      console.log('Inscription:', { firstName, lastName, email, password, commune });
      // Appeler l'API pour enregistrer l'utilisateur
    } else {
      alert("Les mots de passe ne correspondent pas.");
    }
  };

  return (
    <div className="signup-container">
    
      
      <form onSubmit={handleSubmit}>
      <h2 style={{ fontSize: '3em', position: 'absolute', top: '20px', left: '20px' }}>S'inscrire</h2>
      <h2 style={{ fontSize: '3em', position: 'absolute', top: '80px', left: '20px' }}>C'est simple et rapide</h2>


        <div>
          <label>Nom :</label>
          <input 
            type="text" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
            placeholder="Entrez votre nom" 
            required 
          />
        </div>
        <div>
          <label>Prénom :</label>
          <input 
            type="text" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
            placeholder="Entrez votre prénom" 
            required 
          />
        </div>
        <div>
          <label>Commune :</label>
          <input 
            type="text" 
            value={commune} 
            onChange={(e) => setCommune(e.target.value)} 
            placeholder="Entrez votre commune" 
            required 
          />
        </div>
        <div>
          <label>Email :</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Entrez votre email" 
            required 
          />
        </div>
        <div>
          <label>Mot de passe :</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Entrez votre mot de passe" 
            required 
          />
        </div>
        <div>
          <label>Confirmer le mot de passe :</label>
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            placeholder="Confirmez votre mot de passe" 
            required 
          />
        </div>
        
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default SignupPage;
