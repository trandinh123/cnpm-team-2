import React, { useContext, useState } from "react";
import styled from "styled-components";
import FriendList from "./FriendBox";
import { UserContext } from "../../context/UserContext";
import { SERVER_URL } from "../../config";
import { useNavigate } from "react-router-dom";

export const Content = styled.div`
  background-color: var(--surface-background-subtle);
  padding: 40px;
  padding-bottom: 40px;
  flex: 1 1 auto;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  width: 100%;
`;

export const ListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ListFriends = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <Content>
      <Text>Tất cả({user?.friends?.length})</Text>
      <ListBox>
        {user?.friends?.map((user) => (
          <FriendList
            key={user.name}
            name={user.name}
            avatar={user.picture}
            onAccept={async () => {
              navigate(`/contact/privateConversation/${user._id}`);
            }}
            actionLabel="Nhắn tin"
          />
        ))}
      </ListBox>
    </Content>
  );
};

export default ListFriends;
