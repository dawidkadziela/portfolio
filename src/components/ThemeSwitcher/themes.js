const themes = [

  {
    name: 'black-white',
    firstTime: true,
    colorPrimary: 'black',
    colorAlternate: 'white',
    colorHighlight: 'lightgray',
    textPrimary: 'black',
    navAlpha: 'white'
  },
    {
    name: 'white-black',
    colorPrimary: '#FFFFFF',
    colorAlternate: 'black',
    colorHighlight: '#939292',
    textPrimary: 'white',
    navAlpha: 'black'
  }
];

export const getThemes = () => {
  return themes.map((theme) => {
    return {
      name: theme.name,
      firstTime: theme.firstTime,
      colorPrimary: theme.colorPrimary,
      colorAlternate: theme.colorAlternate,
      colorHighlight: theme.colorHighlight,
      bgPrimary: theme.colorAlternate,
      bgAlternate: theme.colorPrimary,
      bgLanding: theme.colorPrimary,
      textPrimary: theme.textPrimary,
      textAlternate: theme.colorAlternate,
      textLanding: theme.colorPrimary,
      parallaxStars: theme.colorPrimary,
      navAlpha: theme.navAlpha
    };
  });
};
