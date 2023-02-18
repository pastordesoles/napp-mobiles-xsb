import { render, screen, fireEvent } from "@testing-library/react";
import DetailActions from "./DetailActions";
import usePhones from "../../hooks/usePhones";
import { phoneDetailMock } from "../../mocks/phoneMock";
import MainWrapper from "../../mocks/wrapper";

jest.mock("../../hooks/usePhones");

describe("Given a DetailActions component", () => {
  beforeEach(() => {
    usePhones.mockReturnValue({
      addPhoneToCart: jest.fn(),
    });
  });

  describe("When it's rendered", () => {
    test("Then it should show a select for storage options", () => {
      render(<DetailActions phoneDetail={phoneDetailMock} />, {
        wrapper: MainWrapper,
      });

      const storageSelect = screen.getByLabelText(/Memory size:/i);

      expect(storageSelect).toBeInTheDocument();
    });

    test("Then it should show a select for color options", () => {
      render(<DetailActions phoneDetail={phoneDetailMock} />, {
        wrapper: MainWrapper,
      });

      const colorSelect = screen.getByLabelText(/Color:/i);

      expect(colorSelect).toBeInTheDocument();
    });

    test("Then it should show a submit button", () => {
      render(<DetailActions phoneDetail={phoneDetailMock} />, {
        wrapper: MainWrapper,
      });

      const submitButton = screen.getByRole("button", { name: /add to cart/i });

      expect(submitButton).toBeInTheDocument();
    });

    test("Then it should select the first storage option by default", () => {
      render(<DetailActions phoneDetail={phoneDetailMock} />, {
        wrapper: MainWrapper,
      });

      const storageSelect = screen.getByLabelText(/Memory size:/i);

      expect(storageSelect.value).toBe(
        phoneDetailMock.options.storages[0].code.toString()
      );
    });

    test("Then it should select the first color option by default", () => {
      render(<DetailActions phoneDetail={phoneDetailMock} />, {
        wrapper: MainWrapper,
      });

      const colorSelect = screen.getByLabelText(/Color:/i);

      expect(colorSelect.value).toBe(
        phoneDetailMock.options.colors[0].code.toString()
      );
    });
  });

  describe("When a user selects a different storage option", () => {
    test("Then it should update the selected storage code", () => {
      render(<DetailActions phoneDetail={phoneDetailMock} />, {
        wrapper: MainWrapper,
      });

      const storageSelect = screen.getByLabelText(/Memory size:/i);

      fireEvent.change(storageSelect, {
        target: { value: phoneDetailMock.options.storages[0].code.toString() },
      });

      expect(storageSelect.value).toBe(
        phoneDetailMock.options.storages[0].code.toString()
      );
    });
  });

  describe("When a user selects a different color option", () => {
    test("Then it should update the selected color code", () => {
      render(<DetailActions phoneDetail={phoneDetailMock} />, {
        wrapper: MainWrapper,
      });

      const storageSelect = screen.getByLabelText(/Color:/i);

      fireEvent.change(storageSelect, {
        target: { value: phoneDetailMock.options.colors[0].code.toString() },
      });

      expect(storageSelect.value).toBe(
        phoneDetailMock.options.colors[0].code.toString()
      );
    });
  });

  describe("When the user clicks on the add to cart button", () => {
    test("Then it should call addPhoneToCart", () => {
      const addPhoneToCart = jest.fn();
      usePhones.mockReturnValue({
        addPhoneToCart,
      });

      render(<DetailActions phoneDetail={phoneDetailMock} />, {
        wrapper: MainWrapper,
      });

      const submitButton = screen.getByRole("button", { name: /add to cart/i });
      fireEvent.click(submitButton);

      expect(addPhoneToCart).toHaveBeenCalled();
    });
  });
});
