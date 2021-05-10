import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import './card.scss';

const Card = ({ id, image_url, title, description }) => {
  image_url = image_url || '/images/placeholder.jpg';
  return (
    <div className="Template-Card" style={{ background: `url(${image_url}) center center` }}>
      <div className="overlay">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className="foot">
        <span>
          <Link to={`/delete/${id}`}>
            <FontAwesomeIcon icon={faWindowClose} />
          </Link>
        </span>
        <span>
          <Link to={`/edit/${id}`}>
            <FontAwesomeIcon icon={faEdit} />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Card;
