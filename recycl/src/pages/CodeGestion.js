import React, { useState } from 'react';
import  '../styles/codegestion.css';

function Inscription() {
    const [code, setCode] = useState('');
  
    const handleInputChange = (e) => {
      setCode(e.target.value);
    };
  
    const handleValidateClick = () => {
      // Logique pour valider le code (gestionnaire)
      alert(`Code soumis : ${code}`);
    };
  
    return (
    <div className='bodycode'>
        <div className="compte-flot">
          <h1>S'inscrire, c'est simple et rapide</h1>
  
             <div className="form-container">
               <div className="code-box">
                 <h2>Entrez votre Code</h2>
                  <h2>(gestionnaire)</h2>
                   <input
              type="text"
              id="codeInput"
              placeholder="Votre code ici"
              value={code}
              onChange={handleInputChange}
              required
                />
                 <button id="validateButton" onClick={handleValidateClick}>
                  Valider
                 </button>
                </div>
               </div>
             </div>
             </div>
    );
  }
  
  export default Inscription;