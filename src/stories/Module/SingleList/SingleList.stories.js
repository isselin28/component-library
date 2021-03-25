import React from "react";
import { storiesOf } from "@storybook/react";
import InputFilterSingleList from "./InputFilterSingleList.js";

const stories = storiesOf("Single List", module);

stories.add("By Input", () => <InputFilterSingleList />);
