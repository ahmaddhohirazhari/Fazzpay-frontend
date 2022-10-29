import React from "react";
import { MdOutlineDashboardCustomize } from "react-icons/Md";
import { AiOutlineArrowUp } from "react-icons/Ai";
import { AiOutlineUser } from "react-icons/Ai";
import { AiOutlinePlus } from "react-icons/Ai";
import { FiLogOut } from "react-icons/Fi";

export default function Aside() {
  return (
    <div className="container aside  ">
      <div className="icon-dashboard mt-5">
        <MdOutlineDashboardCustomize className=" me-3 " /> Dashboard
      </div>
      <div className="icon-dashboard">
        <AiOutlineArrowUp className=" me-3" />
        Transfer
      </div>
      <div className="icon-dashboard me-3">
        <AiOutlinePlus className=" me-3" />
        Topup
      </div>

      <div className="icon-dashboard ">
        <AiOutlineUser className=" me-3" />
        Profile
      </div>

      <div className="icon-dashboard ">
        <FiLogOut className=" me-3" />
        Logout
      </div>
    </div>
  );
}
