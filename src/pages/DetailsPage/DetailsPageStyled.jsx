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

    .details__group {
      -webkit-animation: details__group 0.6s ease-out both;
      animation: details__group 0.6s ease-out both;

      @-webkit-keyframes details__group {
        0% {
          -webkit-transform: translateX(800px) rotate(540deg);
          transform: translateX(800px) rotate(540deg);
          opacity: 0;
        }
        100% {
          -webkit-transform: translateX(0) rotate(0deg);
          transform: translateX(0) rotate(0deg);
          opacity: 1;
        }
      }
      @keyframes details__group {
        0% {
          -webkit-transform: translateX(800px) rotate(540deg);
          transform: translateX(800px) rotate(540deg);
          opacity: 0;
        }
        100% {
          -webkit-transform: translateX(0) rotate(0deg);
          transform: translateX(0) rotate(0deg);
          opacity: 1;
        }
      }
    }

    img {
      -webkit-animation: img 0.6s ease-out both;
      animation: img 0.6s ease-out both;

      @-webkit-keyframes img {
        0% {
          -webkit-transform: translateX(-800px) rotate(-540deg);
          transform: translateX(-800px) rotate(-540deg);
          opacity: 0;
        }
        100% {
          -webkit-transform: translateX(0) rotate(0deg);
          transform: translateX(0) rotate(0deg);
          opacity: 1;
        }
      }
      @keyframes img {
        0% {
          -webkit-transform: translateX(-800px) rotate(-540deg);
          transform: translateX(-800px) rotate(-540deg);
          opacity: 0;
        }
        100% {
          -webkit-transform: translateX(0) rotate(0deg);
          transform: translateX(0) rotate(0deg);
          opacity: 1;
        }
      }
    }

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
