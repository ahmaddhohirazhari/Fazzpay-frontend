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

  const handleChange = (e) => {
    setForm({
      ...form,
      pin: e,
    });
  };

  const handleSubmit = async () => {
    try {
      console.log(form);
      const result = await axiosClient.patch(`/user/pin/${userId}`, form);
      alert(result.data.msg);
    } catch (error) {
      console.log(error);
    }
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
            <Image src="/phone.png" width={400} height={400} alt="background" />
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
        <form className=" p-5">
          <p className="text-1">
            Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN
            That You Created Yourself.
          </p>
          <p className="text-2">
            Transfering money is eassier than ever, you can access FazzPay
            wherever you are. Desktop, laptop, mobile phone? we cover all of
            that for you!
          </p>
          <div className="pin-input">
            <PinInput
              length={6}
              initialValue=""
              secret
              onChange={(value, index) => {
                handleChange(value);
              }}
              type="numeric"
              inputMode="number"
              style={{ padding: "10px" }}
              inputStyle={{ borderColor: "red" }}
              inputFocusStyle={{ borderColor: "blue" }}
              onComplete={(value, index) => {}}
              autoSelect={true}
              regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
            />
          </div>

          <button
            type="button"
            className="button-login "
            onClick={handleSubmit}
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}
