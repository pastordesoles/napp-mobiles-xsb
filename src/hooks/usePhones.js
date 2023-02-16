import axios from "axios";
import { useCallback } from "react";

const apiUrl = process.env.REACT_APP_API_URL;

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
    try {
      const response = await axios.get(`${apiUrl}/${phoneId}`);

      return response.data;
    } catch (error) {
      throw new Error("Ups.....Fatal Error BOOOM");
    }
  }, []);

  return { getPhones, getPhoneDetail };
};

export default usePhones;
