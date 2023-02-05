import React from "react";
// import "../../styles/modules/accountInfor.css";
import "../../styles/modules/updateInfor.css";
import coverPhoto from "../../img/anhbia.jpg";
import avt from "../../img/avatar.png";
import { useState, useEffect, useRef, useCallback, useContext } from "react";
import { animated, useSpring } from "react-spring";
import { UserContext } from "../../context/UserContext";

const UpdateModal = ({ openModal, setOpenModal, setAccInfOpen }) => {
  const { user } = useContext(UserContext);
  const handleClose = () => {
    setOpenModal(false);
    setAccInfOpen(false);
  };

  const animation = useSpring({
    config: {
      duration: 500,
    },
    opacity: openModal ? 1 : 0,
    transform: openModal ? `scale(1)` : `scale(0.5)`,
  });

  const modalRef = useRef();

  const modalClose = (e) => {
    if (modalRef.current === e.target) {
      handleClose();
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && openModal) {
        handleClose();
      }
    },
    [setOpenModal, openModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  // const DateOption = () =>{
  //     var years = [];
  //     var date = new Date();
  //     var cur = date.getFullYear();

  //     years.append(`<option value = ">${14}</option>`);
  //     for (i = cur-14; i >=1903; i--){
  //         years.append(`<option value="${i}">${i}</option>`)
  //     };

  //     var months = [];

  // }
  const [flagYear, setFlagYear] = useState(true);
  const [flagMonth, setFlagMonth] = useState(true);
  const [flagDay, setFlagDay] = useState(true);

  const [year, setYear] = useState("2002");
  const [month, setMonth] = useState("01");
  const day = new Date(year, month, 0).getDate();

  var y = [];
  var m = [];
  var d = [];

  for (var i = 0; i <= 112; i++) {
    y[i] = i + 1900;
  }
  for (var i = 0; i <= 11; i++) {
    m[i] = i + 1;
    if (m[i] < 10) {
      m[i] = "0" + m[i];
    }
  }
  for (var i = 0; i < day; i++) {
    d[i] = i + 1;
    if (d[i] < 10) {
      d[i] = "0" + d[i];
    }
  }

  const years = flagYear ? ["2002"] : y;
  const months = flagMonth ? ["01"] : m;
  const days = flagDay ? ["14"] : d;

  return (
    openModal && (
      <div className="updateInfContainer" ref={modalRef} onClick={modalClose}>
        <animated.div style={animation}>
          <div className="updateModal">
            <div className="headAccInf">
              <h4>Cập nhật thông tin</h4>
              <i
                class="fa-regular fa-x"
                onClick={handleClose}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
            <div className="updateContent">
              <img className="coverPhotoUpdate" src={coverPhoto} alt="" />
              <div className="imageAcc">
                <img className="avatarUpdate" src={avt} alt="" />
                <i class="fa-solid fa-camera camera"></i>
              </div>
              <div className="nameUpdate">
                <p className="text">Tên hiển thị</p>
                <input type="text" value={user.name} id="nameInput" />
                <small>Sử dụng tên thật để bạn bè dễ nhận diện hơn</small>
              </div>
              <hr />
              <div className="inforUser">
                <div className="title">Thông tin cá nhân</div>
                <div className="infUpdate">
                  <form>
                    <p className="text">Giới tính</p>
                    <input
                      type="radio"
                      id="male"
                      name="sex"
                      value="Nam"
                      className="sex"
                    />
                    <label for="male" className="text">
                      Nam
                    </label>
                    <input
                      type="radio"
                      id="female"
                      name="sex"
                      value="Nữ"
                      className="sex"
                    />
                    <label for="female" className="text">
                      Nữ
                    </label>

                    <p className="text">Ngày sinh</p>
                    <div className="dateUpdate">
                      <select
                        id="day"
                        name="days"
                        onClick={() => {
                          setFlagDay(false);
                        }}
                      >
                        {days.map((value, index) => (
                          <option value={value} key={index}>
                            {value}
                          </option>
                        ))}
                      </select>
                      <select
                        id="month"
                        name="months"
                        onClick={() => {
                          setFlagMonth(false);
                        }}
                        onChange={(e) => {
                          setMonth(e.target.value);
                        }}
                      >
                        {months.map((value, index) => (
                          <option value={value} key={index}>
                            {value}
                          </option>
                        ))}
                      </select>
                      <select
                        id="year"
                        name="years"
                        onClick={() => {
                          setFlagYear(false);
                        }}
                        onChange={(e) => {
                          setYear(e.target.value);
                        }}
                      >
                        {years.map((value, index) => (
                          <option value={value} key={index}>
                            {value}
                          </option>
                        ))}
                      </select>
                    </div>
                    <input type="submit" value="Cập nhật" />
                    <button className="cancelbtn" onClick={handleClose}>
                      Hủy
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </animated.div>
      </div>
    )
  );
};

export default UpdateModal;
