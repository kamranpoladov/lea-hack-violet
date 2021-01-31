import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider,
  createMuiTheme
} from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { CssBaseline } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#82AA7F'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#000000'
    }
  }
});

export const StyleProvider: React.FC = ({ children }) => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CssBaseline />
        {children}
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
);
