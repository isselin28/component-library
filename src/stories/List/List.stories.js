import React from "react";
import { storiesOf } from "@storybook/react";
import List from "./List.js";

const stories = storiesOf("List", module);

stories.add("Default", () => <List />);
