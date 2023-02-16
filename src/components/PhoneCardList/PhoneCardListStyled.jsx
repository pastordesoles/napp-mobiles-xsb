import styled from "styled-components";

const PhoneCardListStyled = styled.ul`
  display: grid;
  row-gap: 30px;
  grid-template-columns: repeat(1, 1fr);
  padding: 2rem 0;
  justify-items: center;
  justify-content: center;

  @media only screen and (min-width: 479px) {
    align-items: unset;

    grid-template-columns: repeat(2, 240px);
    column-gap: calc((100% - (2 * 240px)) / 2);
  }

  @media only screen and (min-width: 1150px) {
    align-items: unset;

    grid-template-columns: repeat(3, 240px);
    column-gap: calc((100% - (3 * 240px)) / 3);
  }
`;

export default PhoneCardListStyled;
