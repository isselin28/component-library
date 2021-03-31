import React, { useState } from "react";
import styled from "styled-components/macro";

const DropdownHeader = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;

  color: #282929;
  border: solid 1px #b2b3b3;
  font-family: "Muli", Helvetica, Arial, sans-serif;
  font-size: 14px;

  height: 32px;
  width: 240px;
  padding: 4px;
`;

const DropdownListWrapper = styled.div`
  border: solid 1px #b2b3b3;

  width: 240px;
  padding: 4px;
`;

const DropdownOption = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;

  color: ${(props) => (props.selected ? "white" : "#282929")};
  background-color: ${(props) => (props.selected ? "#86B8D9" : "none")};
  font-family: "Muli", Helvetica, Arial, sans-serif;
  font-size: 14px;

  height: 24px;
  padding: 4px;
`;

const ListContainer = styled.div`
  display: flex;
  direction: column;

  color: #757575;
  font-family: "Muli", Helvetica, Arial, sans-serif;
  font-size: 14px;
  border: 1px solid #dededf;
  padding: 8px;

  width: 240px;
`;

const PageContainer = styled.div`
  display: flex;
`;

function Dropdown(props) {
  const { list } = props;

  const [isListOpen, setIsListOpen] = useState(false);
  const [headerTitle, setHeaderTitle] = useState(list[0].title);
  const [selectedOption, setSelectedOption] = useState({});
  const [filteredList, setFilteredList] = useState([]);

  const handleHeaderClick = () => {
    setIsListOpen(!isListOpen);
    const selectedOption = list.find((option) => option.title === headerTitle);

    setSelectedOption(selectedOption);
  };

  const handleOptionClick = (item) => {
    setHeaderTitle(item.title);
    setIsListOpen(false);

    console.log(item);

    const filteredList = list.filter((option) => option.title === item.title);
    console.log(filteredList);
    setFilteredList(filteredList);
  };

  // TODO: improve dropdown with resetThenSet
  const handleResetThenSet = () => {};

  return (
    <PageContainer>
      <div>
        <DropdownHeader onClick={handleHeaderClick}>
          {headerTitle}
        </DropdownHeader>
        {isListOpen && (
          <DropdownListWrapper>
            {list.map((item) => (
              <DropdownOption
                key={item.id}
                onClick={() => handleOptionClick(item)}
                selected={selectedOption.id === item.id}
                resetThenSet={handleResetThenSet}
              >
                {item.title}
              </DropdownOption>
            ))}
          </DropdownListWrapper>
        )}
      </div>
      <div>
        {filteredList.map((item) => (
          <ListContainer>{item.title}</ListContainer>
        ))}
      </div>
    </PageContainer>
  );
}

export default Dropdown;
