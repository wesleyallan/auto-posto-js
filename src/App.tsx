import React from 'react';
import { FuelPage } from './pages/Fuel';
import GlobalStyles from './theme/global';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <FuelPage />
    </ThemeProvider>
  );
}

export default App;
