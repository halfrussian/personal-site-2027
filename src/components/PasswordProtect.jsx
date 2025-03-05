import React, { useState, useEffect } from 'react';
import App from '../App'; // Adjust the import path as needed
import { Box, Button, TextInput } from "@primer/react";

const PasswordProtect = () => {
  const [pass, setPass] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem('authenticated') === 'true'
  );

  useEffect(() => {
    // Clear sessionStorage when the user closes the tab/window
    const handleUnload = () => sessionStorage.removeItem('authenticated');

    window.addEventListener('beforeunload', handleUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, []);

  const handleLogin = () => {
    if (pass === 'tetragrammaton') {
      sessionStorage.setItem('authenticated', 'true');
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  if (isAuthenticated) {
    return (
      <Box sx={{ backgroundColor: 'canvas.subtle' }}>
        <App />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
        backgroundColor: 'canvas.default',
      }}
    >
      <TextInput
        placeholder="Enter password"
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        sx={{ mb: 3, width: '300px' }}
      />
      <Button onClick={handleLogin}>Submit</Button>
    </Box>
  );
};

export default PasswordProtect;