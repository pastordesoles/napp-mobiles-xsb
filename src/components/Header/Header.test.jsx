import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import GlobalStyle from "../../styles/GlobalStyles";
import Header from "./Header";
import mockLocalStorage from "../../mocks/localStorage";

beforeEach(() => {
  jest.clearAllMocks();
});

Object.defineProperty(window, "localStorage", {
  value: mockLocalStorage,
});

beforeAll(() => {
  mockLocalStorage.setItem("cart", "1");
});

afterAll(() => {
  mockLocalStorage.clear();
});

describe("Given a Header component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a cart icon", () => {
      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <GlobalStyle />
            <Header />
          </ThemeProvider>
        </BrowserRouter>
      );

      const cartIcon = screen.getByTestId("cart__icon");

      expect(cartIcon).toBeInTheDocument();
    });
  });
});
