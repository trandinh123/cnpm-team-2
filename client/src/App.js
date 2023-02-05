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

function App() {
  const {
    data: userAuth,
    fetched,
    loading,
  } = useFetchApi({ initialUrl: `${SERVER_URL}/auth/user` });
  if (loading || !fetched) {
    return <>Loading...</>;
  }

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
