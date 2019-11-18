const white = '#f9f9f9';
const grey = '#6c6e70';
const lightBlack = 'rgba(0,0,0,.1)';
const black = '#000';
const blue = '#0079d3'
const orange = 'orange';

const mediaQueries = {
  mediaQueries: {
    tablet: '500px',
    windows: '1000px'
  }
}

const theme1 = {
  primary: white,
  secondary: blue,
  tertiary: grey,
  quarternary: lightBlack,
  quinary: black,
  backgroundColor: '#DAE0E6',
  vote: {
    up: orange,
    down: blue
  },
  button: {
    background: 'rgba(0, 121, 211)',
    backgroundHover: 'rgba(0, 121, 211, .8)',
  },
  input: {
    border: lightBlack,
    label: grey,
    after: '#24a0ed'
  },
  ...mediaQueries
}

const theme2 = {
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
  },
};

export { theme1 }