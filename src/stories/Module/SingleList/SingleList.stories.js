import React from "react";
import { storiesOf } from "@storybook/react";
import InputFilterSingleList from "./InputFilterSingleList.js";
import CheckboxFilterSingleList from "./CheckboxFilterSingleList.js";

const stories = storiesOf("Single List", module);

stories.add("By Input", () => <InputFilterSingleList />);
stories.add("By Checkbox", () => <CheckboxFilterSingleList />);
