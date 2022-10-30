import React from "react";
import { useSelector } from "react-redux";

export default function ChangePassword() {
  const userData = useSelector((state) => state.user.data);
  console.log(userData);
  return <div></div>;
}
