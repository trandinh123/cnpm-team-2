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
import { IoIosPeople } from "react-icons/io";
import { AiFillSetting } from "react-icons/ai";
import { useModal } from "../../hooks/useModal";
import Form from "react-bootstrap/Form";
import Select from "react-select";
import LoadingPage from "../LoadingPage/LoadingPage";

export default function GroupConversation({ socket }) {
  const [newMessage, setNewMessage] = useState("");
  const { groupId } = useParams();
  const { user } = useContext(UserContext);
  const {
    data: conversation,
    conversationLoading,
    refetch: refetchConversation,
  } = useFetchApi({
    initialUrl: `${SERVER_URL}/conversation/${groupId}`,
    defaultData: {},
    dependencies: [groupId],
  });
  const [settingForm, setSettingForm] = useState({});
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
    if (conversation?._id) {
      socket.emit("join group", {
        conversation,
      });
    }

    return () =>
      socket.emit("leave group", {
        conversation,
      });
  }, [groupId, conversation, socket]);
  useEffect(() => {
    socket.on("group message", ({ from, content }) => {
      setMessages((prev) => [...prev, { content, sender: from }]);
    });
    return () => socket.off("group message");
  }, [socket]);

  useEffect(() => {
    bottomRef?.current?.scrollIntoView();
  }, [messages]);

  useEffect(() => {
    setSettingForm({
      ...conversation,
      users: conversation?.users?.map((u) => u._id),
    });
  }, [conversation]);

  const contentSettingModal = (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Tên nhóm</Form.Label>
        <Form.Control
          className="chatNameInput"
          placeholder=""
          value={settingForm?.chatName}
          onChange={(e) =>
            setSettingForm((prev) => ({
              ...prev,
              chatName: e.target.value,
            }))
          }
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Thành viên</Form.Label>
        <Select
          defaultValue={{
            value: user._id,
            label: user.name,
          }}
          name="list friends"
          options={conversation?.users?.map((user) => {
            return {
              value: user?._id,
              label: user?.name,
            };
          })}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Thêm thành viên</Form.Label>
        <Select
          defaultValue={[]}
          isMulti
          name="list friends"
          onChange={(value) => {
            const newMember = value.map((v) => v?.value);
            setSettingForm((prev) => ({
              ...prev,
              users: [
                ...new Set([
                  ...conversation.users.map((u) => u._id),
                  ...newMember,
                ]),
              ],
            }));
          }}
          options={user?.friends
            .filter(
              (friend) =>
                !conversation?.users?.map((u) => u?._id).includes(friend?._id)
            )
            ?.map((friend) => {
              return {
                value: friend?._id,
                label: friend?.name,
              };
            })}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </Form.Group>
      {user?._id === conversation?.groupAdmin && (
        <Form.Group className="mb-3">
          <Form.Label>Xóa thành viên</Form.Label>
          <Select
            defaultValue={[]}
            isMulti
            name="list users"
            onChange={(value) => {
              const deletedMember = value.map((v) => v?.value);
              setSettingForm((prev) => ({
                ...prev,
                users: [
                  ...new Set([
                    ...conversation?.users.map((u) => u._id),
                    ...prev.users,
                  ]),
                ].filter((u) => !deletedMember.includes(u)),
              }));
            }}
            options={conversation?.users
              ?.filter(({ _id }) => user?._id !== _id)
              .map((user) => {
                return {
                  value: user?._id,
                  label: user?.name,
                };
              })}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </Form.Group>
      )}
    </>
  );
  const { modal: settingModal, handleShow: openSettingModal } = useModal({
    heading: "Cài đặt nhóm",
    content: contentSettingModal,
    secondaryAction: {
      label: "Hủy",
      action: () => {},
    },
    primaryAction: {
      label: "Lưu",
      action: async () => {
        try {
          await fetch(`${SERVER_URL}/conversation/${conversation._id}`, {
            method: "PUT",
            credentials: "include",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(settingForm),
          });
          await refetchConversation();
        } catch (err) {
          console.log(err);
        }
      },
    },
  });

  if (conversationLoading || messageLoading || !friend) {
    return <LoadingPage />;
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
    socket.emit("group message", {
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
      <div
        className="d-flex align-items-center justify-content-around"
        style={{
          background: "white",
        }}
      >
        <Row
          style={{
            height: "68px",
            width: "70%",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: 0,
            margin: 0,
          }}
        >
          <div style={{ maxWidth: "48px" }}>
            <IoIosPeople size="48px" />
          </div>
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
            {conversation.chatName}
          </p>
        </Row>
        <IconButton
          icon={<AiFillSetting size="24px" />}
          onClick={() => {
            openSettingModal();
            setSettingForm({
              ...conversation,
              users: conversation?.users?.map((u) => u._id),
            });
          }}
        />
      </div>
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
            background: "whitesmoke",
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
      {settingModal}
    </Container>
  );
}
