import React from "react";
import classes from "./TextBox.module.css";

export default function TextBox({
  title = "",
  placeHolder = "",
  value,
  onChangeText,
  customInputStyles,
  customInputProps,
  type = "text",
  errorText = "",
}) {
  return (
    <>
      <div className={classes.container}>
        <p className={classes.title}>{title}</p>
        <input
          value={value}
          type={type}
          placeholder={placeHolder}
          {...customInputProps}
          style={{ ...customInputStyles }}
          className={classes.inputBox}
          onChange={(e) => {
            onChangeText(e.target.value);
          }}
        />

        {errorText ? <p>{errorText}</p> : null}
      </div>
    </>
  );
}
