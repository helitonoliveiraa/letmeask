import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Routes } from './routes';

import GlobalStyle from './styles/global';
import { light } from './styles/themes';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={light}>
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
