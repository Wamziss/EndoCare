import React from 'react';

const Forum = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#fff'
  };

  const forumCardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff7cc',
    width: '100%',
    maxWidth: '600px'
  };

  const headerStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center'
  };

  const textStyle = {
    fontSize: '16px',
    textAlign: 'center',
    marginBottom: '20px'
  };

  return (
    <div style={containerStyle}>
      <div style={forumCardStyle}>
        <div style={headerStyle}>Real Time Chat Forum</div>
        <div style={textStyle}>Implementation of the forum's real-time chat will be added here.</div>
      </div>
    </div>
  );
}

export default Forum;
