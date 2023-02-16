import PhoneCardListStyled from "./PhoneCardListStyled";

const PhoneCardList = ({ phones }) => {
  return (
    <>
      <PhoneCardListStyled className="phones-list">
        {phones.map((phone) => (
          <li key={phone.id} className="phone">
            <article>
              <h3 className="phone__name">{`${phone.brand} - ${phone.model}`}</h3>
              <img
                className="phone__image"
                width="100"
                height="100"
                loading="lazy"
                src={phone.imgUrl}
                alt={phone.model}
              />
              {phone.price ? (
                <span className="phone__price">{`${phone.price}€`}</span>
              ) : (
                <span className="phone__price">{`Ask us how much!`}</span>
              )}
            </article>
          </li>
        ))}
      </PhoneCardListStyled>
    </>
  );
};

export default PhoneCardList;
