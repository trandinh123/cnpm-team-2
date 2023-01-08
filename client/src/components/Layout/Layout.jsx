import React from "react";
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
import IconButton from "../IconButton/IconButton";

export default function Layout({ navigationContent, children }) {
  return (
    <LayoutContainer>
      <PageNavigation
        className="d-flex space-between flex-column justify-content-between py-4"
        style={{ minWidth: "40px" }}
      >
        <Container fluid>
          <Row className="mt-4">
            <IconButton
              icon={<RiContactsBookLine />}
              customStyle={{ padding: 0 }}
            />
          </Row>
          <Row className="mt-4">
            <IconButton icon={<RiChat3Line />} customStyle={{ padding: 0 }} />
          </Row>
          <Row className="mt-4">
            <IconButton icon={<TfiCheckBox />} customStyle={{ padding: 0 }} />
          </Row>
        </Container>
        <Container fluid>
          <Row className="mt-4">
            <IconButton icon={<AiFillCloud />} customStyle={{ padding: 0 }} />
          </Row>
          <Row className="mt-4">
            <IconButton icon={<FaBriefcase />} customStyle={{ padding: 0 }} />
          </Row>
          <Row className="mt-4">
            <IconButton icon={<AiFillSetting />} customStyle={{ padding: 0 }} />
          </Row>
        </Container>
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
            >
              <IconButton
                color="black"
                icon={<AiOutlineUserAdd />}
                size="18px"
              />
              <IconButton
                color="black"
                icon={<AiOutlineUsergroupAdd />}
                size="18px"
              />
            </Col>
          </Row>
        </Container>
        <Container className="mt-4">{navigationContent}</Container>
      </ContactNavigation>
      <MainContent>{children}</MainContent>
    </LayoutContainer>
  );
}
