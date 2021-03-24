import styled, { css } from "styled-components/macro";

const variantStyles = {
  primary: css`
    color: white;
    background-color: #1478c1;
  `,
};

const Button = styled.button`
  height: 40px;
  border-radius: 4px;
  border: none;
  padding: 0px 16px;
  margin-right: 0.25em;
  cursor: pointer;

  font-family: "Muli", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;

  ${(props) => variantStyles[props.variant]}
`;

Button.defaultProps = {
  backgroundColor: "#3EB8EC",
  border: "none",
  color: "white",
  width: "40px",
};

export default Button;
