import styled from "styled-components";

const DetailActionsStyled = styled.form`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-direction: column;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  transition: all 0.3s;

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