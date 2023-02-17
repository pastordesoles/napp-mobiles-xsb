import DetailSpecsStyled from "./DetailSpecsStyled";

const DetailSpecs = ({ phoneDetail }) => {
  return (
    <DetailSpecsStyled className="phone-detail">
      <li className="phone-detail-property">
        <span className="property__item">{`Brand: ${phoneDetail.brand}`}</span>
      </li>
      <li className="phone-detail-property">
        <span className="property__item">{`Model: ${phoneDetail.model}`}</span>
      </li>
      <li className="phone-detail-property">
        <span className="property__item">{`CPU: ${phoneDetail.cpu}`}</span>
      </li>
      <li className="phone-detail-property">
        <span className="property__item">{`RAM: ${phoneDetail.ram}`}</span>
      </li>
      <li className="phone-detail-property">
        <span className="property__item">{`OS: ${phoneDetail.os}`}</span>
      </li>
      <li className="phone-detail-property">
        <span className="property__item">{`Screen: ${phoneDetail.displayResolution}`}</span>
      </li>
      <li className="phone-detail-property">
        <span className="property__item">{`Battery: ${
          phoneDetail.battery ? phoneDetail.battery : "--"
        }`}</span>
      </li>
      <li className="phone-detail-property">
        <span className="property__item">{`Camera 1: ${phoneDetail.primaryCamera}`}</span>
      </li>
      <li className="phone-detail-property">
        <span className="property__item">{`Camera 2: ${phoneDetail.secondaryCmera}`}</span>
      </li>
      <li className="phone-detail-property">
        <span className="property__item">{`Size: ${phoneDetail.dimentions}`}</span>
      </li>
      <li className="phone-detail-property">
        <span className="property__item">{`Weight: ${
          phoneDetail.weight ? phoneDetail.weight : "-- "
        }gr`}</span>
      </li>
    </DetailSpecsStyled>
  );
};

export default DetailSpecs;
