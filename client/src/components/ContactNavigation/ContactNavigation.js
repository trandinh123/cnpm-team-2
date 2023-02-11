import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import AddFriendIcon from "../../resources/icons/AddFriendIcon.svg";
import ListGroupIcon from "../../resources/icons/ListGroupIcon.svg";
import Avatar from "../Avatar/Avatar";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export default function ContactNavigation() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  return (
    <Container style={{ paddingLeft: "16px" }}>
      <Container className="p-0">
        <Row
          className="d-flex align-items-center flex-nowrap"
          role="button"
          style={{ padding: "12px 0" }}
          onClick={() => navigate("friendInvitations")}
        >
          <Image
            roundedCircle
            fluid
            src={AddFriendIcon}
            style={{ cursor: "pointer", width: "48px", height: "48px" }}
            className="p-0"
          />
          <span
            style={{ fontSize: "16px", color: "#081C36", paddingLeft: "15px" }}
          >
            Danh sách kết bạn
          </span>
        </Row>
        <Row
          className="d-flex align-items-center flex-nowrap"
          role="button"
          style={{ padding: "12px 0" }}
          onClick={() => navigate("groupInvitations")}
        >
          <Image
            roundedCircle
            fluid
            src={ListGroupIcon}
            style={{ cursor: "pointer", width: "48px", height: "48px" }}
            className="p-0"
          />
          <span
            style={{ fontSize: "16px", color: "#081C36", paddingLeft: "15px" }}
          >
            Danh sách nhóm
          </span>
        </Row>
      </Container>
      <Container className="p-0">
        <Row>Bạn bè({user?.friends?.length})</Row>
        {user?.friends?.map((user) => (
          <Row
            className="d-flex align-items-center flex-nowrap"
            role="button"
            style={{ padding: "12px 0" }}
            key={user?._id}
            onClick={() => {
              navigate(`/contact/privateConversation/${user._id}`);
            }}
          >
            <Avatar src={user.picture} />
            <span
              style={{
                fontSize: "16px",
                color: "#081C36",
                paddingLeft: "15px",
              }}
            >
              {user.name}
            </span>
          </Row>
        ))}
      </Container>
    </Container>
  );
}
