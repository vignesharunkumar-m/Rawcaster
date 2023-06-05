import React from "react";
import Headerone from "../../Shared components/Headerone";
import signup from "../../Assets/Svg/signin-intro.svg";
import logo from "../../Assets/Svg/logo.svg";
import classes from "../AuthLayout/auth.module.css";

function Signup() {
  return (
    <div>
      <Headerone />
      <div className={classes.container}>
        {/* <div className={classes.child1}>
          <div className={classes.signup}>
            <img className={classes.logo} src={logo} alt="logo" />
            <h2>Join Rawcaster Family</h2>
            <p className={classes.txt1}>
              Join now to access the latest insights,experience for your social
              media perfomance.
            </p>
            <div className={classes.names}>
              <div>
                <label>First Name</label>
                <br />
                <input type="text" placeholder="Your Firstname" />
              </div>
              <div>
                <label>Last Name</label>
                <br />
                <input type="text" placeholder="Your Lasstname" />
              </div>
            </div>
            <div className={classes.mail_pass}>
              <label>Email</label>
              <br />
              <input type="text" placeholder="Your email address" />
              <br />
              <label> Password</label>
              <br />
              <input type="password" placeholder="Password" />
            </div>

            <p>
              We recommend your password to be at least 8 characters long,
              contain uppercase letter(A-Z),lowercase letter (a-z),
              symbol(!@#$%) and a number (0-9).
            </p>
            <p>
              By Signing up you agree with Rawcaster's{" "}
              <span>terms and conditions</span>
            </p>
          </div>
        </div> */}
        <div className={classes.child2}>
          <img src={signup} alt="signup" />
        </div>
      </div>
    </div>
  );
}

export default Signup;
