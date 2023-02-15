import { useEffect, useState } from "react";
import PhoneCardList from "../../components/PhoneCardList/PhoneCardList";
import usePhones from "../../hooks/usePhones";

const ProductListPage = () => {
  const { getPhones } = usePhones();
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getPhones();
      setPhones(data);
    })();
  }, [getPhones]);

  if (phones.length === 0) {
    return <h1>nope</h1>;
  }
  return <PhoneCardList phones={phones} />;
};

export default ProductListPage;
