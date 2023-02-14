import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function useModal({
  content = "",
  heading = "",
  secondaryAction = {
    label: "Cancel",
    action: () => {},
  },
  primaryAction = {
    label: "Save",
    action: () => {},
  },
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const modal = (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{content}</Modal.Body>
      <Modal.Footer>
        <Button
          className="cancelbtn"
          variant="secondary"
          onClick={() => {
            handleClose();
            secondaryAction.action();
          }}
        >
          {secondaryAction.label}
        </Button>
        <Button
          className="primaryButton"
          style={{ background: "#0068ff" }}
          variant="primary"
          onClick={() => {
            handleClose();
            primaryAction.action();
          }}
        >
          {primaryAction.label}
        </Button>
      </Modal.Footer>
    </Modal>
  );
  return {
    handleShow,
    handleClose,
    modal,
  };
}
