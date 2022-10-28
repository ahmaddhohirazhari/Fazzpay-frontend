import React, { useState } from "react";
import { login } from "stores/action/auth";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux/es/exports";
import { getDataUserById } from "stores/action/user";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Image from "next/image";

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({});
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login(form))
      .then((response) => {
        toast.success(response.value.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });
        dispatch(getDataUserById(response.value.data.data.id));
        Cookies.set("token", response.value.data.data.token);
        Cookies.set("userId", response.value.data.data.id);
        setTimeout(() => {
          router.push("/home");
        }, 3000);
      })
      .catch((error) => {
        toast.error(error.response.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
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
            type="email"
            className="input my-2"
            name="email"
            placeholder="Input email ..."
            onChange={handleChangeText}
          />
          <input
            type="password"
            className="input my-2"
            name="password"
            placeholder="Input password ..."
            onChange={handleChangeText}
          />
          <button type="button" className="button-login " onClick={handleLogin}>
            Login
            <ToastContainer />
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