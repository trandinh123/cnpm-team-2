import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/bootstrap.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Account from "./pages/Account/Account";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { SERVER_URL } from "./config";
import useFetchApi from "./hooks/useFetchApi";
import Test from "./pages/Test/Test";
import { UserContext } from "./context/UserContext";
import Contact from "./pages/Contact/Contact";
import AddFriendList from "./components/AddFriendList/AddFriendList";
import socket from "./services/socketIO";
import { useEffect, useState } from "react";
import PrivateConversation from "./pages/PrivateConversation/PrivateConversation";
import AccountGroup from "./components/AccountGroup/AccountGroup";
import GroupConversation from "./components/GroupConversation/GroupConversation";
import Login from "./pages/Login/Login";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import PrivateCall from "./pages/PrivateCall/PrivateCall";
import { CLIENT_URL } from "./config";
import Button from "react-bootstrap/Button";

function App() {
  const {
    data: userAuth,
    fetched,
    setLoading: setUserLoading,
    loading: userLoading,
    refetch: refetchUser,
  } = useFetchApi({
    initialUrl: `${SERVER_URL}/user`,
  });

  const [receiveCall, setReceiveCall] = useState({
    isReceiving: false,
    user: {},
  });
  useEffect(() => {
    if (userAuth) {
      socket.auth = { user: userAuth };
      socket.connect();
    }
  }, [userAuth]);

  useEffect(() => {
    socket.on("receive call", ({ user }) => {
      console.log(user?.name, "is calling");
      setReceiveCall({
        isReceiving: true,
        user: user,
      });
    });
    socket.on("cancel call", ({ user }) => {
      console.log("cancel calling");
      setReceiveCall({
        isReceiving: false,
        user: {},
      });
    });
    return () => {
      socket.off("receive call");
      socket.off("cancel call");
    };
  }, [socket]);

  useEffect(() => {}, []);
  if (!fetched) {
    return <LoadingPage />;
  }

  return (
    <div className="App" style={{ overflow: "hidden" }}>
      {receiveCall.isReceiving && (
        <div
          style={{
            display: "sticky",
            top: "0",
            left: 0,
            width: "100vw",
            padding: "10px 30px",
            background: "whitesmoke",
          }}
        >
          <div
            className="d-flex align-items-center justify-content-around"
            style={{ width: "100%" }}
          >
            <div>{receiveCall?.user?.name} is calling...</div>
            <div>
              <Button
                variant="primary"
                onClick={() => {
                  socket.emit("answer call", {
                    fid: receiveCall?.user?._id,
                  });
                  window.open(
                    `${CLIENT_URL}/privateCall?fid=${receiveCall?.user?._id}&img=${receiveCall?.user?.picture}`,
                    "_blank"
                  );
                  setReceiveCall({
                    isReceiving: false,
                    user: {},
                  });
                }}
                className="acceptCall"
              >
                Accept
              </Button>
              <Button
                style={{ marginLeft: "30px" }}
                variant="danger"
                className="cancelCall"
                onClick={() => {
                  setReceiveCall({
                    isReceiving: false,
                    user: {},
                  });
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
      <UserContext.Provider
        value={{
          user: userAuth,
          userLoading,
          setUserLoading,
          refetchUser,
        }}
      >
        <Router>
          <Routes>
            <Route path="/login" exact element={<Login />} />
            <Route
              path="/contact"
              exact
              element={
                <ProtectedRoute
                  isAllowed={true}
                  component={<Contact />}
                />
              }
            >
              <Route path="friendInvitations" element={<AddFriendList />} />
              <Route path="groupInvitations" element={<AccountGroup />} />
              <Route
                path="privateConversation/:friendId"
                element={<PrivateConversation socket={socket} />}
                exact
              />
              <Route
                path="groupConversation/:groupId"
                element={<GroupConversation socket={socket} />}
                exact
              />
            </Route>
            <Route path="/account" exact element={<Account />} />
            <Route
              path="/privateCall"
              exact
              element={<PrivateCall socket={socket} />}
            />
            <Route
              path="/"
              exact
              element={
                <ProtectedRoute isAllowed={true} component={<Home />} />
              }
            />
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
