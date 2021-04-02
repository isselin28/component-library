import React from "react";
import Button from "../../Button/Button.js";
import styled from "styled-components/macro";

const StyledModal = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1053;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.5);
`;

const ModalDialog = styled.div`
  position: relative;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  max-width: 240px;
`;

const ModalContent = styled.div`
  position: relative;
  background-color: white;
  border-radius: 8px;
  padding: 16px;
`;

const ModalBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  font-family: "Muli", Helvetica, Arial, sans-serif;
  font-size: 14px;
`;

function Dialog(props) {
  const { onClose, children } = props;

  return (
    <>
      <StyledModal>
        <ModalDialog>
          <ModalContent>
            <ModalBody>
              {children}
              <Button onClick={onClose}>Close</Button>
            </ModalBody>
          </ModalContent>
        </ModalDialog>
      </StyledModal>
    </>
  );
}

export default Dialog;
