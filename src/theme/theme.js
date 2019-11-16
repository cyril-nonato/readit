const white = '#fff';
const grey = '#A5A3A4';
const lightBlack = 'rgba(0,0,0,.1)';
const black = '#000';

const theme1 = {
  primary: '#0079d3',
  secondary: white,
  signInOut: white,
  input: {
    border: lightBlack,
    label: '#a5a4a4',
    after: '#24a0ed'
  },
  mediaQueries: {
    tablet: '500px',
    windows: '1000px'
  },
  button: {
    background: 'rgba(0, 121, 211)',
    backgroundHover: 'rgba(0, 121, 211, .8)',
    text: white,
    customStyleBackground: white
  },
  backgroundColor: '#DAE0E6',
  navigation: {
    background: '#f9f9f9',
    backgroundLink: lightBlack,
    iconsColor: black,
    userOptions: {
      buttonBackgroundColor: 'transparent',
      triangleBackgroundColor: grey,
    },
    dropdown: {
      icon: grey,
      text: 'black',
      textHover: white,
      iconHover: white,
      arrow: white,
      arrowHover: grey,
    },
  },
  posts: {
    subNav: {
      border: lightBlack
    }
  }
};

export { theme1 }