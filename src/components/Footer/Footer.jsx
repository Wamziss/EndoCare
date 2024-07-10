import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#8fbc8f', // green
      color: '#fff',
      padding: '2rem 0',
    },
    container: {
      maxWidth: '1140px',
      margin: '0 auto',
      padding: '0 1rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '2rem',
    },
    gridMd: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '2rem',
    },
    heading: {
      fontSize: '1.125rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      fontFamily: 'El Messiri',
    },
    linkList: {
      listStyle: 'none',
      padding: '0',
      margin: '0',
    },
    listItem: {
      marginBottom: '0.5rem',
      fontFamily: 'DM Sans',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      transition: 'color 0.2s',
    },
    linkHover: {
      color: '#fbbf24', // lightYellow
    },
    socialList: {
      display: 'flex',
      listStyle: 'none',
      padding: '0',
      margin: '0',
      gap: '1rem',
    },
    socialIcon: {
      color: '#2d3748', // primaryColor
      fontSize: '1.5rem',
      transition: 'color 0.2s',
    },
    socialIconHover: {
      color: '#fbbf24', // lightYellow
    },
    text: {
      color: '#a0aec0', // gray-400
      textAlign: 'center',
      marginTop: '2rem',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={window.innerWidth >= 768 ? styles.gridMd : styles.grid}>
          <div>
            <h3 style={styles.heading}>Quick Links</h3>
            <ul style={styles.linkList}>
              <li style={styles.listItem}><a href="/" style={styles.link} onMouseEnter={(e) => e.target.style.color = styles.linkHover.color} onMouseLeave={(e) => e.target.style.color = styles.link.color}>Home</a></li>
              <li style={styles.listItem}><a href="/services" style={styles.link} onMouseEnter={(e) => e.target.style.color = styles.linkHover.color} onMouseLeave={(e) => e.target.style.color = styles.link.color}>Services</a></li>
              <li style={styles.listItem}><a href="/blog" style={styles.link} onMouseEnter={(e) => e.target.style.color = styles.linkHover.color} onMouseLeave={(e) => e.target.style.color = styles.link.color}>Blog</a></li>
              <li style={styles.listItem}><a href="/contact" style={styles.link} onMouseEnter={(e) => e.target.style.color = styles.linkHover.color} onMouseLeave={(e) => e.target.style.color = styles.link.color}>Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 style={styles.heading}>Contact Info</h3>
            <p>123 Main Street, City, Country</p>
            <p>Email: info@endocare.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
          <div>
            <h3 style={styles.heading}>Follow Us</h3>
            <ul style={styles.socialList}>
              <li><a href="#" style={styles.socialIcon} onMouseEnter={(e) => e.currentTarget.style.color = styles.socialIconHover.color} onMouseLeave={(e) => e.currentTarget.style.color = styles.socialIcon.color}><FaFacebookF /></a></li>
              <li><a href="#" style={styles.socialIcon} onMouseEnter={(e) => e.currentTarget.style.color = styles.socialIconHover.color} onMouseLeave={(e) => e.currentTarget.style.color = styles.socialIcon.color}><FaTwitter /></a></li>
              <li><a href="#" style={styles.socialIcon} onMouseEnter={(e) => e.currentTarget.style.color = styles.socialIconHover.color} onMouseLeave={(e) => e.currentTarget.style.color = styles.socialIcon.color}><FaInstagram /></a></li>
            </ul>
          </div>
        </div>
        <p style={styles.text}>© 2024 EndoCare. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
