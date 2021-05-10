import React from 'react';
import './selectBox.scss';

const SelectBox = ({ label, name, children: content }) => {
  return (
    <div className="Select-Box">
      {label && <label>{label}</label>}
      <br />
      <select name={name}>{content}</select>
    </div>
  );
};

export default SelectBox;
