import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductListPage from "./ProductListPage";
import usePhones from "../../hooks/usePhones";
import { phoneMocks } from "../../mocks/phoneMock";
import MainWrapper from "../../mocks/wrapper";

jest.mock("../../hooks/usePhones");

describe("Given a ProductListPage component", () => {
  beforeEach(() => {
    usePhones.mockReturnValue({
      getPhones: jest.fn().mockResolvedValue(phoneMocks),
    });
  });
  describe("When it's rendered", () => {
    test("Then it should show a input search", () => {
      render(<ProductListPage />, {
        wrapper: MainWrapper,
      });

      const input = screen.getByTestId("filter");

      expect(input).toBeInTheDocument();
    });
  });

  describe("When it's rendered and user inputs a value", () => {
    test("Then it should show a list with two items", async () => {
      render(<ProductListPage />, {
        wrapper: MainWrapper,
      });

      const input = screen.getByTestId("filter");
      await userEvent.type(input, "i");

      await waitFor(() => {
        const phoneCards = screen.getAllByRole("listitem");
        expect(phoneCards).toHaveLength(2);
      });
    });
  });
});
