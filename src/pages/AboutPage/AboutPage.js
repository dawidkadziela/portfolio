import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary, animation: 'bounce-xy 4s infinite' }}>O mnie</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              Od 10 lat profesjonalnie zajmuje się <span className="highlight">SEO</span> - optymalizacja to nie tylko moja praca, ale także pasja. Dlaczego pasja? Bo nikt z Was nie wie, kiedy była <span className="highlight">ostatnia aktualizacja algorytmu Google...</span> Ja wiem ;)
            </p>
            <p>
              Z kodem mam więc do czynienia od dawna,{' '}
              <span className="highlight"> dlatego w 2017 roku postanowiłem zgłębić jego tajniki. Było standardowo: zacząłem czytać kursy internetowe, później krótkie zadania, CodeWars. W końcu CodersLab</span>. Nie posiadam doświadczenia komercyjnego, ale chcę cały czas się uczyć, bo{' '}
              <span className="highlight">nie boje się nowych wyzwań!</span>
            </p>
            
            <p>
              W dalszym ciągu zgłębiam tajniki takich technologii jak <span className="highlight">HTML/CSS, RWD/Sass, jQuery, Javascript czy React</span>. Chcę spróbować również backendowo z Ruby. Nie zamierzam zwalniać ani na moment, dlatego jeśli tylko nie absorbuje mnie zabawa z dziećmi lub koszenie trawnika, staram się poszerzać swoją wiedzę.
            </p>
            <p className="text-emoji" style={{ color: colorPrimary }}>
        
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
