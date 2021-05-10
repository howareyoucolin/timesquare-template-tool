import React from 'react';
import Button from '~src/elements/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faImage } from '@fortawesome/free-solid-svg-icons';
import './imageUpload.scss';

const ImageUpload = () => (
  <div className="Image-Upload">
    <label>Screenshot</label>
    <br />
    <div className="wrap">
      <div className="instruction">
        <span>
          <FontAwesomeIcon icon={faUpload} />
        </span>
        <br />
        Upload or drag &amp; drop image
      </div>
      <div className="select-image-button">
        <Button buttonClass="white">
          <FontAwesomeIcon icon={faImage} /> Select Image
        </Button>
      </div>
    </div>
    <p>Recommended image size: 960 x 600 px</p>
  </div>
);

export default ImageUpload;
