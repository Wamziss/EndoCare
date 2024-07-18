import React from 'react';
import image from '../../../assets/insight1.jpg';

function Resources() {
  const resourceStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    fontFamily: 'DM Sans',
    boxShadow: '0 0px 0px rgba(0, 0, 0, 0.1)',
    width:'300px',
    height:'150hv'
  };

  const titleStyle = {
    fontFamily: 'El Messiri',
    fontSize: '24px',
    marginBottom: '20px'
  };

  const choiceStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '20px'
  };

  const cardStyle = {
    width: '200px',
    padding: '40px 40px',
    backgroundColor: '#fff7cc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    marginBottom: '20px'
  };

  const textStyle = {
    fontFamily: 'DM Sans',
    fontSize: '14px'
  };

  const buttonStyle = {
    display: 'inline-block',
    marginTop: '10px',
    padding: '8px 16px',
    backgroundColor: '#215759',
    color: '#fff',
    borderRadius: '4px',
    cursor: 'pointer',
    textDecoration: 'none',
    fontFamily: 'Roboto',
    fontSize: '14px'
  };

  return (
    <div style={resourceStyle}>
      <h3 style={titleStyle}>Resources</h3>
      <div style={choiceStyle}>
        <ul style={{ display: 'flex', gap: '10px', listStyleType: 'none', padding: 0 }}>
          <li>All</li>
        </ul>
      </div>
      <div>
      <li>Recommended</li>
        <div style={cardStyle}>
          <img src={image} alt="Resource" width={100} />
          <p style={textStyle}>Small description about this resource..</p>
          <span style={buttonStyle}>View →</span>
        </div>
        <li>Books</li>
        <div style={cardStyle}>
          <img src={image} alt="Resource" width={100} />
          <p style={textStyle}>Small description about this resource..</p>
          <span style={buttonStyle}>View →</span>
        </div>
        <li>Blogs</li>
        <div style={cardStyle}>
          <img src={image} alt="Resource" width={100} />
          <p style={textStyle}>Small description about this resource..</p>
          <span style={buttonStyle}>View →</span>
        </div>
        <li>Articles</li>
        <div style={cardStyle}>
          <img src={image} alt="Resource" width={100} />
          <p style={textStyle}>Small description about this resource..</p>
          <span style={buttonStyle}>View →</span>
        </div>
      </div>
    </div>
  );
}

export default Resources;
