const PhoneCardList = ({ phones }) => {
  return (
    <>
      <ul className="phones">
        {phones.map((phone) => (
          <li key={phone.id} className="phone">
            <h3>{`${phone.brand} ${phone.model}`}</h3>
            <img src={phone.imgUrl} alt={phone.model} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default PhoneCardList;
