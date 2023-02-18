import { renderHook } from "@testing-library/react";
import usePhones from "./usePhones";

describe("Given the usePhones hook", () => {
  describe("When its method usePhones is invoked", () => {
    test("Then it should return a response", async () => {
      const {
        result: {
          current: { getPhones },
        },
      } = renderHook(() => usePhones());

      const result = await getPhones();

      expect(result).toBeDefined();
    });
  });

  describe("When its method getPhoneDetail is invoked", () => {
    test("Then it should return a response", async () => {
      const {
        result: {
          current: { getPhoneDetail },
        },
      } = renderHook(() => usePhones());

      const result = await getPhoneDetail("12345");

      expect(result).toBeDefined();
    });
  });

  describe("When its method addPhoneToCart is invoked", () => {
    test("Then it should return a response", async () => {
      const {
        result: {
          current: { addPhoneToCart },
        },
      } = renderHook(() => usePhones());

      const result = await addPhoneToCart({
        id: "cGjFJlmqNPIwU59AOcY8H",
        colorCode: 1000,
        storageCode: 2000,
      });

      expect(result).toBeDefined();
    });
  });
});
