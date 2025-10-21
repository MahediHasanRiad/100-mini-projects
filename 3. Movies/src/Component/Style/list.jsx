import styled from "styled-components";
import { Link } from "react-router-dom";

export const LI = styled.li`
    list-style: none;
    float: left;
    margin: 10px;
    font-size: 1.2rem;
    textDecoration: none;
    color: inherit;

    &:active {
        color: blue;
    }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  padding: 5px 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }

  &:active {
    color: green;
  }
`;

export const A = styled.a({
  textDecoration: 'none',
  color: 'inherit'
})