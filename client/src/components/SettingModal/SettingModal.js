import React from "react";
import { Setting, Wrapper, Text } from "./settingModalStyle";
import { useState } from "react";
import AccountInfor from "../AccountInfor/AccountInfor";
import { SERVER_URL } from "../../config";

const SettingModal = ({
  settingModalOpen,
  setSettingModalOpen,
  setAccInfOpen,
}) => {
  const [open, setOpen] = useState(false);

  return (
    settingModalOpen && (
      <>
        <Setting>
          <Wrapper
            onClick={() => {
              setAccInfOpen(true);
              setSettingModalOpen(false);
            }}
          >
            <i class="fa-regular fa-user" style={{ padding: 0, margin: 0 }}></i>
            <Text>Thông tin tài khoản</Text>
          </Wrapper>
          <hr
            style={{ margin: "4px 16px 2px 16px", padding: 0, height: 0 }}
          ></hr>
          <Wrapper
            onClick={async () => {
              await fetch(`${SERVER_URL}/auth/google/logout`, {
                method: "GET",
                credentials: "include",
              });
              window.location.reload(false);
            }}
          >
            <Text style={{ color: "red", margin: "0 16px 0 21px" }}>
              Đăng xuất
            </Text>
          </Wrapper>
        </Setting>
        {/* <AccountInfor setAccInfOpen={setAccInfOpen} accInfOpen={accInfOpen} /> */}
      </>
    )
  );
};

export default SettingModal;
