import React from 'react';
import axios from 'axios';

function Logout() {
  const handleLogout = () => {
    axios.post('/logout') // Replace with actual logout route
      .then(response => {
        console.log(response.data.message);
        // Handle successful logout
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle logout error
      });
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
