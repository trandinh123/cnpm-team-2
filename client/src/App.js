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
    return <>Loading...</>;
  }

  return (
    <div className="App">
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
            <Route path="/contact" exact element={<Contact />}>
              <Route path="friendInvitations" element={<AddFriendList />} />
              <Route path="groupInvitations" element={<>group list</>} />
              <Route
                path="privateConversation/:friendId"
                element={<Test socket={socket} />}
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
