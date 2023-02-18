import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import DetailSpecs from "./DetailSpecs";
import mainTheme from "../../styles/mainTheme";
import GlobalStyle from "../../styles/GlobalStyles";
import {
  phoneDetailMock,
  phoneDetailMockMissingElements,
} from "../../mocks/phoneMock";

describe("Given a DetailSpecs component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 12 list items", () => {
      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <GlobalStyle />
            <DetailSpecs phoneDetail={phoneDetailMock} />
          </ThemeProvider>
        </BrowserRouter>
      );

      const listItems = screen.queryAllByRole("listitem");

      expect(listItems).toHaveLength(12);
    });
  });

  describe("When it's rendered and has battery and weight", () => {
    test("Then it should show 1 list items", () => {
      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <GlobalStyle />
            <DetailSpecs phoneDetail={phoneDetailMockMissingElements} />
          </ThemeProvider>
        </BrowserRouter>
      );

      const listItems = screen.queryAllByRole("listitem");

      expect(listItems).toHaveLength(12);
    });
  });
});
