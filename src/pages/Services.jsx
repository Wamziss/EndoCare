import React from 'react';
import { FaHeartbeat, FaBook, FaUsers } from 'react-icons/fa';

const services = [
  {
    title: 'Medical Support',
    description: 'Access to comprehensive medical support and resources.',
    icon: <FaHeartbeat style={{ color: '#38a169', width: '3rem', height: '3rem', marginBottom: '1rem' }} />,
  },
  {
    title: 'Educational Resources',
    description: 'In-depth articles, guides, and resources about endometriosis.',
    icon: <FaBook style={{ color: '#38a169', width: '3rem', height: '3rem', marginBottom: '1rem' }} />,
  },
  {
    title: 'Community Support',
    description: 'Join a supportive community of women who understand your journey.',
    icon: <FaUsers style={{ color: '#38a169', width: '3rem', height: '3rem', marginBottom: '1rem' }} />,
  },
];

const Services = () => {
  const styles = {
    section: {
      backgroundColor: '#fff',
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
    servicesContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    serviceItem: {
      width: '100%',
      maxWidth: '33.333333%',
      padding: '1rem',
    },
    serviceCard: {
      backgroundColor: '#fefcbf',
      borderRadius: '0.375rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      transition: 'transform 0.3s, box-shadow 0.3s',
      fontFamily: 'DM Sans',
    },
    serviceCardHover: {
      transform: 'scale(1.05)',
      boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2)',
    },
    serviceTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#2d3748',
      marginBottom: '1rem',
    },
    serviceDescription: {
      color: '#718096',
    },
  };

  return (
    <section id="services" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Our Services</h2>
        <div style={styles.servicesContainer}>
          {services.map((service, index) => (
            <div key={index} style={styles.serviceItem}>
              <div
                style={styles.serviceCard}
                onMouseEnter={e => {
                  Object.assign(e.currentTarget.style, styles.serviceCardHover);
                }}
                onMouseLeave={e => {
                  Object.assign(e.currentTarget.style, styles.serviceCard);
                }}
              >
                {service.icon}
                <h3 style={styles.serviceTitle}>{service.title}</h3>
                <p style={styles.serviceDescription}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
