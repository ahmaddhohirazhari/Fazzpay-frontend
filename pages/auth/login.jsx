import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "stores/actions/auth";
import { getDataUserById } from "stores/actions/user";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../layout/banner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const router = useRouter();
  const [form, setForm] = useState({});
  const [showPwd, setShowPwd] = useState(false);
  const isAllFormFilled = Object.keys(form).every((el) => form[el]);
  console.log(auth.isLoading);

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
          router.push("/dashboard");
        }, 3000);
      })
      .catch((error) =>
        toast.error(error.response.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        })
      );
  };

  return (
    <Layout>
      <div className="w-100 auth-form">
        <div className="d-none d-md-block">
          <h2 className="h4 fw-bold mb-2">
            Start Accessing Your Banking Needs With FazzPay
          </h2>
          <p className="opacity-75 mb-4">
            Transfering money is easier than ever, you can access FazzPay
            wherever you are and whenever you want.
          </p>
        </div>
        <div className="d-block d-md-none text-center">
          <h2 className="h4 fw-bold mb-4">Login</h2>
          <p className="opacity-75 mb-4">
            Login to your existing account to access all the features in
            FazzPay.
          </p>
        </div>
        <form className="flex-grow-1 d-flex flex-column justify-content-between">
          <div>
            <div className="input-with-icon mb-3">
              <i className="bi bi-envelope input-icon text-secondary"></i>
              <label htmlFor="email" className="form-label visually-hidden">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChangeForm}
              />
            </div>
            <div className="input-with-icon mb-3">
              <i className="bi bi-key input-icon text-secondary"></i>
              <label htmlFor="password" className="form-label visually-hidden">
                Password
              </label>
              <input
                type={showPwd ? "text" : "password"}
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChangeForm}
              />
              <div role="button" onClick={() => setShowPwd(!showPwd)}>
                <i
                  className={`bi bi-${
                    showPwd ? "eye-slash" : "eye"
                  } text-secondary position-absolute top-50 end-0 translate-middle`}
                ></i>
              </div>
            </div>
            <Link href="/auth/forgot-password">
              <a className="fs-7 d-block text-end">Forgot password?</a>
            </Link>
          </div>
        </form>
        <button
          type="submit"
          className="btn btn-primary fw-bold mt-4 mb-4 w-100"
          disabled={!isAllFormFilled}
          onClick={handleLogin}
        >
          {auth.isLoading ? (
            <div
              className="spinner-border spinner-border-sm text-white"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            "Login"
          )}
          <ToastContainer />
        </button>
        <p className="text-center m-0">
          {"  Don't have an account? Let's"}
          <Link href="/register">
            <a className="text-primary fw-bold">Sign Up</a>
          </Link>
        </p>
      </div>
    </Layout>
  );
}
