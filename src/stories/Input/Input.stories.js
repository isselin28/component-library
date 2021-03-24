import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./Input.js";

const stories = storiesOf("Input", module);

stories.add("Default", () => <Input placeholder="Search..." />);
