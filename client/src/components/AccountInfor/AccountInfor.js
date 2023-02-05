import React, { useContext } from "react";
import "../../styles/modules/accountInfor.css";
import coverPhoto from "../../img/anhbia.jpg";
import avt from "../../img/avatar.png";
import UpdateModal from "../UpdateModal/UpdateModal.js";
import { useState, useEffect, useCallback, useRef } from "react";
import { useSpring, animated } from "react-spring";
import { UserContext } from "../../context/UserContext";

const AccountInfor = ({ accInfOpen, setAccInfOpen }) => {
  const { user } = useContext(UserContext);
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => {
    setOpenModal(true);
  };

  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 400,
    },
    opacity: accInfOpen ? 1 : 0,
    transform: accInfOpen ? `scale(1)` : `scale(0.5)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setAccInfOpen(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && accInfOpen) {
        setAccInfOpen(false);
      }
    },
    [setAccInfOpen, accInfOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    accInfOpen && (
      <div className="accContainer" ref={modalRef} onClick={closeModal}>
        <animated.div style={animation}>
          <div className="accModal">
            <div className="headAccInf">
              <h4>Thông tin tài khoản</h4>
              <i
                onClick={() => setAccInfOpen(false)}
                class="fa-regular fa-x"
                style={{ cursor: "pointer", padding: "0 5px" }}
              ></i>
            </div>
            <div className="contentAccInf">
              <div className="imageAcc">
                <img className="coverPhoto" src={coverPhoto} alt="" />
                <img className="avatar" src={avt} alt="" />
                <h5 className="nameAcc">{user.name}</h5>
              </div>
              <div className="inforUser">
                <div className="title">Thông tin cá nhân</div>
                <ul>
                  <li>
                    <p className="titleInf">Bio</p>
                    <p className="cntInf">{user.bio || ""}</p>
                  </li>
                  <li>
                    <p className="titleInf">Điện thoại</p>
                    <p className="cntInf">{user.phonenumbers || ""}</p>
                  </li>
                  <li>
                    <p className="titleInf">Giới tính</p>
                    <p className="cntInf">{user.gender || ""}</p>
                  </li>
                  <li>
                    <p className="titleInf">Ngày sinh</p>
                    <p className="cntInf">{user.birthday || ""}</p>
                  </li>
                </ul>
                <button className="update-btn" onClick={handleOpen}>
                  <i class="fa-regular fa-pen-to-square"></i>
                  <p>Cập nhật thông tin</p>
                </button>
              </div>
            </div>
          </div>
        </animated.div>
        <UpdateModal
          setOpenModal={setOpenModal}
          openModal={openModal}
          setAccInfOpen={setAccInfOpen}
        />
      </div>
    )
  );
};

export default AccountInfor;
