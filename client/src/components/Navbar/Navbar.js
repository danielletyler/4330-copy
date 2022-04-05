import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Grid, Typography } from "@material-ui/core";
import useStyles from "./styles";
import decode from "jwt-decode";

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useNavigate();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history("/auth");
    setUser(null);
  };

  const handleProfile = () => {
    history("/profile");
  };

  const handleWishlist = () => {
    history("/wishlist");
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <Grid
      style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}
    >
      {user ? (
        <Button component={Link} to="/add">
          add
        </Button>
      ) : (
        <Button></Button>
      )}

      <Typography
        component={Link}
        to="/"
        className={classes.heading}
        variant="h2"
        align="left"
      >
        4330
      </Typography>

      {user ? (
        <div>
          <Button
            variant="contained"
            className={classes.logout}
            color="secondary"
            onClick={logout}
            style={{ height: 20, alignSelf: "center" }}
          >
            Logout
          </Button>
          <Button
            variant="contained"
            className={classes.logout}
            color="secondary"
            onClick={handleProfile}
            style={{ height: 20, alignSelf: "center" }}
          >
            Profile
          </Button>
          <Button
            variant="contained"
            className={classes.logout}
            color="secondary"
            onClick={handleWishlist}
            style={{ height: 20, alignSelf: "center" }}
          >
            Wishlist!!
          </Button>
        </div>
      ) : (
        <Button
          component={Link}
          to="/auth"
          variant="contained"
          color="primary"
          style={{ height: 20, alignSelf: "center" }}
        >
          Sign in
        </Button>
      )}
    </Grid>
  );
};

export default Navbar;
