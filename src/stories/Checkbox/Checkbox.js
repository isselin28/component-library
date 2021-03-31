import styled from "styled-components/macro";

const StyledCheckbox = styled.input.attrs({
  type: "checkbox",
})`
  margin: 0 4px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;

  color: #757575;
  font-family: "Muli", Helvetica, Arial, sans-serif;
  font-size: 14px;
`;

function Checkbox(props) {
  const { label, checked, disabled, ...restProps } = props;
  return (
    <CheckboxContainer>
      <StyledCheckbox checked={checked} disabled={disabled} {...restProps} />
      {label}
    </CheckboxContainer>
  );
}

export default Checkbox;
