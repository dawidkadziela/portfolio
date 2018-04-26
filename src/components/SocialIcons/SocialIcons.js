import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SocialIcons = (props, context) => {
  const { theme: { colorPrimary } } = context;
  
  return (
    <div className="social-icons animate-icons">

        <a target="_blank" rel="noopener noreferrer" style={ { color: colorPrimary } }><i className="fab fa-html5"></i></a>

        <a target="_blank" rel="noopener noreferrer" style={ { color: colorPrimary } }><i className="fab fa-css3-alt"></i></a>

        <a target="_blank" rel="noopener noreferrer" style={ { color: colorPrimary } }><i className="fab fa-js-square"></i></a>

        <a target="_blank" rel="noopener noreferrer" style={ { color: colorPrimary } }><i className="fab fa-react"></i></a>

        <a target="_blank" rel="noopener noreferrer" style={ { color: colorPrimary } }><i className="fab fa-sass"></i></a>
               
        <hr/> 
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/dawidkadziela" style={ { color: colorPrimary } }><i className="fab fa-github"></i></a>
        
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kadzieladawid" style={ { color: colorPrimary } }><i className="fab fa-linkedin"></i></a>

        <a target="_blank" rel="noopener noreferrer" href="mailto:dawidkadziela@gmail.com" style={ { color: colorPrimary } }><i className="fas fa-envelope-square"></i></a>
        
      </div>
  );
};

SocialIcons.contextTypes = {
  theme: PropTypes.any
};

export default SocialIcons;