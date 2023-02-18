import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import userEvent from "@testing-library/user-event";
import mainTheme from "../../styles/mainTheme";
import GlobalStyle from "../../styles/GlobalStyles";
import ProductListPage from "./ProductListPage";
import usePhones from "../../hooks/usePhones";
import { phoneMocks } from "../../mocks/phoneMock";

jest.mock("../../hooks/usePhones");

describe("Given a ProductListPage component", () => {
  beforeEach(() => {
    usePhones.mockReturnValue({
      getPhones: jest.fn().mockResolvedValue(phoneMocks),
    });
  });
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
      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <GlobalStyle />
            <ProductListPage />
          </ThemeProvider>
        </BrowserRouter>
      );

      const input = screen.getByTestId("filter");
      await userEvent.type(input, "i");

      await waitFor(() => {
        const phoneCards = screen.getAllByRole("listitem");
        expect(phoneCards).toHaveLength(2);
      });
    });
  });
});
