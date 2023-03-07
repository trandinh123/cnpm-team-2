import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import MessageNavigation from "./../../components/MessageNavigation/MessageNavigation";
import useFetchApi from "./../../hooks/useFetchApi";
import { SERVER_URL } from "../../config";
import socket from "./../../services/socketIO";
import homescreen from "../../img/homescreen.jpg";
import Container from "react-bootstrap/esm/Container";

export default function Message({ socket }) {
  return (
    <Layout
      navigationContent={
        <MessageNavigation socket={socket}></MessageNavigation>
      }
    >
      <Container style={{ backgroundColor: "white", height: "100vh" }}>
        <Container style={{ paddingTop: "100px" }}>
          <Container
            style={{
              width: "415px",
              textAlign: "center",
              marginBottom: "50px",
              maxWidth: "calc(100% - 24px)",
            }}
          >
            <p style={{ marginBottom: "16px", fontSize: "24px" }}>
              Chào mừng bạn đến với <strong>Zalo PC!</strong>
            </p>
            <p style={{ marginBottom: "16px", fontSize: "16px" }}>
              Khám phá những tiện ích hỗ trợ làm việc và trò chuyện cùng người
              thân, bạn bè được tối ưu hóa cho máy tính của bạn
            </p>
          </Container>
          <Container
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              marginTop: "60px",
            }}
          >
            <i
              class="fa-solid fa-chevron-right"
              style={{
                position: "absolute",
                top: "100px",
                right: "0",
                fontSize: "25px",
                color: "#0068ff",
              }}
            ></i>
            <i
              class="fa-solid fa-chevron-left"
              style={{
                position: "absolute",
                top: "100px",
                fontSize: "30px",
                color: "#0068ff",
              }}
            ></i>
            <img
              src={homescreen}
              alt=""
              style={{
                width: "380px",
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
          </Container>
        </Container>
      </Container>
    </Layout>
  );
}
