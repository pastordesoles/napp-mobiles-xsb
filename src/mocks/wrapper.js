import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyles.jsx";
import mainTheme from "../styles/mainTheme";

const MainWrapper = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default MainWrapper;
