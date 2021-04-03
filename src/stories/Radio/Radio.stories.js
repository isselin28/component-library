import React from "react";
import { storiesOf } from "@storybook/react";
import Radio from "./Radio.js";

const stories = storiesOf("Radio", module);

stories.add("Uncontrolled", () => <Radio label="hello" />);
stories.add("Controlled Checked", () => (
  <Radio checked disabled label="hello" />
));
stories.add("Controlled UnChecked", () => <Radio disabled label="hello" />);
