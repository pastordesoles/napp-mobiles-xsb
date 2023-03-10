import styled from "styled-components";

const DetailsPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1rem;

  overflow: hidden;

  article,
  .details__sections {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    .details__sections {
      -webkit-animation: details__sections 0.6s ease-out both;
      animation: details__sections 0.6s ease-out both;

      @-webkit-keyframes details__sections {
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
      @keyframes details__sections {
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

    .details__image {
      -webkit-animation: details__image 0.6s ease-out both;
      animation: details__image 0.6s ease-out both;

      @-webkit-keyframes details__image {
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
      @keyframes details__image {
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

      .details__sections {
        flex-direction: column;
      }
    }

    @media only screen and (min-width: 1150px) {
      flex-direction: row;
      gap: 10rem;

      .details__sections {
        flex-direction: column;
        gap: 2rem;
      }
    }
  }

  .return {
    color: ${(props) => props.theme.colors.mainColors.dark};
    font-size: 1rem;
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }

  .no-results {
    color: ${(props) => props.theme.colors.mainColors.dark};
    font-size: 2rem;
    font-weight: ${(props) => props.theme.fontWeights.bold};
    text-align: center;
  }
`;

export default DetailsPageStyled;
