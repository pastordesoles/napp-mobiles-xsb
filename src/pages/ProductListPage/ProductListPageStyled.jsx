import styled from "styled-components";

const ProductListPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  .input {
    height: 40px;
    line-height: 28px;
    padding: 0 1rem;
    border: 2px solid black;
    border-radius: 8px;
    outline: none;
    color: #0d0c22;
    transition: 0.3s ease;
  }
  .input::placeholder {
    color: #9e9ea7;
    font-size: 1rem;
  }
  .input:focus,
  input:hover {
    outline: none;
    border-color: rgba(27, 19, 45, 0.4);
    background-color: #fff;
    box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
  }

  .no-results {
    color: ${(props) => props.theme.colors.mainColors.dark};
    font-size: 2rem;
    font-weight: ${(props) => props.theme.fontWeights.bold};
    padding: 1rem;
    text-align: center;
  }
`;

export default ProductListPageStyled;
