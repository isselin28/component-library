import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button.js";

const stories = storiesOf("Button", module);

stories.add("Primary", () => <Button variant="primary">Click Me</Button>);
stories.add("Secondary", () => <Button>Click Me</Button>);
