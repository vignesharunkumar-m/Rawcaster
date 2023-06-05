import React from "react";
import Headerone from "../../Shared components/Headerone";
import classes from "../AuthLayout/auth.module.css";
import logo from "../../Assets/Svg/logo.svg";
import r_logo from "../../Assets/PNG/r_logo.png";
import nuggets from "../../Assets/PNG/nuggets.png";
import TextBox from "../../Components/TextBox";
import { useNavigate } from "react-router-dom";
// import sonlogo from "../../Assets/Svg/sonlogo.svg";

// import { Formik } from "formik";

function Signin() {
  const navigate = useNavigate();
  // handleChange('name')
  return (
    <div className={classes.siginPage}>
      <div>
        <div className={classes.head}>
          <Headerone />
        </div>
        <div className={classes.container}>
          <div className={classes.child1}>
            <div>
              <img className={classes.res_logo} src={logo} alt="logo" />
              <h2>Welcome to Rawcaster</h2>
              <p className={classes.txt1}>
                Log in now to access the latest insights, experience for your
                social media performance.
              </p>

              <div className={classes.email}>
                <TextBox
                  onChangeText={(val) => {
                    console.log(val);
                  }}
                  title="Email address"
                  placeHolder="John@email.com"
                />
                <TextBox
                  title="Password"
                  placeHolder="Password"
                  customInputProps={{
                    onblur: () => {},
                  }}
                />
                <span className={classes.forgot}>Forgot Password</span>
              </div>
              <div className={classes.check}>
                <button>Sign in</button>
                <p className={classes.login}>
                  Not registerd yet?
                  <span onClick={() => navigate("/signin")}>
                    Create an Account
                  </span>
                </p>
              </div>
              <div className={classes.r_logo}>
                <img src={r_logo} alt="r_logo" />
                <div>
                  <p>© Copyright Rawcaster 2021</p>
                  <p>Terms and Conditions | Privacy Policy | Cookies Policy</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.child2}>
            <div>
              <div className={classes.sigin_img}>
                <img src={nuggets} alt="sigin" />
              </div>
              <h2>Post Nuggets</h2>
              <p>
                These are small pieces or tidbit of thoughts in your mind or an
                image (video or picture) that you want to share with one or more
                connected persons.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
