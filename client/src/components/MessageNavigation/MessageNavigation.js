import React from "react";
import Container from "react-bootstrap/Container";
import Avatar from "../Avatar/Avatar";
import Row from "react-bootstrap/Row";

export default function MessageNavigation() {
  return (
    <Container>
      <Row
        className="d-flex align-items-center flex-nowrap"
        role="button"
        style={{ padding: "12px 0" }}
      >
        <Avatar />
        <Container
          className="d-flex flex-column justify-content-around"
          style={{ rowGap: "10px", padding: "2px auto" }}
        >
          <p
            style={{
              color: "black",
              fontSize: "14px",
              margin: 0,
              fontWeight: 500,
            }}
          >
            CNPM.K2.N2
          </p>
          <p style={{ color: "#7589A3", fontSize: "12px", margin: 0 }}>
            Bạn đã tham gia nhóm
          </p>
        </Container>
      </Row>
      <Row
        className="d-flex align-items-center flex-nowrap"
        role="button"
        style={{ padding: "12px 0" }}
      >
        <Avatar />
        <Container
          className="d-flex flex-column justify-content-around"
          style={{ rowGap: "10px", padding: "2px auto" }}
        >
          <p
            style={{
              color: "black",
              fontSize: "14px",
              margin: 0,
              fontWeight: 500,
            }}
          >
            Nguyen Van A
          </p>
          <p style={{ color: "#7589A3", fontSize: "12px", margin: 0 }}>
            Hà đã gửi tin nhắn
          </p>
        </Container>
      </Row>
    </Container>
  );
}
