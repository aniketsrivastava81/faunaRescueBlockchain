import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    axios.post('/contact', { name, email, message })
      .then(response => {
        console.log(response.data.message);
        // Handle successful form submission
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle form submission error
      });
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <textarea placeholder="Message" onChange={e => setMessage(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default ContactForm;
