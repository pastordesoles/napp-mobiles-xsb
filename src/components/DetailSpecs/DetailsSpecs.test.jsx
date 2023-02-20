import { render, screen } from "@testing-library/react";
import DetailSpecs from "./DetailSpecs";
import {
  phoneDetailMock,
  phoneDetailMockMissingElements,
} from "../../mocks/phoneMock";
import MainWrapper from "../../mocks/wrapper";

describe("Given a DetailSpecs component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 12 list items", () => {
      render(<DetailSpecs phoneDetail={phoneDetailMock} />, {
        wrapper: MainWrapper,
      });

      const listItems = screen.queryAllByRole("listitem");

      expect(listItems).toHaveLength(12);
    });
  });

  describe("When it's rendered and has battery and weight", () => {
    test("Then it should show 12 list items", () => {
      render(<DetailSpecs phoneDetail={phoneDetailMockMissingElements} />, {
        wrapper: MainWrapper,
      });

      const listItems = screen.queryAllByRole("listitem");

      expect(listItems).toHaveLength(12);
    });
  });
});
