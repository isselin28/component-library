import React from "react";
import { storiesOf } from "@storybook/react";
import Dropdown from "./Dropdown.js";

const stories = storiesOf("Dropdown", module);

const locationList = [
  {
    id: 0,
    title: "New York",
    selected: false,
    key: "America",
  },
  {
    id: 1,
    title: "Dublin",
    selected: false,
    key: "Europe",
  },
  {
    id: 2,
    title: "California",
    selected: false,
    key: "America",
  },
  {
    id: 3,
    title: "Istanbul",
    selected: false,
    key: "MiddleEast",
  },
  {
    id: 4,
    title: "Izmir",
    selected: false,
    key: "MiddleEast",
  },
  {
    id: 5,
    title: "Oslo",
    selected: false,
    key: "Europe",
  },
  {
    id: 6,
    title: "Jakarta",
    selected: false,
    key: "Asia",
  },
];

stories.add("Single Selection", () => <Dropdown list={locationList} />);
