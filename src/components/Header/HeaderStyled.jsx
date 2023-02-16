import styled from "styled-components";

const HeaderStyled = styled.header`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;

  .cart-container {
    font-size: 2rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export default HeaderStyled;
