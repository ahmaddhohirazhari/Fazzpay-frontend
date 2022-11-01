import React from "react";
import { MdOutlineDashboardCustomize } from "react-icons/Md";
import { AiOutlineArrowUp } from "react-icons/Ai";
import { AiOutlineUser } from "react-icons/Ai";
import { AiOutlinePlus } from "react-icons/Ai";
import { FiLogOut } from "react-icons/Fi";

export default function Aside() {
  const [show, setShow] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formTopup, setFormTopup] = useState({
    amount: "",
  });

  const handleChangeTopupForm = (e) => {
    setFormTopup({ ...formTopup, amount: e.target.value });
  };
  console.log(formTopup);

  const logout = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/logout");
      localStorage.clear();
      Cookies.remove("userId");
      Cookies.remove("token");
      router.push("/signin");
    } catch (error) {
      alert(error);
    }
  };

  const handleTopupSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const resultTopup = await axios.post("/transaction/top-up", formTopup);
      window.open(resultTopup.data.data.redirectUrl);
      setIsLoading(false);
      setFormTopup({ amount: "" });
      alert("top up success");
      router.reload();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      alert("failed");
    }
  };
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
