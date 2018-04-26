import React from 'react';
import Browser from '@components/Browser';

const BrowserNotes = () => {
  return (
    <div className="browser-notes">
      <Browser except firefox chrome mobile>
        <span>Znakomicie! Używasz <b>Chrome</b> dlatego strona wyświetla się poprawnie!</span>
      </Browser>
      <Browser only firefox>
        <span>Upss! Niestety korzystasz z Firefoxa, zmień przeglądarkę na <b>Chrome!</b></span>
      </Browser>
    </div>
  );
};

export default BrowserNotes;