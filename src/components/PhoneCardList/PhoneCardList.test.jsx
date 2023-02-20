import { render, screen } from "@testing-library/react";
import PhoneCardList from "./PhoneCardList";
import { phoneMocks } from "../../mocks/phoneMock";
import MainWrapper from "../../mocks/wrapper";

describe("Given a PhoneCardList component", () => {
  describe("When it's rendered with a list of 2 phones", () => {
    test("Then it should show a list with the received phones", () => {
      render(<PhoneCardList phones={phoneMocks} />, {
        wrapper: MainWrapper,
      });

      const phoneList = screen.getAllByRole("listitem");

      expect(phoneList).toHaveLength(2);
    });
  });
});
