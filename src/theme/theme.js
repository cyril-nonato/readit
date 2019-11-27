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

export const theme1 = {
  primary: white,
  secondary: blue,
  tertiary: grey,
  quarternary: lightBlack,
  quinary: black,
  backgroundColor: '#DAE0E6',
  text: black,
  formBackground: 'right',
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
  mediaQueries: {
    tablet: '500px',
    windows: '1000px'
  }
}

const darkGrey = '#1a1a1b';
const silver = '#d7dadc';

export const theme2 = {
  primary: darkGrey,
  secondary: silver,
  tertiary: grey,
  quarternary: lightBlack,
  quinary: silver,
  backgroundColor: black,
  text: silver,
  formBackground: 'left',
  vote: {
    up: orange,
    down: blue
  },
  button: {
    background: silver,
    backgroundHover: 'rgba(215, 218, 220, .8)',
  },
  input: {
    border: silver,
    label: grey,
    after: silver
  },
  ...mediaQueries
}