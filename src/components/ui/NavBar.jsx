import axios from 'axios';
import React from 'react';

export default function NavBar({ user }) {
  console.log(user);
  const logoutHandler = async () => {
    const res = await axios.post('/api/auth/logout');
    if (res.status === 200) {
      window.location.href = '/';
    }
  };
  return (
    <div>
      {' '}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {user?.id && (
                <li className="nav-item">
                  <a className="navbar-brand" href="/album">
                    Album
                  </a>
                </li>
              )}

              {/* <li className="nav-item">
            <a className="nav-link" href="/login">
              Aвторизация
            </a>
          </li> */}
              {user?.id ? (
                <li className="nav-item">
                  {/* <div>{`Добро пожаловать, ${user?.name}`}</div> */}
                  <a className="nav-link d" href="/logout" onClick={logoutHandler}>
                    Выход
                  </a>
                </li>
              ) : (
                <li className="nav-item">
                  <a className="nav-link" href="/auth">
                    Вход
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
