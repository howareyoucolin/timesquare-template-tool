import React from 'react';
import { withRouter } from 'react-router-dom';
import './button.scss';

const Button = ({ history, url = '#', children: text, buttonClass }) => {
  return (
    <button
      type="button"
      onClick={() => {
        history.push(url);
      }}
      className={`Button ${buttonClass}`.trim()}
    >
      {text}
    </button>
  );
};

export default withRouter(Button);
