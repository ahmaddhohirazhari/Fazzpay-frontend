import React from "react";
import Image from "next/image";
import imageDefault from "../../public/profile.jpg";
import NotifCard from "../notification";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function Header(props) {
  const notif = props.notif;
  console.log(notif);

  const userData = useSelector((state) => state.user.data);

  const { firstName, lastName, noTelp, image } = userData;

  return (
    <>
      <div className="container-fluid bg-white  shadow py-2 fixed-top">
        <div className="container-lg d-flex justify-content-between align-items-center position-relative">
          <h1 className="h3 fw-bold text-primary m-0 d-none d-md-block">
            FazzPay
          </h1>
          <div className="d-flex align-items-center justify-content-between flex-grow-1 flex-md-grow-0">
            <div className="d-flex align-items-center me-auto">
              <div className="profile-picture me-3">
                <Image
                  src={
                    image ? process.env.URL_CLOUDINARY + image : imageDefault
                  }
                  alt="profile picture"
                  width={48}
                  height={48}
                  style={{ borderRadius: "8px" }}
                  objectFit="cover"
                />
              </div>
              <div className="me-2">
                <p className="fs-6 fw-bold m-0">{`${firstName} ${lastName}`}</p>
                <p className="fs-7 m-0">{noTelp}</p>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <button
                className="btn rounded-circle"
                style={{ boxShadow: "none" }}
                onClick={() =>
                  props.isNotifShown
                    ? props.setIsNotifShown(false)
                    : props.setIsNotifShown(true)
                }
              >
                {props.isNotifShown ? (
                  <i className="bi bi-bell-fill text-warning d-block fs-5"></i>
                ) : (
                  <i className="bi bi-bell d-block fs-5"></i>
                )}
              </button>
            </div>
          </div>
          {props.isNotifShown ? (
            <div className="notif-modal bg-light rounded shadow-lg p-4 position-absolute">
              <div className="scrollable-wrapper overflow-auto h-100">
                {notif.map((notif, index) => (
                  <div key={index}>{<NotifCard notif={notif} />}</div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
