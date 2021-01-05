import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const LogForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(18);
  const [location, setLocation] = useState('');
  const [hasSubmitted, setSubmitted] = useState(false);
 
  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    
  }

    return (
      <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => {
              setName(e.target.value);
              setSubmitted(false);
            }} />
            
          </label>
        </div>

        <div>
          <label>
            Age:
            <input type="number" value={age} onChange={(e) => {
              setAge(e.target.value);
              setSubmitted(false);
            }} />
          </label>
        </div>

        <div>
          <label>
            Location:
            <input type="text" value={location} onChange={(e) => {
              setLocation(e.target.value);
              setSubmitted(false);
            }} />
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
      {hasSubmitted && <div>Thank you for submitting your form.</div>}
      </>
    );
    
}

ReactDOM.render(<LogForm />,document.getElementById('root'));
