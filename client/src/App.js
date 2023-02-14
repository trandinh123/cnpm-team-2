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
import { useEffect } from "react";
import PrivateConversation from "./pages/PrivateConversation/PrivateConversation";
import AccountGroup from "./components/AccountGroup/AccountGroup";
import GroupConversation from "./components/GroupConversation/GroupConversation";
import Login from "./pages/Login/Login";
import LoadingPage from "./components/LoadingPage/LoadingPage";

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

  useEffect(() => {
    if (userAuth) {
      socket.auth = { user: userAuth };
      socket.connect();
    }
  }, [userAuth]);

  if (!fetched) {
    return <LoadingPage />;
  }

  return (
    <div className="App" style={{ overflow: "hidden" }}>
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
                  isAllowed={!!userAuth}
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
            <Route path="/test" exact element={<Test />} />
            <Route
              path="/"
              exact
              element={
                <ProtectedRoute isAllowed={!!userAuth} component={<Home />} />
              }
            />
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
