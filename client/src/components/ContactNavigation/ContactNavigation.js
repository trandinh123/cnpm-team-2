import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import AddFriendIcon from "../../resources/icons/AddFriendIcon.svg";
import ListGroupIcon from "../../resources/icons/ListGroupIcon.svg";
import Avatar from "../Avatar/Avatar";
import { useNavigate } from "react-router-dom";

export default function ContactNavigation() {
  const navigate = useNavigate();
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
        <Row>Bạn bè(16)</Row>
        <Row
          className="d-flex align-items-center flex-nowrap"
          role="button"
          style={{ padding: "12px 0" }}
        >
          <Avatar />
          <span
            style={{ fontSize: "16px", color: "#081C36", paddingLeft: "15px" }}
          >
            Nguyễn Văn A
          </span>
        </Row>
        <Row
          className="d-flex align-items-center flex-nowrap"
          role="button"
          style={{ padding: "12px 0" }}
        >
          <Avatar />
          <span
            style={{ fontSize: "16px", color: "#081C36", paddingLeft: "15px" }}
          >
            Nguyễn Văn A
          </span>
        </Row>
        <Row
          className="d-flex align-items-center flex-nowrap"
          role="button"
          style={{ padding: "12px 0" }}
        >
          <Avatar />
          <span
            style={{ fontSize: "16px", color: "#081C36", paddingLeft: "15px" }}
          >
            Nguyễn Văn A
          </span>
        </Row>
      </Container>
    </Container>
  );
}
