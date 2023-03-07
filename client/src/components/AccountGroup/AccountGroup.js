import React from "react";
import addFriend from "../../img/addperson.png";
import styled from "styled-components";
import GroupList from "./GroupList";

export const Wrapper = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const Title = styled.div`
  display: flex;
  height: 64px;
  border-bottom: 1px solid var(--border);
  align-items: center;
`;

export const Img = styled.img`
  width: 48px;
  height: 48px;
  margin: 0 11px 0 16px;
`;

export const Text = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 600;
`;

const AccountGroup = ({ children }) => {
  return (
    <Wrapper>
      <Title>
        <Img src={addFriend} style={{}} referrerpolicy="no-referrer" />
        <Text>Danh sách nhóm</Text>
      </Title>
      <GroupList />
    </Wrapper>
  );
};

export default AccountGroup;
