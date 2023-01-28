import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/bootstrap.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Account from "./pages/Account/Account";
import { useEffect, useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  const [userAuth, setUserAuth] = useState();
  const [loading, setLoading] = useState(true);
  const getUserAuth = async () => {
    const user = await fetch("http://localhost:5000/auth/user", {
      method: "GET",
      credentials: "include",
    })
      .then(async (res) => {
        const { success, data } = await res.json();
        if (success) {
          return data;
        }
        return null;
      })
      .catch((err) => {
        console.log(err);
      });
    setUserAuth(user);
    setLoading(false);
  };

  useEffect(() => {
    getUserAuth();
  }, []);

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/account" exact element={<Account />} />
          <Route
            path="/"
            exact
            element={
              <ProtectedRoute isAllowed={!!userAuth} component={<Home />} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
