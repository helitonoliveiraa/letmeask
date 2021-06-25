import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from './contexts/AuthContext';
import { Routes } from './routes';

import GlobalStyle from './styles/global';
import { light } from './styles/themes/index';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={light}>
      <AuthProvider>
        <BrowserRouter>
          <Routes />
          <GlobalStyle />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
