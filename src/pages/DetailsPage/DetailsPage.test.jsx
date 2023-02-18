import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import DetailsPage from "./DetailsPage";
import mainTheme from "../../styles/mainTheme";
import GlobalStyle from "../../styles/GlobalStyles";
import usePhones from "../../hooks/usePhones";

jest.mock("../../hooks/usePhones");

describe("Given a ProductListPage component", () => {
  let mockGetPhoneDetail;

  beforeEach(() => {
    mockGetPhoneDetail = jest.fn();
    usePhones.mockReturnValue({
      getPhoneDetail: mockGetPhoneDetail,
    });
  });

  describe("When it's rendered", () => {
    test("Then it should show a phone image", () => {
      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <GlobalStyle />
            <DetailsPage />
          </ThemeProvider>
        </BrowserRouter>
      );

      const image = screen.queryByRole("img");

      expect(mockGetPhoneDetail).toHaveBeenCalled();
      expect(image).toBeInTheDocument();
    });
  });

  describe("When it's rendered and phoneDetail is undefined", () => {
    test("Then it should show 'Ups...We are out of signal'", async () => {
      mockGetPhoneDetail.mockReturnValue(undefined);

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <GlobalStyle />
            <DetailsPage />
          </ThemeProvider>
        </BrowserRouter>
      );

      await waitFor(() => {
        const noResults = screen.queryByText("Ups...We are out of signal");
        expect(noResults).toBeInTheDocument();
      });
    });
  });
});
