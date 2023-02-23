import React from "react";
import styled from "styled-components";
import caller from "../../img/avatar2.jpg";

export const Background = styled.div`
  background-color: #000;
  width: 100vw;
  height: 100vh;
  display: flex;

  align-items: center;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin-top: 200px;
`;

export const I = styled.i`
  font-size: 30px;
`;

export const Button = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin: 250px 0 20px;
`;

const CallScreen = ({ img }) => {
  return (
    <Background>
      <Image src={img} />
      {/* <Button> */}
      {/* <I className="fa-solid fa-microphone" style={{ color: "#fff" }}></I>
        <I className="fa-solid fa-phone" style={{ color: "red" }}></I> */}
      {/* </Button> */}
    </Background>
  );
};

export default CallScreen;
