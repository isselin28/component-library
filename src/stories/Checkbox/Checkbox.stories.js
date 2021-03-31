import React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./Checkbox.js";

const stories = storiesOf("Checkbox", module);

stories.add("Uncontrolled", () => <Checkbox label="hello" />);
stories.add("Controlled Checked", () => (
  <Checkbox checked disabled label="hello" />
));
stories.add("Controlled UnChecked", () => <Checkbox disabled label="hello" />);
