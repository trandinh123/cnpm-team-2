import React from "react";
// import "../../styles/modules/accountInfor.css";
import "../../styles/modules/updateInfor.css";
import coverPhoto from "../../img/anhbia.jpg";
import { useState, useEffect, useRef, useCallback, useContext } from "react";
import { animated, useSpring } from "react-spring";
import { UserContext } from "../../context/UserContext";
import { SERVER_URL } from "../../config";

const UpdateModal = ({ openModal, setOpenModal, setAccInfOpen }) => {
  const { user, refetchUser, userLoading } = useContext(UserContext);

  const [updateUser, setUpdateUser] = useState(user);
  const initialBirthday = () => {
    if (user.birthday !== "") {
      const [day, month, year] = user.birthday.split("/");
      return {
        day,
        month,
        year,
      };
    }
    return {
      day: "01",
      month: "01",
      year: "1900",
    };
  };
  const [birthday, setBirthday] = useState(() => initialBirthday());
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

  const years = flagYear ? [birthday.year] : y;
  const months = flagMonth ? [birthday.month] : m;
  const days = flagDay ? [birthday.day] : d;
  const handleChangeBirthday = ({ type, value }) => {
    setBirthday((prev) => ({ ...prev, [type]: value }));
  };
  const handleSaveUpdate = async (e) => {
    try {
      e.preventDefault();
      await fetch(`${SERVER_URL}/user`, {
        method: "PUT",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...updateUser,
          birthday: Object.values(birthday).join("/"),
        }),
      });
      await refetchUser();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setBirthday(initialBirthday());
    setFlagDay(true);
    setFlagMonth(true);
    setFlagYear(true);
  }, [user]);

  return (
    openModal && (
      <div className="updateInfContainer" ref={modalRef} onClick={modalClose}>
        <animated.div style={animation}>
          {!userLoading && (
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
                  <img
                    className="avatarUpdate"
                    src={updateUser.picture}
                    alt=""
                  />
                  <i class="fa-solid fa-camera camera"></i>
                </div>
                <div className="nameUpdate">
                  <p className="text">Tên hiển thị</p>
                  <input
                    type="text"
                    value={updateUser.name}
                    id="nameInput"
                    onChange={(e) =>
                      setUpdateUser((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                  />
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
                        value="male"
                        className="sex"
                        checked={updateUser.gender === "male"}
                        onClick={(e) =>
                          setUpdateUser((prev) => ({
                            ...prev,
                            gender: e.target.value,
                          }))
                        }
                      />
                      <label for="male" className="text">
                        Nam
                      </label>
                      <input
                        type="radio"
                        id="female"
                        name="sex"
                        value="female"
                        className="sex"
                        onClick={(e) =>
                          setUpdateUser((prev) => ({
                            ...prev,
                            gender: e.target.value,
                          }))
                        }
                        checked={updateUser.gender === "female"}
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
                          onChange={(e) =>
                            handleChangeBirthday({
                              type: "day",
                              value: e.target.value,
                            })
                          }
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
                          onChange={(e) =>
                            handleChangeBirthday({
                              type: "month",
                              value: e.target.value,
                            })
                          }
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
                          onChange={(e) =>
                            handleChangeBirthday({
                              type: "year",
                              value: e.target.value,
                            })
                          }
                        >
                          {years.map((value, index) => (
                            <option value={value} key={index}>
                              {value}
                            </option>
                          ))}
                        </select>
                      </div>
                      <button type="submit" onClick={handleSaveUpdate}>
                        Cập nhật
                      </button>
                      <button className="cancelbtn" onClick={handleClose}>
                        Hủy
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
          {userLoading && (
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          )}
        </animated.div>
      </div>
    )
  );
};

export default UpdateModal;
