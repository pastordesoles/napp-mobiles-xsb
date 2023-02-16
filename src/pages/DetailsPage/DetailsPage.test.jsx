import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import DetailsPage from "./DetailsPage";
import mainTheme from "../../styles/mainTheme";
import GlobalStyle from "../../styles/GlobalStyles";

describe("Given a ProductListPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a input search", () => {
      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <GlobalStyle />
            <DetailsPage />
          </ThemeProvider>
        </BrowserRouter>
      );

      const input = screen.queryByText("Test");

      expect(input).toBeInTheDocument();
    });
  });
});
