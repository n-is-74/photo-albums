import React from 'react';
import NavBar from './ui/NavBar';

export default function App({ children, user }) {
  return (
    <div>
      <NavBar user={user} />

      {children}
    </div>
  );
}
