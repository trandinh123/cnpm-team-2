import React from "react";
import styled from "styled-components";
import { IoIosPeople } from "react-icons/io";

export const Text2 = styled.p`
  font-size: 14px;
  color: var(--text-secondary);
  margin: 4px 0 0;
`;

export const Img = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 100px;
  margin: 16px 73px 0;
`;

export const FriendBox = styled.div`
  width: 250px;
  height: 250px;
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 8px;
`;

export const NameFriend = styled.h4`
  font-size: 16px;
  margin: 8px 0 0;
`;

export const Button = styled.button`
  border: 1px solid var(--button-tertiary-primary-text);
  background-color: transparent;
  padding: 0 16px;
  margin: 10px 7px 6px 0;
  height: 32px;
  min-width: 98px;
  border-radius: 8px;
  text-transform: uppercase;
  color: var(--button-tertiary-primary-text);
  font-weight: 500;
  &:hover {
    background-color: var(--button-tertiary-primary-hover);
  }
`;

const GroupInfoBox = ({ name = "", onAccept = () => {}, loading = false }) => {
  if (loading) {
    return (
      <FriendBox>
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only"></span>
        </div>
      </FriendBox>
    );
  }
  return (
    <FriendBox>
      <IoIosPeople size="96px" />
      <NameFriend>{name}</NameFriend>
      <Button onClick={onAccept} className="actionBtn">
        Nhắn tin
      </Button>
    </FriendBox>
  );
};

export default GroupInfoBox;
