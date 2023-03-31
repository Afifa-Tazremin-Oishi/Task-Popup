import './App.css';
import React, { useState, useEffect } from 'react';

function TermsAndConditionsPopup(props) {
  const [showPopup, setShowPopup] = useState(true);

  const handleAgreeClick = () => {
    setShowPopup(false);
    localStorage.setItem('showPopup', 'false');
  }

  useEffect(() => {
    const storedValue = localStorage.getItem('showPopup');
    if (storedValue === 'false') {
      setShowPopup(false);
    }
  }, []);

  return (
    <div >
      <div className='myApp'>
      <h1>Hello!!!</h1>
      <h3>I am <span className='text-color'>Afifa Tazremin Oishi</span></h3>
      </div>
      {showPopup && (
        <div className="terms-and-conditions-popup">
          <p>Terms and conditions text goes here.</p>
          <button className='beautiful-button' onClick={handleAgreeClick}>Agree</button>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <TermsAndConditionsPopup />
      
    </div>
  );
}

export default App;