import styled from "styled-components";

const DetailActionsStyled = styled.form`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-direction: column;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  transition: all 0.3s;
  border-radius: 15px;

  select {
    outline: 0;
    border: 0;
    background: none;
    border: 1px solid #d9d9d9;
    padding: 8px 0px;
    margin-bottom: 30px;
    color: #515151;
    text-transform: uppercase;
    width: 125px;
    font-family: inherit;
    margin-right: 5px;
    transition: all 0.3s ease;
    font-weight: 500;
  }

  .form__label {
    font-weight: bold;
  }

  button {
    outline: 0;
    border: 0;
    background: none;
    border: 1px solid #d9d9d9;
    padding: 8px 0px;
    margin-bottom: 30px;
    color: #515151;
    text-transform: uppercase;
    width: 125px;
    font-family: inherit;
    margin-right: 5px;
    transition: all 0.3s ease;
    font-weight: 500;
    -webkit-animation: button 0.65s linear both;
    animation: button 0.65s linear both;

    @-webkit-keyframes button {
      0% {
        -webkit-transform: scale(1) rotateZ(0);
        transform: scale(1) rotateZ(0);
      }
      50% {
        -webkit-transform: scale(2) rotateZ(180deg);
        transform: scale(2) rotateZ(180deg);
      }
      100% {
        -webkit-transform: scale(1) rotateZ(360deg);
        transform: scale(1) rotateZ(360deg);
      }
    }
    @keyframes button {
      0% {
        -webkit-transform: scale(1) rotateZ(0);
        transform: scale(1) rotateZ(0);
      }
      50% {
        -webkit-transform: scale(2) rotateZ(180deg);
        transform: scale(2) rotateZ(180deg);
      }
      100% {
        -webkit-transform: scale(1) rotateZ(360deg);
        transform: scale(1) rotateZ(360deg);
      }
    }

    @media only screen and (min-width: 1150px) {
      &:hover {
        border: 1px solid #aedaa6;
        color: #aedaa6;
        cursor: pointer;
      }
    }
  }
`;

export default DetailActionsStyled;
