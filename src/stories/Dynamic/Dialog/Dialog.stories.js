import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Dialog from "./Dialog.js";
import Button from "../../Button/Button.js";

const stories = storiesOf("Dialog", module);

stories.add("Default", () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>Click to show</Button>
      {show && (
        <Dialog onClose={() => setShow(false)}>Hi I am Modal Body</Dialog>
      )}
    </>
  );
});
