import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './search.scss';

const Search = () => {
  return (
    <div className="Template-Search">
      <input type="text" placeholder="Search templates" />
      <span>
        <FontAwesomeIcon icon={faSearch} />
      </span>
    </div>
  );
};

export default Search;
