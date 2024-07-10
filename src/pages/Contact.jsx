import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData); // For demonstration purposes
    alert('Form submitted successfully!');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const styles = {
    section: {
      backgroundColor: '#f7f7f7',
      padding: '5rem 0',
    },
    container: {
      margin: '0 auto',
      padding: '0 1rem',
      textAlign: 'center',
    },
    heading: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      color: '#2d3748',
      marginBottom: '3rem',
      fontFamily: 'El Messiri',
    },
    form: {
      maxWidth: '30rem',
      margin: '0 auto',
    },
    formGroup: {
      marginBottom: '1.5rem',
    },
    label: {
      display: 'block',
      color: '#4a5568',
      fontWeight: '600',
      marginBottom: '0.5rem',
      fontFamily: 'DM Sans',
    },
    input: {
      width: '100%',
      padding: '0.5rem 1rem',
      border: '1px solid #e2e8f0',
      borderRadius: '0.375rem',
      outline: 'none',
      transition: 'border-color 0.2s',
    },
    textarea: {
      width: '100%',
      padding: '0.5rem 1rem',
      border: '1px solid #e2e8f0',
      borderRadius: '0.375rem',
      outline: 'none',
      transition: 'border-color 0.2s',
      resize: 'vertical',
    },
    button: {
      backgroundColor: '#38a169',
      color: 'white',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.375rem',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
      fontFamily: 'Roboto',
    },
    buttonHover: {
      backgroundColor: '#2f855a',
    },
  };

  return (
    <section id="contact-us" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Contact Us</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="message" style={styles.label}>Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows={6}
              style={styles.textarea}
              required
            />
          </div>
          <button
            type="submit"
            style={styles.button}
            onMouseEnter={e => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseLeave={e => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
