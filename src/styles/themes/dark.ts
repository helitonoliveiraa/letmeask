import light from './light';

const dark: typeof light = {
  ...light,
  colors: {
    ...light.colors,
    primary: '#56F2C3',
    background: '#1E1D2B',
    black: '#737380',
    grandient: 'linear-gradient(#252736, #252736)',

    headerLine: '#29292E',
  },
};

export default dark;
