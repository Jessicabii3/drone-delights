import React from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* Här visas varje sida */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;