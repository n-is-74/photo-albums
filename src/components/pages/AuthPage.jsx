import React from 'react';
import LoginPage from './LoginPage';

function AuthPage() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh',
      }}
    >
      <div style={{ marginBottom: '20px' }}>
        <LoginPage />
      </div>
      <div>
        <a
          href="/"
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease',
          }}
        >
          Зарегистрироваться
        </a>
      </div>
    </div>
  );
}

export default AuthPage;
