import PhoneCardListStyled from "./PhoneCardListStyled";

const PhoneCardList = ({ phones }) => {
  return (
    <>
      <PhoneCardListStyled className="phones-list">
        {phones.map((phone) => (
          <li key={phone.id} className="phone">
            <article>
              <h3>{`${phone.brand} ${phone.model}`}</h3>
              <img src={phone.imgUrl} alt={phone.model} />
            </article>
          </li>
        ))}
      </PhoneCardListStyled>
    </>
  );
};

export default PhoneCardList;
