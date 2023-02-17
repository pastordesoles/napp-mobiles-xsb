import { useEffect, useState } from "react";
import usePhones from "../../hooks/usePhones";
import DetailActionsStyled from "./DetailActionsStyled";

const DetailActions = ({ phoneDetail }) => {
  const { addPhoneToCart } = usePhones();
  const [colorCode, setColorCode] = useState(null);
  const [storageCode, setStorageCode] = useState(null);

  const selectColor = (color) => {
    setColorCode(+color);
  };

  const selectStorage = (memory) => {
    setStorageCode(+memory);
  };

  useEffect(() => {
    selectColor(phoneDetail?.options?.colors[0]?.code);
    setStorageCode(phoneDetail?.options?.storages[0]?.code);
  }, [phoneDetail]);

  const submitData = {
    id: phoneDetail?.id,
    colorCode,
    storageCode,
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await addPhoneToCart(submitData);
  };

  return (
    <DetailActionsStyled className="actions" onSubmit={handleSubmit}>
      <div className="actions__form">
        <label className="form__label" htmlFor="memory-select">
          {`Memory size: `}
        </label>
        <select
          className="form__select"
          id="memory-select"
          onChange={(event) => selectStorage(event.target.value)}
        >
          {phoneDetail.options?.storages?.map(({ code, name }, index) => (
            <option key={index} value={code}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className="actions__form">
        <label className="form__label" htmlFor="color-select">
          {`Color: `}
        </label>
        <select
          className="form__select"
          id="color-select"
          onChange={(event) => selectColor(event.target.value)}
        >
          {phoneDetail.options?.colors?.map(({ code, name }, index) => (
            <option key={index} value={code}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <button className="actions__submit-button" type="submit">
        Add to Cart
      </button>
    </DetailActionsStyled>
  );
};

export default DetailActions;
