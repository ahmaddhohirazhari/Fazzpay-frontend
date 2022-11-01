import React from "react";
import Layout from "../../layout";

export default function Topup() {
  return (
    <div>
      {/* TOP UP MODAL */}
      <div
        className="modal fade"
        id="pinInputModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="pinInputModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div
            className="modal-content px-3 py-2"
            style={{ borderRadius: "20px" }}
          >
            <div className="modal-header border-0">
              <h5 className="modal-title fw-bold" id="pinInputModal">
                Amount
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form>
              <div className="modal-body">
                <p className="opacity-75">
                  Enter your 6 digits PIN for confirmation to continue
                  transferring money.
                </p>
                <div className="profile-form mx-auto">
                  <input type="numeric" />
                </div>
              </div>
              <div className="modal-footer border-0">
                <button
                  type="submit"
                  className="btn btn-primary px-4 flex-grow-1 flex-md-grow-0"
                >
                  {isLoading ? (
                    <div
                      className="spinner-border spinner-border-sm text-white"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    "Continue"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
