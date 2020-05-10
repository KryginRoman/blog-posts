import React from 'react';

import './NavLink.scss';

export default ({ text, active, onClick }) => {
  const classList = ['nav-link']

  if (active) classList.push('nav-link_active');
  
  return (
    <button className={classList.join(" ")} onClick={onClick}>{text}</button>
  )
}