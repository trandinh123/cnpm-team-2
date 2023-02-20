import React, { useContext } from "react";
import {
  LayoutContainer,
  PageNavigation,
  ContactNavigation,
  MainContent,
} from "./layoutStyle";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FaSearch, FaBriefcase } from "react-icons/fa";
import {
  AiOutlineUserAdd,
  AiOutlineUsergroupAdd,
  AiFillCloud,
  AiFillSetting,
} from "react-icons/ai";
import { RiContactsBookLine, RiChat3Line } from "react-icons/ri";
import { TfiCheckBox } from "react-icons/tfi";
import { IconContext } from "react-icons";
import Image from "react-bootstrap/Image";
import IconButton from "../IconButton/IconButton";
import SettingModal from "../SettingModal/SettingModal";
import AccountInfor from "../AccountInfor/AccountInfor";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAddUserModal from "../useAddUserModal/useAddUserModal";
import useCreateGroupModal from "./../CreateGroupModal/useCreateGroupModal";
import { UserContext } from "./../../context/UserContext";

export default function Layout({ navigationContent, children }) {
  const [settingModalOpen, setSettingModalOpen] = useState(false);
  const [open, setOpen] = useState(0);
  const [accInfOpen, setAccInfOpen] = useState(false);
  const handleOpen = () => {
    setOpen(1);
    setSettingModalOpen(!settingModalOpen);
  };
  const { addUserModal, openAddUserModal } = useAddUserModal();
  const { createGroupModal, openCreateGroupModal } = useCreateGroupModal();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  return (
    <LayoutContainer>
      <PageNavigation
        className="d-flex space-between flex-column justify-content-between py-4"
        style={{ minWidth: "40px" }}
      >
        <IconContext.Provider value={{ size: 30, color: "white" }}>
          <Container
            fluid
            className="d-flex flex-column"
            style={{ rowGap: "32px" }}
          >
            <Image
              roundedCircle
              fluid
              src={user?.picture}
              style={{ cursor: "pointer", width: "48px", height: "48px" }}
            />
            <IconButton
              icon={<RiContactsBookLine />}
              customClass="contactIcon"
              onClick={() => {
                return navigate("/contact");
              }}
            />
            <IconButton icon={<RiChat3Line />} />
            <IconButton icon={<TfiCheckBox />} />
          </Container>
          <Container
            fluid
            className="d-flex flex-column"
            style={{ rowGap: "32px" }}
          >
            <IconButton icon={<AiFillCloud />} />
            <IconButton icon={<FaBriefcase />} />
            <IconButton
              icon={<AiFillSetting onClick={handleOpen} />}
              customStyle={{ padding: 0 }}
              customClass="settingIcon"
            />
            <SettingModal
              settingModalOpen={settingModalOpen}
              setSettingModalOpen={setSettingModalOpen}
              setAccInfOpen={setAccInfOpen}
            />
          </Container>
        </IconContext.Provider>
      </PageNavigation>
      <ContactNavigation style={{ minWidth: "200px" }}>
        <Container fluid className="mt-4 mx-0 px-0">
          <Row className="w-100 mx-0">
            <Col style={{ paddingRight: 0 }}>
              <InputGroup className="border-right-0">
                <InputGroup.Text className="bg-transparent">
                  <FaSearch style={{ color: "whitesmoke" }} />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Tìm kiếm"
                  style={{ borderLeft: "none" }}
                />
              </InputGroup>
            </Col>
            <Col
              xs={3}
              className="d-flex align-items-center justify-content-center px-0"
              style={{ columnGap: "20px" }}
            >
              <IconContext.Provider value={{ size: 20, color: "black" }}>
                <IconButton
                  icon={<AiOutlineUserAdd />}
                  onClick={openAddUserModal}
                  customClass="addFrBtn"
                />
                <IconButton
                  icon={
                    <AiOutlineUsergroupAdd onClick={openCreateGroupModal} />
                  }
                  customClass="addGroupBtn"
                />
              </IconContext.Provider>
            </Col>
          </Row>
        </Container>
        <Container className="mt-4">{navigationContent}</Container>
      </ContactNavigation>
      <MainContent>{children}</MainContent>
      <AccountInfor accInfOpen={accInfOpen} setAccInfOpen={setAccInfOpen} />
      {addUserModal}
      {createGroupModal}
    </LayoutContainer>
  );
}
