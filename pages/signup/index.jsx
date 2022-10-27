import React, { useState } from "react";
import axiosClient from "utils/axios";

import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Image from "next/image";

export default function SignUp() {
  const router = useRouter();
  const [form, setForm] = useState({});

  const handleSubmit = async () => {
    try {
      const result = await axiosClient.post("/auth/login", form);
      Cookies.set("token", result.data.data.token);
      Cookies.set("userId", result.data.data.id);
      //   proses kondisi pengecekan pin jika ada akan diarahkan ke home jika tidak ada akan diarahkan ke create pin
      router.push("/home");
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
            Start Accessing Banking Needs With All Devices and All Platforms
            With 30.000+ Users
          </p>
          <p className="text-2">
            Transfering money is eassier than ever, you can access FazzPay
            wherever you are. Desktop, laptop, mobile phone? we cover all of
            that for you!
          </p>
          <input
            type="text"
            className="input my-2"
            name="firstName"
            placeholder="Enter your firstname"
            onChange={handleChangeText}
          />
          <input
            type="text"
            className="input my-2"
            name="lastName"
            placeholder="Enter your lastname"
            onChange={handleChangeText}
          />
          <input
            type="email"
            className="input my-2"
            name="email"
            placeholder="Enter your e-mail"
            onChange={handleChangeText}
          />
          <input
            type="password"
            className="input my-2"
            name="password"
            placeholder="Create your password"
            onChange={handleChangeText}
          />
          <button
            type="button"
            className="button-login "
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
        <div className="text-question">
          <p>
            Don’t have an account? Let’s <a href="#">Sign Up</a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
