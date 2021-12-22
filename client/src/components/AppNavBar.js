import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../Js/actions/userActions";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  console.log(isAuth);
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(logout());
  };
  const guestLinks = (
    <div>
      <Link to="/register">
        <Button color="#232323">register</Button>
      </Link>
      <Link to="/login">
        <Button color="#232323">login</Button>
      </Link>
    </div>
  );
  const LogLinks = (
    <Button color="inherit" onClick={logoutUser}>
      logout
    </Button>
  );
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          {isAuth ? LogLinks : guestLinks}
        </Toolbar>
      </AppBar>
    </div>
  );
}
