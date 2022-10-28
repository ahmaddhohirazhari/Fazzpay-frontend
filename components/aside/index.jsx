import React from "react";
import { MdOutlineDashboardCustomize } from "react-icons/Md";
import { AiOutlineArrowUp } from "react-icons/Ai";
import { AiOutlineUser } from "react-icons/Ai";
import { AiOutlinePlus } from "react-icons/Ai";
import { FiLogOut } from "react-icons/Fi";

export default function Aside() {
  return (
    <div className="container aside  ">
      <div className="icon_dashboard ">
        <MdOutlineDashboardCustomize className=" me-3 " /> Dashboard
      </div>
      <div className="icon_transfer">
        <AiOutlineArrowUp className="icon_transfer me-3" />
        Transfer
      </div>
      <div className="icon_topup mt-1">
        <AiOutlinePlus />
        Topup
      </div>

      <div className="icon_profile mt-1">
        <AiOutlineUser />
        Profile
      </div>

      <div className="icon_logout mt-1">
        <FiLogOut />
        Logout
      </div>
    </div>
  );
}
