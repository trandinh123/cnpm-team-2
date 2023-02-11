import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "./../../context/UserContext";
import useFetchApi from "./../../hooks/useFetchApi";
import { SERVER_URL } from "../../config";

export default function PrivateConversation({ socket }) {
  const [newMessage, setNewMessage] = useState("");
  const { friendId } = useParams();
  const { user } = useContext(UserContext);
  const { data: conversation, conversationLoading } = useFetchApi({
    initialUrl: `${SERVER_URL}/conversation/privateConversation/${friendId}`,
    defaultData: {},
    dependencies: [friendId],
  });

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

  if (conversationLoading || messageLoading) {
    return <>Loading...</>;
  }
  return (
    <>
      <form
        onSubmit={(e) => {
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
            },
          ]);
          setNewMessage("");
        }}
      >
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit">send</button>
      </form>
      <div>
        {messages.map((message) => (
          <div key={message._id}>
            {message.sender._id === user._id ? "you" : message.sender.name}:{" "}
            {message.content}
          </div>
        ))}
      </div>
    </>
  );
}
