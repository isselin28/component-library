import React from "react";
import faker from "faker";
import styled from "styled-components/macro";

const ListContainer = styled.div`
  display: flex;
  direction: column;

  color: #757575;
  font-family: "Muli", Helvetica, Arial, sans-serif;
  font-size: 14px;
  border: 1px solid #dededf;
  padding: 8px;

  max-width: 240px;
`;

function InputFilterSingleList() {
  const ListArray = [...Array(5)].map(() => (
    <ListContainer>{faker.random.word()}</ListContainer>
  ));
  return <>{ListArray}</>;
}

export default InputFilterSingleList;
