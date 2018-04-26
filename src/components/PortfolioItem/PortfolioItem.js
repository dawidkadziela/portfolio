import React from 'react';
import PropTypes from 'prop-types';
import './style';

const PortfolioItem = (props, context) => {
  const { theme: { colorPrimary, textAlternate } } = context;

  if (props.render) return props.render;
  else
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Projekt Sit on chair
      </div>
      <div className='portfolio-item__desc'>
        Prosty projekt wykonany podczas warsztatów kursu Coders Lab
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-css3"></i>
        <i className="fab fa-html5"></i>
      </div>
      <div className='portfolio-item__links'>
        
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/dawidkadziela/Sit-on-chair">Github</a>
      </div>

      <div className='portfolio-item__title'>
        Warsztaty Javascript
      </div>
      <div className='portfolio-item__desc'>
        Projekty warsztatowe w Javascript
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-js"></i>
      </div>
      <div className='portfolio-item__links'>
        
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/dawidkadziela/Sit-on-chair">Github</a>
      </div>

    </div>
  )
};

PortfolioItem.contextTypes = {
  theme: PropTypes.any
};

export default PortfolioItem;
