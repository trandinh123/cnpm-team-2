import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import useFetchApi from "../../hooks/useFetchApi";
import { SERVER_URL, CLIENT_URL } from "../../config";

export default function Account() {
  const {
    loading,
    data: user,
    fetched,
    setLoading,
    refetch,
  } = useFetchApi({
    initialUrl: `${SERVER_URL}/user`,
  });
  const [email, setEmail] = useState("");
  if (!fetched) {
    return <>Loading....</>;
  }

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
      {!!user && !loading && (
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
                    setLoading(true);
                    await fetch(`${SERVER_URL}/user/unfriend/${friend._id}`, {
                      method: "GET",
                      credentials: "include",
                    });
                    await refetch();
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
                    setLoading(true);
                    await fetch(
                      `${SERVER_URL}/user/acceptfriend/${friend._id}`,
                      {
                        method: "GET",
                        credentials: "include",
                      }
                    );
                    await refetch();
                  }}
                >
                  Accept
                </button>
                <button
                  onClick={async () => {
                    setLoading(true);
                    await fetch(
                      `${SERVER_URL}/user/declineFriendRequest/${friend._id}`,
                      {
                        method: "GET",
                        credentials: "include",
                      }
                    );
                    await refetch();
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
                    setLoading(true);
                    await fetch(
                      `${SERVER_URL}/user/removeFriendRequest/${friend._id}`,
                      {
                        method: "GET",
                        credentials: "include",
                      }
                    );
                    await refetch();
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
              setLoading(true);
              await fetch(`${SERVER_URL}/user/addfriend/${email}`, {
                method: "GET",
                credentials: "include",
              });
              await refetch();
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
