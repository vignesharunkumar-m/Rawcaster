import React from "react";
import Headerone from "../../Shared components/Headerone";
import signup from "../../Assets/Svg/signin-intro.svg";
import logo from "../../Assets/Svg/logo.svg";
import classes from "../AuthLayout/auth.module.css";
import TextBox from "../../Components/TextBox";
import r_logo from "../../Assets/PNG/r_logo.png";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  return (
    <div>
      <div className={classes.head}>
        <Headerone />
      </div>
      <div className={classes.container}>
        <div className={classes.child1}>
          <div>
            <img src={logo} alt="logo" />
            <h2>Join Rawcaster Family</h2>
            <p className={classes.txt1}>
              Join now to access the latest insights, experience for your social
              media performance.
            </p>
            <div className={classes.names}>
              <TextBox title="First Name" placeHolder="Your Firstname" />
              <TextBox title="Last name" placeHolder="Your Lastname" />
            </div>
            <div className={classes.email}>
              <TextBox
                onChangeText={(val) => {
                  console.log(val);
                }}
                title="Email"
                placeHolder="Your email address"
              />
              <TextBox title="Password" placeHolder="Password" />
            </div>
            <div className={classes.check}>
              <p className={classes.txt1}>
                We recommend your password to be at least 8 characters long,
                contain uppercase letter(A-Z),lowercase letter (a-z),
                symbol(!@#$%) and a number (0-9).
              </p>
              <p className={classes.txt1}>
                By Signing up you agree with Rawcaster's
                <span> terms and conditions</span>
              </p>
              <button>Join Rawcaster Family</button>
              <p className={classes.login}>
                Aleady Registered?{" "}
                <span onClick={() => navigate("/signin")}>Login</span>
              </p>
            </div>
            <div className={classes.r_logo}>
              <img src={r_logo} alt="" />
              <div>
                <p>© Copyright Rawcaster 2021</p>
                <p>Terms and Conditions | Privacy Policy | Cookies Policy</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.child2}>
          <div>
            <img src={signup} alt="signup" />
            <h2>Connect Share Express</h2>
            <p>
              with Rawcaster Influencers, bloggers, writers, photographers can
              collaborate with their fans easily
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
