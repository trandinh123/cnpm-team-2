import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/bootstrap.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Account from "./pages/Account/Account";
import { useEffect, useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const getUser = async () => {
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
    setUser(user);
    setLoading(false);
  };

  useEffect(() => {
    getUser();
  }, []);

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/account" exact element={<Account user={user} />} />
          <Route
            path="/"
            exact
            element={<ProtectedRoute isAllowed={!!user} component={<Home />} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
