import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  return !isAuth ? <Redirect to="/login" /> : <div>dashboard</div>;
};

export default Dashboard;
