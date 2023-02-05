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
import { useEffect } from "react";
import { UserContext } from "./context/UserContext";

function App() {
  const {
    loading,
    data: userAuth,
    fetched,
    setLoading: setUserLoading,
    loading: userLoading,
    refetch: refetchUser
  } = useFetchApi({
    initialUrl: `${SERVER_URL}/user`,
  });

  if (loading || !fetched) {
    return <>Loading...</>;
  }

  return (
    <div className="App">
      <UserContext.Provider
        value={{
          user: userAuth,
          userLoading,
          setUserLoading,
          refetchUser
        }}
      >
        <Router>
          <Routes>
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
