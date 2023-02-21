import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Avatar from "../Avatar/Avatar";
import Row from "react-bootstrap/Row";
import useFetchApi from "../../hooks/useFetchApi";
import { SERVER_URL, CLIENT_URL } from "../../config";
import { IoIosPeople } from "react-icons/io";
import PeopleIcon from "../../resources/icons/People.svg";
import { UserContext } from "./../../context/UserContext";

export default function MessageNavigation() {
  const { data: latestMessages } = useFetchApi({
    initialUrl: `${SERVER_URL}/message/getLatestMessage`,
  });
  const { user } = useContext(UserContext);
  return (
    <Container>
      {latestMessages?.map((message) => {
        return (
          <Row
            key={message._id}
            className="d-flex align-items-center flex-nowrap"
            role="button"
            style={{ padding: "12px 0" }}
            onClick={() => {
              window.location.href = `${CLIENT_URL}/contact/${
                message.isGroupChat
                  ? "groupConversation"
                  : "privateConversation"
              }/${message.isGroupChat ? message._id : message.users[0]._id}`;
            }}
          >
            {message.isGroupChat ? (
              <Avatar src={PeopleIcon} />
            ) : (
              <Avatar src={message.users[0].picture} />
            )}
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
                {message.isGroupChat ? message.chatName : message.users[0].name}
              </p>
              <p style={{ color: "#7589A3", fontSize: "12px", margin: 0 }}>
                {message?.latestMessage?.sender?._id === user._id
                  ? "Bạn"
                  : message?.latestMessage?.sender?.name}
                :{" "}
                {message?.latestMessage?.createdAt > user.lastActiveAt ? (
                  <b>{message?.latestMessage?.content}</b>
                ) : (
                  message?.latestMessage?.content
                )}
              </p>
            </Container>
          </Row>
        );
      })}
      {/* <Row
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
      </Row> */}
    </Container>
  );
}
