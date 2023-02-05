import React, { useContext, useState } from "react";
import Layout from "../../components/Layout/Layout";
import useFetchApi from "../../hooks/useFetchApi";
import { SERVER_URL, CLIENT_URL } from "../../config";
import { UserContext } from "../../context/UserContext";

export default function Account() {
  const { user, userLoading, refetchUser, setUserLoading } =
    useContext(UserContext);
  const [email, setEmail] = useState("");

  return (
    <Layout>
      <button
        onClick={() => {
          window.open(
            `${SERVER_URL}/auth/google?returnTo=${CLIENT_URL}/account`,
            "_self"
          );
        }}
      >
        Login
      </button>
      <button
        onClick={async () => {
          await fetch(`${SERVER_URL}/auth/google/logout`, {
            method: "GET",
            credentials: "include",
          });
          window.location.reload(false);
        }}
      >
        Logout
      </button>
      {!!user && !userLoading && (
        <>
          <div>Id: {user._id}</div>
          <div>Name: {user.name}</div>
          <div>Email: {user.email}</div>
          <br />
          <div>List Friend ({user.friends.length})</div>
          <ul>
            {user.friends.map((friend) => (
              <li>
                {friend.name}
                <button
                  onClick={async () => {
                    setUserLoading(true);
                    await fetch(`${SERVER_URL}/user/unfriend/${friend._id}`, {
                      method: "GET",
                      credentials: "include",
                    });
                    await refetchUser();
                  }}
                >
                  Unfriend
                </button>
              </li>
            ))}
          </ul>
          <div>
            Friend request received ({user.friendRequestReceived.length})
          </div>
          <ul>
            {user.friendRequestReceived.map((friend) => (
              <li>
                {friend.name}
                <button
                  onClick={async () => {
                    setUserLoading(true);
                    await fetch(
                      `${SERVER_URL}/user/acceptfriend/${friend._id}`,
                      {
                        method: "GET",
                        credentials: "include",
                      }
                    );
                    await refetchUser();
                  }}
                >
                  Accept
                </button>
                <button
                  onClick={async () => {
                    setUserLoading(true);
                    await fetch(
                      `${SERVER_URL}/user/declineFriendRequest/${friend._id}`,
                      {
                        method: "GET",
                        credentials: "include",
                      }
                    );
                    await refetchUser();
                  }}
                >
                  Decline
                </button>
              </li>
            ))}
          </ul>
          <div>Friend request sent ({user.friendRequestSent.length})</div>
          <ul>
            {user.friendRequestSent?.map((friend) => (
              <li>
                {friend.name}
                <button
                  onClick={async () => {
                    setUserLoading(true);
                    await fetch(
                      `${SERVER_URL}/user/removeFriendRequest/${friend._id}`,
                      {
                        method: "GET",
                        credentials: "include",
                      }
                    );
                    await refetchUser();
                  }}
                >
                  Remove request
                </button>
              </li>
            ))}
          </ul>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setUserLoading(true);
              await fetch(`${SERVER_URL}/user/addfriend/${email}`, {
                method: "GET",
                credentials: "include",
              });
              await refetchUser();
            }}
          >
            <div>Input email to add friend</div>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <button>Add Friend</button>
          </form>
        </>
      )}
    </Layout>
  );
}
