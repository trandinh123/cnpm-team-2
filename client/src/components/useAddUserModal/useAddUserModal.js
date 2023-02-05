import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { useModal } from "../../hooks/useModal";
import { SERVER_URL } from "../../config";

export default function useAddUserModal() {
  const [email, setEmail] = useState("");
  const content = (
    <>
      <Container
        class="container"
        style={{
          padding: "0px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <p
          class="font-weight-bold"
          style={{
            width: "130px",
            height: "22px",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Email
        </p>
        <input
          type="text"
          class="form"
          placeholder="Nhập email"
          aria-label="Username"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          style={{
            width: "265px",
            border: "none",
            marginLeft: "31px",
            height: "19px",
            fontSize: "14px",
            outline: "0px",
            padding: "0px",
          }}
        ></input>
      </Container>
    </>
  );
  const {
    modal: addUserModal,
    handleShow: openAddUserModal,
    handleClose: closeAddUserModal,
  } = useModal({
    content,
    heading: "Thêm bạn",
    primaryAction: {
      label: "Thêm bạn",
      action: async () => {
        setEmail("");
        await fetch(`${SERVER_URL}/user/addfriend/${email}`, {
          method: "GET",
          credentials: "include",
        });
      },
    },
    secondaryAction: {
      label: "Hủy",
    },
  });
  return {
    addUserModal,
    openAddUserModal,
    closeAddUserModal,
  };
}
