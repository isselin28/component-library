import React from "react";
import { storiesOf } from "@storybook/react";
import List from "./List.js";
import styled from "styled-components/macro";

const stories = storiesOf("List", module);

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

stories.add("Default", () =>
  List.map((item) => <ListContainer>{item.name}</ListContainer>)
);
