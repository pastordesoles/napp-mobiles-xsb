import { useEffect, useState } from "react";

import PhoneCardList from "../../components/PhoneCardList/PhoneCardList";
import usePhones from "../../hooks/usePhones";
import ProductListPageStyled from "./ProductListPageStyled";

const ProductListPage = () => {
  const { getPhones } = usePhones();
  const [phones, setPhones] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    (async () => {
      const data = await getPhones();
      setPhones(data);
    })();
  }, [getPhones]);

  const filteredPhones = (phones) => {
    return phones?.filter(
      (phone) =>
        phone.brand?.toLowerCase().startsWith(filter.toLowerCase()) ||
        phone.model?.toLowerCase().startsWith(filter.toLowerCase())
    );
  };

  return (
    <ProductListPageStyled>
      <input
        onChange={(event) => setFilter(event.target.value)}
        name="query"
        type="text"
        placeholder="Mobel, brand"
        className="input"
        autoComplete="off"
      />
      {filteredPhones(phones).length === 0 ? (
        <span className="no-results">Ups...We are out of signal</span>
      ) : (
        <PhoneCardList phones={filteredPhones(phones)} />
      )}
    </ProductListPageStyled>
  );
};

export default ProductListPage;
