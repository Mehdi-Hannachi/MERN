import { useEffect } from "react";
import "./App.css";
import { getAuthUser } from "./Js/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import SignUp from "./components/RegisterForm";
import SignIn from "./components/LoginForm";
import ButtonAppBar from "./components/AppNavBar";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);

  useEffect(() => {
    dispatch(getAuthUser());
  }, [isAuth]);
  return (
    <div className="App">
      <Router>
        <ButtonAppBar />
        <Routes>
          <Route exact path="/register" element={<SignUp />} />
          <Route
            exact
            path="/profile"
            element={
              <PrivateRoute component={Profile} roles={[user && user.role]} />
            }
          />
          <Route exact path="/login" element={<SignIn />} />
          <Route
            path="/dash"
            element={
              <PrivateRoute component={Dashboard} roles={[user && user.role]} />
            }
          />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
