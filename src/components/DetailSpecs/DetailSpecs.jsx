import DetailSpecsStyled from "./DetailSpecsStyled";

const DetailSpecs = ({ phoneDetail }) => {
  return (
    <DetailSpecsStyled className="phone-detail">
      <li>
        <span>
          <span className="property__item">Brand:</span>
          {` ${phoneDetail.brand}`}
        </span>
      </li>
      <li>
        <span>
          <span className="property__item">Model:</span>
          {` ${phoneDetail.model}`}
        </span>
      </li>
      <li>
        <span>
          <span className="property__item">CPU:</span>
          {` ${phoneDetail.cpu}`}
        </span>
      </li>
      <li>
        <span>
          <span className="property__item">RAM:</span>
          {` ${phoneDetail.ram}`}
        </span>
      </li>
      <li>
        <span>
          <span className="property__item">OS:</span>
          {` ${phoneDetail.os}`}
        </span>
      </li>
      <li>
        <span>
          <span className="property__item">Screen:</span>
          {` ${phoneDetail.displayResolution}`}
        </span>
      </li>
      <li>
        <span>
          <span className="property__item">Battery:</span>
          {` ${phoneDetail.battery ? phoneDetail.battery : "--"}`}
        </span>
      </li>
      <li>
        <span>
          <span className="property__item">Camera 1:</span>
          {` ${phoneDetail.primaryCamera}`}
        </span>
      </li>
      <li>
        <span>
          <span className="property__item">Camera 2:</span>
          {` ${phoneDetail.secondaryCmera}`}
        </span>
      </li>
      <li>
        <span>
          <span className="property__item">Size:</span>
          {` ${phoneDetail.dimentions}`}
        </span>
      </li>
      <li>
        <span>
          <span className="property__item">Weight:</span>
          {` ${phoneDetail.weight ? phoneDetail.weight : "-- "}gr`}
        </span>
      </li>
      <li>
        <span>
          <span className="property__item">Price:</span>
          {` ${phoneDetail.price ? phoneDetail.price : "-- "}€`}
        </span>
      </li>
    </DetailSpecsStyled>
  );
};

export default DetailSpecs;
