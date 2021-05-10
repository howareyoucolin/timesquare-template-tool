import React from 'react';
import Button from '~src/elements/Button';
import './sidebar.scss';

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <Button buttonClass="purple">+ New Template</Button>

      <div className="categories">
        <h3>Pages</h3>
        <ul>
          <li className="active">All Pages</li>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Menu</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="categories">
        <h3>Modules</h3>
        <ul>
          <li className="active">All Modules</li>
          <li>Cards</li>
          <li>Menu</li>
          <li>Map</li>
          <li>Gallery</li>
          <li>Reviews</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
