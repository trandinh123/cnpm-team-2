import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import CreateGroup from "../../components/CreateGroupModal/useCreateGroupModal";

export default function Test() {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setMessages((prev) => [
            ...prev,
            { sender: "you", content: newMessage },
          ]);
        }}
      >
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit">send</button>
      </form>
      <div>
        {messages.map((m, index) => (
          <div key={index}>
            {m.sender}: {m.content}
          </div>
        ))}
      </div>
    </>
  );
}
