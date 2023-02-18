import { useEffect, useState } from "react";
import { useParams } from "react-router";
import DetailActions from "../../components/DetailActions/DetailActions";
import DetailSpecs from "../../components/DetailSpecs/DetailSpecs";
import usePhones from "../../hooks/usePhones";
import DetailsPageStyled from "./DetailsPageStyled";

const DetailsPage = () => {
  const { getPhoneDetail } = usePhones();
  const [phoneDetail, setPhoneDetail] = useState({});
  const { phoneId } = useParams();

  useEffect(() => {
    (async () => {
      const data = await getPhoneDetail(phoneId);
      setPhoneDetail(data);
    })();
  }, [getPhoneDetail, phoneId]);

  return (
    <DetailsPageStyled>
      <article className="details">
        <img
          className="details__image"
          src={phoneDetail.imgUrl}
          alt={phoneDetail.model}
        />
        <div className="details__group">
          {<DetailSpecs phoneDetail={phoneDetail} />}
          {<DetailActions phoneDetail={phoneDetail} />}
        </div>
      </article>
    </DetailsPageStyled>
  );
};

export default DetailsPage;
