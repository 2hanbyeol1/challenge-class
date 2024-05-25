import styled from "styled-components";

const Button = styled.button`
  font-size: 13px;
  font-weight: 500;
  color: rgb(128, 128, 128);
  transition: all 120ms ease 0s;
  padding: 4px 8px;
  &:hover {
    font-weight: 600;
    color: rgb(18, 18, 18);
  }
`;

export default Button;
