import React from "react";
import { MdOutlineDashboardCustomize } from "react-icons/Md";
import { AiOutlineArrowUp } from "react-icons/Ai";
import { AiOutlineUser } from "react-icons/Ai";
import { AiOutlinePlus } from "react-icons/Ai";
import { FiLogOut } from "react-icons/Fi";

export default function Aside() {
  return (
    <div className="container bg-white">
      <div className="row_dashboard row">
        <div className="col d-flex">
          <div className="img_dashboard">
            <MdOutlineDashboardCustomize />
          </div>
          <div className="icon_dashboard mt-1">Dashboard</div>
        </div>
      </div>
      <div className="row_transfer row">
        <div className="col d-flex">
          <div className="img_transfer">
            <AiOutlineArrowUp />
          </div>
          <div className="icon_transfer mt-1">Transfer</div>
        </div>
      </div>
      <div className="row_topup row">
        <div className="col d-flex">
          <div className="img_topup">
            <AiOutlinePlus />
          </div>
          <div className="icon_topup mt-1">Topup</div>
        </div>
      </div>
      <div className="row_topup row">
        <div className="col  d-flex">
          <div className="img_topup">
            <AiOutlineUser />
          </div>
          <div className="icon_profile mt-1">Profile</div>
        </div>
      </div>
      <div className="row_logout row">
        <div className="col d-flex">
          <div className="img_transfer">
            <FiLogOut />
          </div>
          <div className="icon_logout mt-1">Logout</div>
        </div>
      </div>
    </div>
  );
}
