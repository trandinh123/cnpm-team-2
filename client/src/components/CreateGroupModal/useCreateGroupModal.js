import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import { useModal } from "../../hooks/useModal";
import { UserContext } from "./../../context/UserContext";
import Row from "react-bootstrap/Container";
import Avatar from "../Avatar/Avatar";
import Form from "react-bootstrap/Form";
import { SERVER_URL } from "../../config";

export default function useCreateGroupModal() {
  const { user } = useContext(UserContext);
  const [groupName, setGroupName] = useState("");
  const [groupUser, setGroupUser] = useState([]);

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
          aria-label="groupName"
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
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
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
            class="form-control groupNameInput"
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
            className="d-flex align-items-center flex-nowrap userCheckbox"
            role="button"
            style={{ padding: "12px 0", columnGap: "20px" }}
            key={user?._id}
          >
            <Form.Check
              type="checkbox"
              value={user?._id}
              onClick={(e) => {
                if (e.target.checked) {
                  return setGroupUser((prev) => {
                    return [...new Set([...prev, user?._id])];
                  });
                }
                setGroupUser((prev) => prev.filter((id) => id !== user?._id));
              }}
            />
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
      action: async () => {
        setGroupName("");
        setGroupUser([]);
        await fetch(`${SERVER_URL}/conversation/`, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chatName: groupName,
            isGroupChat: true,
            users: [...groupUser, user._id],
            groupAdmin: user._id,
          }),
        });
      },
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
