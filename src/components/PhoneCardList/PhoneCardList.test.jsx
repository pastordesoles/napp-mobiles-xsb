import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import userEvent from "@testing-library/user-event";
import mainTheme from "../../styles/mainTheme";
import GlobalStyle from "../../styles/GlobalStyles";
import PhoneCardList from "./PhoneCardList";
import phoneMocks from "../../mocks/phoneMock";

describe("Given a PhoneCardList component", () => {
  describe("When it's rendered with a list of 10 phones", () => {
    test("Then it should show a list with the received phones", () => {
      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <GlobalStyle />
            <PhoneCardList phones={phoneMocks} />
          </ThemeProvider>
        </BrowserRouter>
      );

      const pokemonList = screen.getAllByRole("listitem");

      expect(pokemonList).toHaveLength(10);
    });
  });
});
