import { useEffect, useState } from "react";
import PhoneCardList from "../../components/PhoneCardList/PhoneCardList";
import usePhones from "../../hooks/usePhones";

const ProductListPage = () => {
  const [phones, setPhones] = useState([]);
  const { getPhones } = usePhones();

  useEffect(() => {
    const data = getPhones();
    setPhones(data);
  }, [getPhones]);

  return <PhoneCardList phone={phones} />;
};

export default ProductListPage;
