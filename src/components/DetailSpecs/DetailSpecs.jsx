const DetailSpecs = ({ phoneDetail }) => {
  return (
    <ul className="phone-detail">
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
        <span className="property__item">{`Battery: ${phoneDetail.battery}`}</span>
      </li>
      <li className="phone-detail-property">
        <span className="property__item">{`Camera 1: ${phoneDetail.primaryCamera.join(
          " "
        )}`}</span>
      </li>
      <li className="phone-detail-property">
        <span className="property__item">{`Camera 2: ${phoneDetail.secondaryCmera.join(
          " "
        )}`}</span>
      </li>
      <li className="phone-detail-property">
        <span className="property__item">{`Size: ${phoneDetail.dimentions}`}</span>
      </li>
      <li className="phone-detail-property">
        <span className="property__item">{`Weight: ${phoneDetail.weight}gr`}</span>
      </li>
    </ul>
  );
};

export default DetailSpecs;
