import React, { useState } from "react";
import axiosClient from "utils/axios";
import PinInput from "react-pin-input";

import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Image from "next/image";

export default function UpdatePin() {
  const router = useRouter();
  const [form, setForm] = useState({});
  const userId = Cookies.get("userId");

  const handleNavigate = () => {
    router.push("/home");
  };

  return (
    <div className="login">
      <div className="banner ">
        <div className="logo ">
          <Image
            src="/fazzpay.png"
            width={109}
            height={30}
            layout="responsive"
            alt="background"
          />
        </div>
        <div className="bg">
          <Image
            src="/bg.png"
            width={500}
            height={400}
            layout="responsive"
            alt="background"
          />
        </div>
        <div className="phone d-flex">
          <div className="phone-1">
            <Image src="/phone.png" width={350} height={400} alt="background" />
          </div>
        </div>
        <div className="text-banner">
          <p className="text-banner-1">App that Covering Banking Needs.</p>
          <p className="text-banner-2">
            FazzPay is an application that focussing in banking needs for all
            users in the world. Always updated and always following world
            trends. 5000+ users registered in FazzPay everyday with worldwide
            users coverage.
          </p>
        </div>
      </div>
      <div className="form ">
        <div className="success">
          <Image src="/success.png" width={45} height={45} alt="success" />
        </div>
        <form className=" p-5">
          <p className="text-1">Your PIN Was Successfully Created</p>
          <p className="text-2">
            Your PIN was successfully created and you can now access all the
            features in FazzPay.
          </p>

          <button
            type="button"
            className="button-login bg-primary text-white "
            onClick={handleNavigate}
          >
            Go To Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}
