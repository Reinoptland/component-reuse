import React from "react";
import "./Alert.css";

export default function Alert({ className, variant, children, ...otherProps }) {
  console.log("WHAT IS rest:", otherProps);
  const classes = className
    ? `alert ${variant} ${className}`
    : `alert ${variant}`;

  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  );
}
