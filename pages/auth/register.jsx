import React, { useState } from "react";
import { useRouter } from "next/router";
import { register } from "stores/actions/auth";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../../layout/banner";
import Link from "next/link";
export default function SignUp() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  console.log(auth.isLoading);
  const router = useRouter();
  const [showPwd, setShowPwd] = useState(false);
  const [form, setForm] = useState({});
  const isAllFormFilled = Object.keys(form).every((el) => form[el]);

  const handleSignup = () => {
    dispatch(register(form))
      .then((response) => {
        toast.success(response.value.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });
        setTimeout(() => {
          router.push("/auth/create-pin");
        }, 3000);
      })
      .catch((error) =>
        toast.error(error.response.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        })
      );
  };

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
            wherever you are and whenever you want
          </p>
        </div>
        <div className="d-block d-md-none text-center">
          <h2 className="h4 fw-bold mb-3">Sign Up</h2>
          <p className="opacity-75 mb-4">
            Create your account to access FazzPay
          </p>
        </div>
        <form className="flex-grow-1 d-flex flex-column justify-content-between">
          <div>
            <div className="input-with-icon mb-2">
              <i className="bi bi-person input-icon text-secondary"></i>
              <label
                htmlFor="first-name"
                className="form-label visually-hidden"
              >
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="first-name"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChangeForm}
              />
            </div>
            <div className="input-with-icon mb-2">
              <i className="bi bi-person input-icon text-secondary"></i>
              <label htmlFor="last-name" className="form-label visually-hidden">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="last-name"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChangeForm}
              />
            </div>
            <div className="input-with-icon mb-2">
              <i className="bi bi-envelope input-icon text-secondary"></i>
              <label htmlFor="email" className="form-label visually-hidden">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
                value={form.email}
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
                placeholder="Password"
                value={form.password}
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
          </div>
        </form>
        <button
          type="submit"
          className="btn btn-primary fw-bold my-4 w-100"
          disabled={!isAllFormFilled}
          onClick={handleSignup}
        >
          {auth.isLoading ? (
            <div
              className="spinner-border spinner-border-sm text-white"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            "Sign Up"
          )}
          <ToastContainer />
        </button>
        <p className="text-center m-0">
          Already have an account? {"L'ets "}
          <Link href="/login">
            <a className="text-primary fw-bold">Login</a>
          </Link>
        </p>
      </div>
    </Layout>
  );
}
