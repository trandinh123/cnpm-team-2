import React, { useContext, useState } from "react";
import styled from "styled-components";
import FriendList from "./FriendBox";
import { UserContext } from "./../../context/UserContext";
import { SERVER_URL } from "../../config";

export const Content = styled.div`
  background-color: var(--surface-background-subtle);
  height: 100%;
  padding: 40px;
  overflow-y: scroll;
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

const FriendRequest = () => {
  const { user, refetchUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  return (
    <Content>
      <Text>Lời mời kết bạn({user?.friendRequestReceived?.length})</Text>
      <ListBox>
        {user?.friendRequestReceived?.map((user) => (
          <FriendList
            loading={loading}
            key={user.name}
            name={user.name}
            avatar={user.picture}
            onAccept={async () => {
              try {
                setLoading(true);
                await fetch(`${SERVER_URL}/user/acceptfriend/${user._id}`, {
                  method: "GET",
                  credentials: "include",
                });
                await refetchUser();
              } catch (err) {
                console.log(err);
              } finally {
                setLoading(false);
              }
            }}
          />
        ))}
      </ListBox>
    </Content>
  );
};

export default FriendRequest;
