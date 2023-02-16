import styled from "styled-components";

const BreadcrumbsStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  a {
    color: ${(props) => props.theme.colors.mainColors.dark};
    font-size: 1.125rem;
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }
`;

export default BreadcrumbsStyled;
