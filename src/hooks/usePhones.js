import axios from "axios";
import { useCallback } from "react";

const apiUrl = process.env.REACT_APP_API_URL;
const apiCart = process.env.REACT_APP_API_URL_CART;

const usePhones = () => {
  const getPhones = useCallback(async () => {
    const localdata = localStorage.getItem("phones");
    const cache = JSON.parse(localdata);

    if (localdata && !(cache.expire <= Date.now())) {
      return cache.data;
    }

    try {
      const response = await axios.get(`${apiUrl}`);

      localStorage.setItem(
        "phones",
        JSON.stringify({ data: response.data, expire: Date.now() + 3600000 })
      );

      return response.data;
    } catch (error) {
      throw new Error("Ups.....Fatal Error BOOOM");
    }
  }, []);

  const getPhoneDetail = useCallback(async (phoneId) => {
    const localdata = localStorage.getItem("detail");
    const cache = JSON.parse(localdata);

    if (
      localdata &&
      cache.data.id === phoneId &&
      !(cache.expire <= Date.now())
    ) {
      return cache.data;
    }

    try {
      const response = await axios.get(`${apiUrl}/${phoneId}`);

      localStorage.setItem(
        "detail",
        JSON.stringify({ data: response.data, expire: Date.now() + 3600000 })
      );

      return response.data;
    } catch (error) {
      throw new Error("Ups.....Fatal Error BOOOM");
    }
  }, []);

  const addPhoneToCart = async (phone) => {
    try {
      const response = await axios.post(apiCart, phone);

      let cartData = response.data.count;

      const localData = localStorage.getItem("cart");
      if (localData) {
        const cachedData = JSON.parse(localData);

        cartData += cachedData.data;
      }
      localStorage.setItem("cart", JSON.stringify({ data: cartData }));
      window.dispatchEvent(new Event("storage"));
    } catch (error) {
      throw new Error("Ups.....Fatal Error BOOOM");
    }
  };

  return { getPhones, getPhoneDetail, addPhoneToCart };
};

export default usePhones;
