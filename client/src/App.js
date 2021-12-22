import { useEffect } from "react";
import { Route } from "react-router-dom";

import SignUp from "./components/RegisterForm";
import SignIn from "./components/LoginForm";
import "./App.css";
import { getAuthUser } from "./Js/actions/userActions";
import ButtonAppBar from "./components/AppNavBar";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
function App() {
  const dispatch = useDispatch();

  // const history = useHistory();
  // useEffect(() => {
  //   dispatch(getAuthUser());
  //   history.push("/dash");
  // }, []);
  return (
    <div className="App">
      <ButtonAppBar />
      <Route exact path="/register" component={SignUp} />
      <Route path="/login" component={SignIn} />
      <Route path="/dash" render={() => <h1>dash</h1>} />
    </div>
  );
}

export default App;
