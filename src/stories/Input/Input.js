import styled from "styled-components/macro";

const Input = styled.input`
  color: #dededf;
  outline: 0;
  border: 1px solid #dededf;
  border-radius: 4px;
  min-width: 120px;
  padding: 8px;

  :active {
    border-color: #86b8d9;
  }
  :focus {
    border-color: ${(props) => (props.error ? "red" : "#86B8D9")};
  }
`;

export default Input;
