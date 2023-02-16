import { useEffect, useState } from "react";
import { useParams } from "react-router";
import usePhones from "../../hooks/usePhones";

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
    <section className="details">
      <h1>{phoneDetail.brand}</h1>
      <div className="details__group">Test</div>
    </section>
  );
};

export default DetailsPage;
