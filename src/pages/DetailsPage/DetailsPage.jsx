import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
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
    <>
      {phoneDetail && (
        <DetailsPageStyled>
          <article className="details">
            <img
              className="details__image"
              src={phoneDetail.imgUrl}
              alt={phoneDetail.model}
            />

            <div className="details__group">
              <Link to="/" className="return">
                Home
              </Link>
              {<DetailSpecs phoneDetail={phoneDetail} />}
              {<DetailActions phoneDetail={phoneDetail} />}
            </div>
          </article>
        </DetailsPageStyled>
      )}

      {!phoneDetail && (
        <span className="no-results">Ups...We are out of signal</span>
      )}
    </>
  );
};

export default DetailsPage;
