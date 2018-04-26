import React from 'react';
import PropTypes from 'prop-types';

import './style';

const ParallaxBackground = (props, context) => {
  const { theme: { colorPrimary } } = context;

  return (
    <div className="parallax" style={{ color: colorPrimary }}>
      {/* <div id="square1" /> */}
      <div id="square2" />
      {/* <div id="square3" /> */}
    </div>
  );
};

ParallaxBackground.contextTypes = {
  theme: PropTypes.any
};

export default ParallaxBackground;
