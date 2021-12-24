import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import SignIn from "./LoginForm";

const PrivateRoute = ({ component: RouteComponent, roles }) => {
  const user = useSelector((state) => state.userReducer.user);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const userHasRequiredRole = user && roles.includes(user.role) ? true : false;

  if (isAuth && userHasRequiredRole) {
    return <RouteComponent />;
  }

  //   if (!isAuth) {
  //     return <SignIn />;
  //   }
  if (isAuth && !userHasRequiredRole) {
    return <SignIn />;
  }

  return <Navigate to="/home" />;
};

export default PrivateRoute;
