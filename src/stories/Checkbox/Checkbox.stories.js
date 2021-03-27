import React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./Checkbox.js";

const stories = storiesOf("Checkbox", module);

stories.add("Uncontrolled", () => <Checkbox />);
stories.add("Controlled Checked", () => <Checkbox checked disabled />);
stories.add("Controlled UnChecked", () => <Checkbox disabled />);
