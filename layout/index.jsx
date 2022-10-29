import React from "react";
import Header from "components/header";
import Footer from "components/footer";
import Aside from "components/aside";
import Head from "next/head";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>FazzPay App || {props.title}</title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
        ></link>
      </Head>
      <Header />
      <div className="container">
        <div className="row ">
          <div className="col-4 me-2">
            <Aside />
          </div>
          <div className="col-7">
            <main>{props.children}</main>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
