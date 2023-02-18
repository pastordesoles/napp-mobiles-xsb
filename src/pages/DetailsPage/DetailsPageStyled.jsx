import styled from "styled-components";

const DetailsPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1rem;

  article,
  .details__group {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    @media only screen and (min-width: 479px) {
      flex-direction: row;

      .details__group {
        flex-direction: column;
      }
    }

    @media only screen and (min-width: 1150px) {
      flex-direction: row;
      gap: 10rem;

      .details__group {
        flex-direction: column;
        gap: 2rem;
      }
    }
  }

  .no-results {
    color: ${(props) => props.theme.colors.mainColors.dark};
    font-size: 2rem;
    font-weight: ${(props) => props.theme.fontWeights.bold};
    padding: 1rem;
    text-align: center;
  }
`;

export default DetailsPageStyled;
