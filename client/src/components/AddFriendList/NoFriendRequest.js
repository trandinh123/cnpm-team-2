import React from "react";
import bgNoFriendRequest from "../../img/Blog_Audience.png";
import styled from "styled-components";

export const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Text = styled.p`
  color: var(--text-secondary);
  font-size: 14px;
  margin: 20px 0 0;
`;

export const Button = styled.button`
  border: none;
  width: fit-content;
  background-color: var(--button-primary-normal);
  color: var(--button-primary-text);
  padding: 4px 16px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
  margin-top: 10px;
`;

export const Img = styled.img`
  width: 350px;
  height: 105px;
`;

const NoFriendRequest = () => {
  return (
    <Content>
      <Img src={bgNoFriendRequest} referrerpolicy="no-referrer" />
      <Text>Bạn chưa có lời mời kết bạn nào</Text>
      <Button>Thêm bạn</Button>
    </Content>
  );
};

export default NoFriendRequest;
