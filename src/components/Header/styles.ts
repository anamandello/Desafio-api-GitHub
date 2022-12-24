import styled from "styled-components";
import Cover from '../../assets/Cover.png'

export const HeaderContainer = styled.header`
  margin: auto;
  height: 18.5rem;
  max-width: 1440px;

  div {
    background-image: url(${Cover});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: inherit;
    width: inherit;
  }
`