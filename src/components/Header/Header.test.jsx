import { render, screen } from "@testing-library/react";
import Header from "./Header";
import mockLocalStorage from "../../mocks/localStorage";
import MainWrapper from "../../mocks/wrapper";

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
      render(<Header />, { wrapper: MainWrapper });

      const cartIcon = screen.getByTestId("cart__icon");

      expect(cartIcon).toBeInTheDocument();
    });
  });
});
