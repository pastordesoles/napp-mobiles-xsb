import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const usePhones = () => {
  const getPhones = async () => {
    try {
      const response = await axios.get(`${apiUrl}`);

      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return { getPhones };
};

export default usePhones;
