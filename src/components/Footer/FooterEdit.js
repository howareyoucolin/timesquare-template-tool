import React from 'react';
import Button from '~src/elements/Button';
import './footer.scss';

const FooterEdit = () => {
  return (
    <footer>
      <Button buttonClass="inline">Cancel</Button>
      <Button buttonClass="green inline">Submit</Button>
    </footer>
  );
};

export default FooterEdit;
