import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { ThemeContextProvider } from './contexts/ThemeContext';

import { Routes } from './routes';

import GlobalStyle from './styles/global';

function App(): JSX.Element {
  return (
    <ThemeContextProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes />
          <GlobalStyle />
        </BrowserRouter>
      </AuthProvider>
    </ThemeContextProvider>
  );
}

export default App;
