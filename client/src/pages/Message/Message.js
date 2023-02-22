import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import MessageNavigation from "./../../components/MessageNavigation/MessageNavigation";
import useFetchApi from "./../../hooks/useFetchApi";
import { SERVER_URL } from "../../config";
import socket from "./../../services/socketIO";

export default function Message({ socket }) {
  return (
    <Layout
      navigationContent={
        <MessageNavigation socket={socket}></MessageNavigation>
      }
    >
      message screen
    </Layout>
  );
}
