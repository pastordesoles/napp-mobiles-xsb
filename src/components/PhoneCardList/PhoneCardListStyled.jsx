import styled from "styled-components";

const PhoneCardListStyled = styled.ul`
  display: grid;
  row-gap: 30px;
  grid-template-columns: repeat(1, 1fr);
  padding: 2rem;
  justify-items: center;
  justify-content: center;

  @media only screen and (min-width: 479px) {
    align-items: unset;

    grid-template-columns: repeat(2, 240px);
    column-gap: calc((100% - (2 * 240px)) / 2);
  }

  @media only screen and (min-width: 1150px) {
    align-items: unset;

    grid-template-columns: repeat(4, 240px);
    column-gap: calc((100% - (4 * 240px)) / 3);
  }

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    border: 1px solid black;
    height: 250px;
    width: 250px;
    background-color: white;
    padding: 0.5rem;
    border-radius: 15px;

    img {
      object-fit: contain;
    }
  }

  .phone {
    &__name {
      font-size: 1.125rem;
      text-align: center;
    }

    &__price {
      color: ${(props) => props.theme.colors.mainColors.dark};
      font-size: 1.125rem;
      font-weight: ${(props) => props.theme.fontWeights.bold};
    }
  }

  @media only screen and (min-width: 1150px) {
    article {
      :hover {
        background-color: #bebebe;
      }
    }
  }
`;

export default PhoneCardListStyled;
