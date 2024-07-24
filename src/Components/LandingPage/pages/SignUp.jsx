import React, { useState } from 'react';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f7fafc',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      backgroundColor: '#fff',
      padding: '2rem',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '28rem',
    },
    heading: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      textAlign: 'center',
      color: '#2d3748',
    },
    formGroup: {
      marginBottom: '1rem',
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      color: '#4a5568',
    },
    input: {
      width: '100%',
      padding: '0.5rem 1rem',
      border: '1px solid #e2e8f0',
      borderRadius: '0.375rem',
      outline: 'none',
      transition: 'border-color 0.2s',
    },
    inputFocus: {
      borderColor: '#38a169',
      boxShadow: '0 0 0 2px rgba(56, 161, 105, 0.25)',
    },
    button: {
      width: '100%',
      backgroundColor: '#215759',
      color: '#fff',
      padding: '0.5rem 0',
      borderRadius: '0.375rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
    },
    buttonHover: {
      backgroundColor: '#2f855a',
    },
    text: {
      marginTop: '1.5rem',
      textAlign: 'center',
      color: '#4a5568',
    },
    link: {
      color: 'blue',
      textDecoration: 'none',
      transition: 'text-decoration 0.2s',
    },
    linkHover: {
      textDecoration: 'underline',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
              onFocus={(e) => e.target.style = { ...styles.input, ...styles.inputFocus }}
              onBlur={(e) => e.target.style = styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              onFocus={(e) => e.target.style = { ...styles.input, ...styles.inputFocus }}
              onBlur={(e) => e.target.style = styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              onFocus={(e) => e.target.style = { ...styles.input, ...styles.inputFocus }}
              onBlur={(e) => e.target.style = styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="confirmPassword" style={styles.label}>Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={styles.input}
              onFocus={(e) => e.target.style = { ...styles.input, ...styles.inputFocus }}
              onBlur={(e) => e.target.style = styles.input}
              required
            />
          </div>
          <button
            type="submit"
            style={styles.button}
            onMouseEnter={(e) => e.currentTarget.style = { ...styles.button, ...styles.buttonHover }}
            onMouseLeave={(e) => e.currentTarget.style = styles.button}
          >
            Sign Up
          </button>
        </form>
        <p style={styles.text}>
          Already have an account? <a href="/login" style={styles.link} onMouseEnter={(e) => e.currentTarget.style = { ...styles.link, ...styles.linkHover }} onMouseLeave={(e) => e.currentTarget.style = styles.link}>Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
