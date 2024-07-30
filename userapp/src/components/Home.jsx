import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-black">
        <div className="mainBorder">
          <h1 className="text-center"> Welcome</h1>
          <h2>User Management System</h2>
        </div>
      </div>
      <div className="linkContainer">
        <Link className="mainLink" to="/user">
          Click here to continue
        </Link>
      </div>
    </>
  );
}
