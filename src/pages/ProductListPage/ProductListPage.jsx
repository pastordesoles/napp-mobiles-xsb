import { useEffect, useState } from "react";
import PhoneCardList from "../../components/PhoneCardList/PhoneCardList";
import usePhones from "../../hooks/usePhones";

const ProductListPage = () => {
  const { getPhones } = usePhones();
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    const data = getPhones();
    setPhones(data);
  }, [getPhones, phones]);

  return <PhoneCardList phone={phones} />;
};

export default ProductListPage;
