import React from "react";
import classes from "../landing.module.css";
import logo from "../Assets/Svg/logo.svg";
import { useNavigate } from "react-router-dom";

function Headertwo() {
  const navigate = useNavigate();

  return (
    <div className={classes.headertwo}>
      <div className={classes.logo}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <button onClick={() => navigate("/signin")}>Sign in</button>
          <button onClick={() => navigate("/signup")}>Signup</button>
        </div>
      </div>
    </div>
  );
}

export default Headertwo;
