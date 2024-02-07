import React from 'react';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

export default function AuthPage() {
  return (
    <div>
      <div>
        Войти
        <LoginPage />
      </div>
      <div>
        Зарегестрироваться
        <SignupPage />
      </div>
    </div>
  );
}
