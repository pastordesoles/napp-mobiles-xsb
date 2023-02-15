import { useState } from "react";
import PhoneCardList from "../../components/PhoneCardList/PhoneCardList";

const ProductListPage = () => {
  const [phones, setPhones] = useState([]);

  return <PhoneCardList phone={phones} />;
};

export default ProductListPage;
