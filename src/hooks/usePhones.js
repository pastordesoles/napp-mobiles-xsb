import axios from "axios";
import { useCallback } from "react";

const apiUrl = process.env.REACT_APP_API_URL;

const usePhones = () => {
  const getPhones = useCallback(async () => {
    try {
      const response = await axios.get(apiUrl);

      return response;
    } catch (error) {
      throw error;
    }
  }, []);

  return { getPhones };
};

export default usePhones;
