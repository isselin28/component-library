import styled from "styled-components/macro";

const StyledCheckbox = styled.input.attrs({
  type: "radio",
})`
  margin: 0 4px;
`;

const RadioContainer = styled.div`
  display: flex;
  align-items: center;

  color: #757575;
  font-family: "Muli", Helvetica, Arial, sans-serif;
  font-size: 14px;
`;

function Checkbox(props) {
  const { label, checked, disabled, ...restProps } = props;
  return (
    <RadioContainer>
      <StyledCheckbox checked={checked} disabled={disabled} {...restProps} />
      {label}
    </RadioContainer>
  );
}

export default Checkbox;
