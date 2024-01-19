import React from "react";

export const UseAuth = () => {
  const user = localStorage.getItem("token");
  return user ? true : false;
};
