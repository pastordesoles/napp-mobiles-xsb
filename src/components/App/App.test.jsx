import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import TestRenderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/GlobalStyles";
import mainTheme from "../../styles/mainTheme";
import App from "./App";

describe("Given an App component", () => {
  describe("When it's rendered with path '/*'", () => {
    test("Then it should render the main page", () => {
      const expectedApp = TestRenderer.create(
        <MemoryRouter initialEntries={["/*"]}>
          <App />
        </MemoryRouter>
      );

      expect(expectedApp).toMatchSnapshot();
    });
  });

  describe("When it's rendered", () => {
    test("Then it should render the main page and show a cart icon", () => {
      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <GlobalStyle />
            <App />
          </ThemeProvider>
        </BrowserRouter>
      );

      const cartIcon = screen.getByTestId("cart__icon");

      expect(cartIcon).toBeInTheDocument();
    });
  });
});
