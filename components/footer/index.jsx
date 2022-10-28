import React from "react";

export default function Footer() {
  return (
    <>
      <footer
        className="footer mt-auto py-1 "
        style={{ bottom: "0px", display: "block", background: "#6379F4" }}
      >
        <div className="container">
          <div className="row footer-text">
            <div className="  col-md-6">
              <h6>2020 FazzPay. Allright reserved</h6>
            </div>
            <div className="col-md-3 text-end">
              <p>082326673307</p>
            </div>
            <div className="col-md-3">
              <p>contact@fazzpay</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
