import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import { useModal } from "../../hooks/useModal";
import { UserContext } from "./../../context/UserContext";
import Row from "react-bootstrap/Container";
import Avatar from "../Avatar/Avatar";
import Form from "react-bootstrap/Form";

export default function useCreateGroupModal() {
  const { user } = useContext(UserContext);

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
        <input
          type="text"
          class="form"
          placeholder="Nhập tên nhóm"
          aria-label="Username"
          style={{
            backgroundColor: "white",
            border: "none",
            borderBottom: "1px solid #d6dbe1",
            fontSize: "12px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "26px",
            width: "487px",
            height: "32px",
          }}
        ></input>
      </Container>
      <Container
        style={{
          marginTop: "16px",
          padding: "0px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p style={{ padding: "0", marginBottom: "0px", fontSize: "12px" }}>
          Thêm bạn vào nhóm
        </p>
        <Container
          class="container"
          style={{
            padding: "0px",
          }}
        >
          <input
            class="form-control"
            style={{
              backgroundColor: "white",
              border: "1px solid #d6dbe1",
              fontSize: "12px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: "26px",
              height: "32px",
              borderRadius: "20px",
              marginTop: "10px",
            }}
            type="text"
            placeholder="Nhập tên, gmai hoặc danh sách gmail"
            aria-label="Search"
          ></input>
        </Container>
      </Container>
      <Container>
        {user?.friends?.map((user) => (
          <Row
            className="d-flex align-items-center flex-nowrap"
            role="button"
            style={{ padding: "12px 0", columnGap: "20px" }}
            key={user?._id}
          >
            <Form.Check type="radio" />
            <>
              <Avatar src={user.picture} width="40px" height="40px" />
              <span
                style={{
                  fontSize: "16px",
                  color: "#081C36",
                  paddingLeft: "15px",
                }}
              >
                {user.name}
              </span>
            </>
          </Row>
        ))}
      </Container>
    </>
  );
  const {
    modal: createGroupModal,
    handleShow: openCreateGroupModal,
    handleClose: closeCreateGroupModal,
  } = useModal({
    content,
    heading: "Tạo nhóm",
    primaryAction: {
      label: "Tạo nhóm",
      action: async () => {},
    },
    secondaryAction: {
      label: "Hủy",
      action: () => {},
    },
  });
  return {
    createGroupModal,
    openCreateGroupModal,
    closeCreateGroupModal,
  };
}
