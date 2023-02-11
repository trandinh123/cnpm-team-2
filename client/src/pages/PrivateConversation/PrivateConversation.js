import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import React, { useState, useEffect, useContext, useRef } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "./../../context/UserContext";
import useFetchApi from "./../../hooks/useFetchApi";
import { SERVER_URL } from "../../config";
import { FiSend } from "react-icons/fi/";
import IconButton from "../../components/IconButton/IconButton";
import Message from "../../components/Message/Message";

export default function Test({ socket }) {
  const [newMessage, setNewMessage] = useState("");
  const { friendId } = useParams();
  const { user } = useContext(UserContext);
  const { data: conversation, conversationLoading } = useFetchApi({
    initialUrl: `${SERVER_URL}/conversation/privateConversation/${friendId}`,
    defaultData: {},
    dependencies: [friendId],
  });
  const friend = conversation?.users?.find(({ _id }) => _id !== user._id);
  const bottomRef = useRef();
  const {
    data: messages,
    setData: setMessages,
    loading: messageLoading,
  } = useFetchApi({
    initialUrl: `${SERVER_URL}/message/all/?conversationId=${conversation?._id}`,
    defaultData: [],
    dependencies: [conversation?._id],
  });

  useEffect(() => {
    socket.on("private message", ({ from, content }) => {
      console.log("received", content);
      setMessages((prev) => [...prev, { content, sender: from }]);
    });
    return () => socket.off("private message");
  }, [socket]);

  useEffect(() => {
    bottomRef?.current?.scrollIntoView();
  }, [messages]);

  if (conversationLoading || messageLoading || !friend) {
    return <>Loading...</>;
  }

  const groupMessage = (messages) => {
    const res = [];
    let currArr = [];
    messages.forEach((message, index) => {
      if (index === 0) {
        currArr = [message];
        return;
      }
      if (message.sender._id === messages[index - 1].sender._id) {
        currArr.push(message);
        return;
      }
      res.push(currArr);
      currArr = [message];
    });
    if (currArr.length) {
      res.push(currArr);
    }
    return res;
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    socket.emit("private message", {
      to: friendId,
      content: newMessage,
      conversation,
    });
    setMessages((prev) => [
      ...prev,
      {
        content: newMessage,
        sender: {
          _id: user._id,
        },
        createdAt: new Date(),
      },
    ]);
    setNewMessage("");
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Container
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "0",
      }}
    >
      <Row
        style={{
          height: "68px",
          width: "100%",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "row",
          padding: 0,
          margin: 0,
        }}
      >
        <img
          class="rounded-circle"
          src={friend.picture}
          style={{
            width: "48px",
            height: "48px",
            padding: "0px",
            marginLeft: "16px",
            marginTop: "12px",
          }}
          alt="friend avatar"
        ></img>
        <p
          class="font-weight-bold"
          style={{
            display: "flex",
            width: "236px",
            height: "32px",
            marginTop: "13px",
            marginLeft: "10px",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          {friend.name}
        </p>
      </Row>
      <Container
        style={{
          padding: "0px",
          marginTop: "2px",
          backgroundColor: "white",
          overflow: "hidden",
          display: "flex",
          flexFlow: "column",
          minHeight: "calc(100vh - 68px)",
        }}
      >
        <Container
          class="card-body"
          data-mdb-perfect-scrollbar="true"
          style={{
            position: "relative",
            padding: "24px",
            overflowY: "scroll",
            overflowX: "hidden",
            flex: "1 1 auto",
          }}
        >
          {groupMessage(messages).map((listMessage) => (
            <Message
              listMessage={listMessage}
              isSenderMessage={listMessage[0].sender._id === user._id}
            />
          ))}
          <div ref={bottomRef}></div>
        </Container>
        <form onSubmit={handleSendMessage}>
          <Container
            class="card-footer text-muted"
            style={{
              backgroundColor: "white",
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              padding: "16px",
              marginTop: "2px",
              borderTop: "2px solid whitesmoke",
            }}
          >
            <img
              src={user.picture}
              class="rounded-circle"
              style={{ width: "45px", height: "45px" }}
              alt="user avatar"
            ></img>
            <input
              type="text"
              class="form-control form-control-lg messageInput"
              id="exampleFormControlInput1"
              placeholder="type message"
              style={{ border: "none" }}
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            ></input>
            <div style={{ paddingRight: "20px" }}>
              <IconButton
                type="submit"
                icon={<FiSend size="35px" color="#4267B2" />}
                customClass="sendBtn"
                onClick={handleSendMessage}
              />
            </div>
          </Container>
        </form>
      </Container>
    </Container>
  );
}
