import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import './Header.scss';

export default ({ user, onLogout }) => {
  return (
    <header className="header">
      <div className="logo">logo</div>
      <div className="user-info">
        {user && (
          <Link to="/profile">
            <div className="header-user">
              <div className="header-user__avatar">
                {/* <img src={user.photoURL} alt="user-img"/> */}
              </div>
              <div className="header-user__fullmame">
                {user.displayName}
              </div>
            </div>
          </Link>
        )}
        <Button variant="danger" onClick={onLogout}>Sign out</Button>
      </div>
    </header>
  )
}