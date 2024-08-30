import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../02Navbar/Navbar";
import Footer from "../03Footer/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="mainHeight">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
