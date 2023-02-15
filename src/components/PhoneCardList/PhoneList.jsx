const PhoneCardList = ({ phone }) => {
  return (
    <>
      <ul className="phones">
        {phone.map((phone) => (
          <li key={phone.id} className="phone">
            <h3>{phone.name}</h3>
            <img src={phone.image} alt={phone.name} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default PhoneCardList;
