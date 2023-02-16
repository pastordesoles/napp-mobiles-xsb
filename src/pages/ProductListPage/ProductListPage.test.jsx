import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import userEvent from "@testing-library/user-event";
import mainTheme from "../../styles/mainTheme";
import GlobalStyle from "../../styles/GlobalStyles";
import ProductListPage from "./ProductListPage";

describe("Given a ProductListPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a input search", () => {
      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <GlobalStyle />
            <ProductListPage />
          </ThemeProvider>
        </BrowserRouter>
      );

      const input = screen.getByTestId("filter");

      expect(input).toBeInTheDocument();
    });
  });

  describe("When it's rendered and user inputs a value", () => {
    test("Then it should show a message", async () => {
      const expectedText = "Ups...We are out of signal";
      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <GlobalStyle />
            <ProductListPage />
          </ThemeProvider>
        </BrowserRouter>
      );

      const input = screen.getByTestId("filter");
      await userEvent.type(input, "aaaa");

      const text = screen.queryByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
