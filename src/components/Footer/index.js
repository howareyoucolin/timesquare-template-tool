import React from 'react';
import Button from '~src/elements/Button';
import './footer.scss';

const Footer = () => {
  return (
    <footer>
      <Button buttonClass="inline">Cancel</Button>
      <Button buttonClass="purple inline">Add</Button>
      <Button buttonClass="green inline">Replace</Button>
    </footer>
  );
};

export default Footer;
