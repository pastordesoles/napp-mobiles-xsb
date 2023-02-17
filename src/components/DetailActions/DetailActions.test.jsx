import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import DetailActions from "./DetailActions";
import mainTheme from "../../styles/mainTheme";
import GlobalStyle from "../../styles/GlobalStyles";
import { phoneDetailMock } from "../../mocks/phoneMock";

describe("Given a DetailActions component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a button", async () => {
      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <GlobalStyle />
            <DetailActions phoneDetail={phoneDetailMock} />
          </ThemeProvider>
        </BrowserRouter>
      );

      const button = screen.queryByRole("button");

      expect(button).toBeInTheDocument();
    });
  });
});
