import React from 'react';
import Button from '~src/elements/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './moduleToImport.scss';

const ModuleToImoprt = () => {
  const modules = [
    { name: 'menu', title: 'Menu', selected: false },
    { name: 'gallery', title: 'Photo Gallery', selected: false },
    { name: 'article_1', title: 'Article 1', selected: false },
    { name: 'card_2', title: 'Card 2', selected: true },
    { name: 'card_3', title: 'Card 3', selected: true },
    { name: 'card_4', title: 'Card 4', selected: false },
    { name: 'section_start', title: 'Section Start', selected: true },
  ];

  return (
    <div className="Module-To-Imoprt">
      <label>Module to import</label>
      <div>
        {modules.map(module => {
          const { name, title, selected } = module;
          return (
            <div key={name} className="check-button">
              <Button buttonClass={`inline ${selected ? 'green' : 'white'}`}>
                <FontAwesomeIcon icon={faCheckCircle} /> {title}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ModuleToImoprt;
