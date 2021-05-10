import React from 'react';
import './textArea.scss';

const TextArea = ({ label, name, height }) => {
  height = height ? `${height}px` : '100px';
  return (
    <div className="Text-Area">
      {label && <label>{label}</label>}
      <br />
      <textarea name={name} style={{ height: height }}></textarea>
    </div>
  );
};

export default TextArea;
