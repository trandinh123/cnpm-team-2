import React from "react";
import Layout from "../../components/Layout/Layout";
import MessageNavigation from "../../components/MessageNavigation/MessageNavigation";

export default function Home() {
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
    </Layout>
  );
}