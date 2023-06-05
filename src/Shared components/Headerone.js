import React from "react";
import classes from "../landing.module.css";
import { Link } from "react-router-dom";

function Headerone() {
  return (
    <div>
      <div className={classes.head}>
        <div className={classes.anger}>
          <Link>Join a meeting</Link>
          <Link>Host a meeting</Link>
          <Link>Download</Link>
          <Link>Support</Link>
          <Link>FAQs</Link>
        </div>
      </div>
    </div>
  );
}

export default Headerone;
