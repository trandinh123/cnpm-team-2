import React from "react";
import styled from "styled-components";
import FriendList from "./FriendBox";

export const Content = styled.div`
  background-color: var(--surface-background-subtle);
  height: 100%;
  padding: 40px;
  padding-bottom: 80px;
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
  justify-content: center;
`;

const FriendSuggestion = () => {
  return (
    <Content>
      <Text>Gợi ý kết bạn</Text>
      <ListBox>
        <FriendList />
        <FriendList />
        <FriendList />
        <FriendList />
        <FriendList />
        <FriendList />
        <FriendList />
        <FriendList />
        <FriendList />
        <FriendList />
        <FriendList />
        <FriendList />
        <FriendList />
        <FriendList />
        <FriendList />
      </ListBox>
    </Content>
  );
};

export default FriendSuggestion;
