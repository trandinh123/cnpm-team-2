import React from "react";
import Layout from "../../components/Layout/Layout";

export default function Account({ user }) {
  return (
    <Layout>
      <button
        onClick={() => {
          window.open("http://localhost:5000/auth/google", "_self");
        }}
      >
        Login
      </button>
      <button
        onClick={async () => {
          await fetch("http://localhost:5000/auth/google/logout", {
            method: "GET",
            credentials: "include",
          });
          window.location.reload(false);
        }}
      >
        Logout
      </button>
      <div>List Friend</div>
      <ul>{user && user.friends.map((friend) => <li>{friend.name}</li>)}</ul>
    </Layout>
  );
}
