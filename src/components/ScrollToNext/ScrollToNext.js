import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toElement as scrollToElement } from '@utils/scroll';

import './style.scss';

class ScrollToNext extends Component {
  scrollToNext() {
    const { pageSelector } = this.props;
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    const { theme: { colorPrimary } } = this.context;
    return (
      <div className="scroll-to-next" onClick={(e) => this.scrollToNext()}>
        <div className="arrow pulse" style={{ color: colorPrimary }}>
          <div className="scroll-text">Kliknij!</div>
          <button className="far fa-hand-point-down fa-2x" href="#" />
        </div>
      </div>
    );
  }
}



ScrollToNext.propTypes = {
  pageSelector: PropTypes.string
};

ScrollToNext.contextTypes = {
  theme: PropTypes.any
};

export default ScrollToNext;
