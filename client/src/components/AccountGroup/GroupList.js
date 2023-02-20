import React, { useContext, useState } from "react";
import styled from "styled-components";
import { UserContext } from "./../../context/UserContext";
import { SERVER_URL } from "../../config";
import useFetchApi from "./../../hooks/useFetchApi";
import GroupInfoBox from "./GroupInfoBox";
import { useNavigate } from "react-router-dom";

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
`;

const GroupList = () => {
  const navigate = useNavigate();
  const { data: groupList, loading: groupListLoading } = useFetchApi({
    initialUrl: `${SERVER_URL}/conversation`,
  });

  if (groupListLoading) {
    return <>Loading...</>;
  }
  return (
    <Content>
      <ListBox className="listGroupContainer">
        <Text>Tất cả({groupList?.length})</Text>
        {groupList?.map((group) => (
          <GroupInfoBox
            key={group?._id}
            name={
              <>
                <div style={{ textAlign: "center", marginBottom: "10px" }}>
                  {group?.chatName}
                </div>
                <div
                  style={{
                    textAlign: "center",
                    color: "grey",
                    fontSize: "12px",
                  }}
                >
                  ({group?.users?.length} thành viên)
                </div>
              </>
            }
            avatar=""
            onAccept={() => {
              try {
                navigate(`/contact/groupConversation/${group._id}`);
              } catch (err) {
                console.log(err);
              }
            }}
          />
        ))}
      </ListBox>
    </Content>
  );
};

export default GroupList;
