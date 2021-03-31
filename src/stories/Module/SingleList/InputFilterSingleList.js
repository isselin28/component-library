import React, { useState } from "react";
import Input from "../../Input/Input.js";
import faker from "faker";
import styled from "styled-components/macro";
import debounce from "debounce";

const ListContainer = styled.div`
  display: flex;
  direction: column;

  color: #757575;
  font-family: "Muli", Helvetica, Arial, sans-serif;
  font-size: 14px;
  border: 1px solid #86b8d9;
  padding: 8px;

  max-width: 240px;
`;

function InputFilterSingleList() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleOnChange = debounce((keyword) => {
    const trimmedKeyword = keyword.trim().toLowerCase();
    setSearchTerm(trimmedKeyword);
  }, 500);

  const ListArray = [...Array(8)].map(() => faker.random.word());

  const filteredList = ListArray.filter((item) => {
    const lowerCaseItem = item.toLowerCase();
    return lowerCaseItem.includes(searchTerm);
  });

  return (
    <>
      <Input
        placeholder="Search..."
        onChange={(e) => handleOnChange(e.target.value)}
      />
      {filteredList
        ? filteredList.map((item) => <ListContainer>{item}</ListContainer>)
        : ListArray}
    </>
  );
}

export default InputFilterSingleList;
