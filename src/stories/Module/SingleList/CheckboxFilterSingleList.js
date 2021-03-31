import React, { useState } from "react";
import Checkbox from "../../Checkbox/Checkbox.js";
import styled from "styled-components/macro";
import list from "../../List/List.js";

const ListItem = styled.div`
  display: flex;
  direction: column;

  color: #757575;
  font-family: "Muli", Helvetica, Arial, sans-serif;
  font-size: 14px;
  border: 1px solid #86b8d9;
  padding: 8px;

  max-width: 240px;
`;

const ListContainer = styled.div`
  padding: 16px 0;
`;

function CheckboxFilterSingleList() {
  const [activeList, setActiveList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  let activeCategories = [];
  const onChange = (type, isChecked) => {
    if (isChecked) {
      activeCategories.push(type);
    } else {
      activeCategories = activeCategories.filter((item) => item !== type);
    }
    console.log(activeCategories);
  };

  const handleFilterList = () => {
    let filteredList = [];
    activeCategories.forEach((category) => {
      const filtered = list.filter((item) => item.type === category);
      filteredList.push(...filtered);
    });

    console.log(filteredList);
    setActiveList(filteredList);
    setIsChecked(false);
  };

  console.log(activeList);

  return (
    <>
      {list.map((item) => (
        <Checkbox
          label={item.type}
          onChange={(e) => onChange(item.type, e.target.checked)}
          value={isChecked}
        />
      ))}
      <input type="submit" onClick={handleFilterList} />
      <ListContainer>
        {activeList.length > 0
          ? activeList.map((item) => <ListItem>{item.name}</ListItem>)
          : list.map((item) => <ListItem>{item.name}</ListItem>)}
      </ListContainer>
    </>
  );
}

export default CheckboxFilterSingleList;
